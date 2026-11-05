import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, resolve, sep } from 'node:path';
import { createServer as createViteServer } from 'vite';
import { PRODUCTS, PROMO_CODES } from './src/data/products.js';

async function loadLocalEnv() {
  const content = await readFile(resolve('.env'), 'utf8').catch(() => '');
  for (const line of content.split(/\r?\n/)) {
    const match = line.match(/^\s*(?:export\s+)?([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*?)\s*$/);
    if (!match || match[1] in process.env) continue;
    const value = match[2].replace(/^(['"])(.*)\1$/, '$2');
    process.env[match[1]] = value;
  }
}

await loadLocalEnv();

const PORT = Number(process.env.PORT || 3000);
const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;
const APP_URL = process.env.APP_URL;
const IS_PRODUCTION = process.env.NODE_ENV === 'production' || process.argv.includes('--production');
const DIST_DIR = resolve('dist');

const promoDetails = {
  ...PROMO_CODES,
  BUNDLE15: { code: 'BUNDLE15', discount: 0.15, description: '15% Outfit Lookbook Bundle Discount' },
};

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
  });
  res.end(JSON.stringify(payload));
}

async function readJson(req) {
  const chunks = [];
  let size = 0;
  for await (const chunk of req) {
    size += chunk.length;
    if (size > 32_000) throw new Error('Request body is too large.');
    chunks.push(chunk);
  }
  return JSON.parse(Buffer.concat(chunks).toString('utf8'));
}

async function stripeRequest(path, options = {}) {
  const response = await fetch(`https://api.stripe.com/v1/${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${STRIPE_SECRET_KEY}`,
      ...(options.body ? { 'Content-Type': 'application/x-www-form-urlencoded' } : {}),
      ...options.headers,
    },
  });
  const payload = await response.json();
  if (!response.ok) {
    throw new Error(payload?.error?.message || 'Stripe could not process the request.');
  }
  return payload;
}

function getAppUrl(req) {
  if (APP_URL) return APP_URL.replace(/\/$/, '');
  const host = req.headers.host || `localhost:${PORT}`;
  return `http://${host}`;
}

function getValidatedItems(items) {
  if (!Array.isArray(items) || items.length === 0 || items.length > 60) {
    throw new Error('Your bag is empty or contains too many different items.');
  }

  return items.map((entry) => {
    const product = PRODUCTS.find((item) => item.id === entry.productId);
    const quantity = Number(entry.quantity);
    const size = String(entry.size || '');
    const color = String(entry.color || '');
    if (!product || !Number.isInteger(quantity) || quantity < 1 || quantity > 20) {
      throw new Error('One or more items in your bag are invalid. Please refresh and try again.');
    }
    if (!product.sizes.includes(size) || !product.colors.some((option) => option.name === color)) {
      throw new Error(`Please choose a valid size and color for ${product.name}.`);
    }
    return { product, quantity, size, color };
  });
}

async function createCheckoutSession(req, res) {
  if (!STRIPE_SECRET_KEY) {
    return sendJson(res, 503, { error: 'Stripe is not configured yet. Add STRIPE_SECRET_KEY to your .env file.' });
  }

  try {
    const body = await readJson(req);
    const items = getValidatedItems(body.items);
    const promoCode = String(body.promoCode || '').trim().toUpperCase();
    const promo = promoCode ? promoDetails[promoCode] : null;
    if (promoCode && !promo) return sendJson(res, 400, { error: 'That discount code is not valid.' });

    const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    const shipping = subtotal === 0 || subtotal >= 150 || promo?.freeShipping ? 0 : 15;
    const discount = promo?.discount || 0;
    const form = new URLSearchParams();
    const appUrl = getAppUrl(req);
    form.set('mode', 'payment');
    form.set('success_url', `${appUrl}/?checkout=success&session_id={CHECKOUT_SESSION_ID}`);
    form.set('cancel_url', `${appUrl}/?checkout=cancelled`);
    form.set('phone_number_collection[enabled]', 'true');
    ['US', 'CA'].forEach((country, index) => form.set(`shipping_address_collection[allowed_countries][${index}]`, country));

    let lineIndex = 0;
    for (const { product, quantity, size, color } of items) {
      form.set(`line_items[${lineIndex}][price_data][currency]`, 'usd');
      form.set(`line_items[${lineIndex}][price_data][product_data][name]`, product.name);
      form.set(`line_items[${lineIndex}][price_data][product_data][description]`, `${color} · Size ${size}`);
      form.set(`line_items[${lineIndex}][price_data][unit_amount]`, String(Math.round(product.price * (1 - discount) * 100)));
      form.set(`line_items[${lineIndex}][quantity]`, String(quantity));
      lineIndex += 1;
    }
    if (shipping > 0) {
      form.set(`line_items[${lineIndex}][price_data][currency]`, 'usd');
      form.set(`line_items[${lineIndex}][price_data][product_data][name]`, 'Standard shipping');
      form.set(`line_items[${lineIndex}][price_data][unit_amount]`, String(shipping * 100));
      form.set(`line_items[${lineIndex}][quantity]`, '1');
    }

    const session = await stripeRequest('checkout/sessions', { method: 'POST', body: form });
    return sendJson(res, 200, { url: session.url, sessionId: session.id });
  } catch (error) {
    console.error('Stripe Checkout session error:', error.message);
    return sendJson(res, 400, { error: error.message || 'Unable to start checkout.' });
  }
}

async function getCheckoutSession(req, res, requestUrl) {
  if (!STRIPE_SECRET_KEY) return sendJson(res, 503, { error: 'Stripe is not configured yet.' });
  const sessionId = requestUrl.searchParams.get('session_id');
  if (!sessionId || !/^cs_(test|live)_[A-Za-z0-9]+$/.test(sessionId)) {
    return sendJson(res, 400, { error: 'A valid checkout session is required.' });
  }
  try {
    const session = await stripeRequest(`checkout/sessions/${encodeURIComponent(sessionId)}`);
    return sendJson(res, 200, {
      paymentStatus: session.payment_status,
      status: session.status,
      amountTotal: session.amount_total,
      currency: session.currency,
    });
  } catch (error) {
    console.error('Stripe Checkout verification error:', error.message);
    return sendJson(res, 400, { error: 'Could not verify this payment. Please contact support if you were charged.' });
  }
}

const contentTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
};

const httpServer = createServer(async (req, res) => {
  const requestUrl = new URL(req.url || '/', `http://${req.headers.host || `localhost:${PORT}`}`);
  if (requestUrl.pathname === '/api/create-checkout-session' && req.method === 'POST') {
    return createCheckoutSession(req, res);
  }
  if (requestUrl.pathname === '/api/checkout-session' && req.method === 'GET') {
    return getCheckoutSession(req, res, requestUrl);
  }
  if (requestUrl.pathname.startsWith('/api/')) return sendJson(res, 404, { error: 'API route not found.' });

  if (!IS_PRODUCTION && vite) return vite.middlewares(req, res, (error) => {
    if (error) {
      vite.ssrFixStacktrace(error);
      sendJson(res, 500, { error: 'Unable to load the app.' });
    }
  });

  try {
    const requestedPath = decodeURIComponent(requestUrl.pathname === '/' ? '/index.html' : requestUrl.pathname);
    const filePath = resolve(DIST_DIR, `.${requestedPath}`);
    if (filePath !== DIST_DIR && !filePath.startsWith(`${DIST_DIR}${sep}`)) {
      res.writeHead(403).end('Forbidden');
      return;
    }
    const file = await readFile(filePath).catch(() => readFile(resolve(DIST_DIR, 'index.html')));
    res.writeHead(200, { 'Content-Type': contentTypes[extname(filePath)] || 'application/octet-stream' });
    res.end(file);
  } catch {
    res.writeHead(500).end('Unable to serve the app. Run npm run build first.');
  }
});

let vite;
if (!IS_PRODUCTION) {
  vite = await createViteServer({
    configFile: resolve('vite.config.js'),
    server: { middlewareMode: true, hmr: { server: httpServer } },
    appType: 'custom',
  });
}

httpServer.listen(PORT, () => {
  console.log(`ZPresents ${IS_PRODUCTION ? 'server' : 'dev server'} running at http://localhost:${PORT}`);
  if (!STRIPE_SECRET_KEY) console.log('Stripe is waiting for STRIPE_SECRET_KEY in .env.');
});

for (const signal of ['SIGINT', 'SIGTERM']) {
  process.on(signal, async () => {
    if (vite) await vite.close();
    httpServer.close(() => process.exit(0));
  });
}
