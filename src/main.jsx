import React from 'react';
import { createRoot } from 'react-dom/client';
import { Heart, Search, ShoppingBag, Sun, Moon, Star, ArrowRight, X, Plus, Minus, Mail, Clock, ChevronDown } from 'lucide-react';
import { StoreProvider, useStore } from './context/StoreContext';
import { CATEGORIES, PRODUCTS } from './data/products';
import { ProductPage } from './components/ProductPage';
import './index.css';

function parseHash() {
  const hash = window.location.hash.replace(/^#/, '').split('?')[0];
  if (hash === 'about' || hash === 'contact') return { page: hash };
  if (hash.startsWith('product/')) return { page: 'product', productId: decodeURIComponent(hash.slice(8)) };
  return { page: 'home' };
}

function AboutPage({ onShop }) {
  return (
    <section className="page-section container">
      <div className="page-hero">
        <span className="section-kicker">ZPresents</span>
        <h1>About us</h1>
        <p>Modern menswear, thoughtfully made. We design considered essentials for everyday life and the moments in between.</p>
      </div>
      <div className="page-prose">
        <p>ZPresents started with a simple idea: clothes should feel as considered as they look. We focus on form, fabric, and fit — pieces you reach for without thinking, then notice the details later.</p>
        <p>Every collection is edited down to what earns a place in the wardrobe. Exceptional materials, quieter silhouettes, and construction meant to last through seasons rather than trends.</p>
      </div>
      <div className="about-values">
        <article className="about-value-card"><h3>Considered materials</h3><p>We source fabrics that hold their shape, age well, and stay comfortable from first wear to last.</p></article>
        <article className="about-value-card"><h3>Thoughtful design</h3><p>Details are intentional: proportion, stitching, and finish — never decoration for its own sake.</p></article>
        <article className="about-value-card"><h3>Everyday confidence</h3><p>The goal is a quieter kind of confidence. Clothes that work together and move with you.</p></article>
      </div>
      <div className="page-cta-row">
        <button className="btn-primary" onClick={onShop}>Explore the collection <ArrowRight size={16}/></button>
        <a className="btn-secondary" href="#contact">Contact us</a>
      </div>
    </section>
  );
}

function ContactPage() {
  const [form, setForm] = React.useState({ name: '', email: '', message: '' });
  const update = (field) => (event) => setForm((current) => ({ ...current, [field]: event.target.value }));

  const submit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`ZPresents inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name}\n${form.email}`);
    window.location.href = `mailto:hello@zpresents.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="page-section container">
      <div className="page-hero">
        <span className="section-kicker">Customer care</span>
        <h1>Contact us</h1>
        <p>Questions about an order, a fit, or the collection? Write us at hello@zpresents.com. We typically reply within one business day.</p>
      </div>
      <div className="contact-layout">
        <div className="contact-details">
          <div className="contact-detail-card"><Mail size={18}/><div><h3>Email</h3><a href="mailto:hello@zpresents.com">hello@zpresents.com</a></div></div>
          <div className="contact-detail-card"><Clock size={18}/><div><h3>Hours</h3><p>Monday–Friday, 10am–6pm ET</p></div></div>
        </div>
        <form className="contact-form" onSubmit={submit}>
          <p className="contact-form-note">This form opens your email app with the message filled in. Nothing is stored on this site.</p>
          <div className="form-field"><label htmlFor="contact-name">Name</label><input id="contact-name" name="name" value={form.name} onChange={update('name')} required autoComplete="name"/></div>
          <div className="form-field"><label htmlFor="contact-email">Email</label><input id="contact-email" name="email" type="email" value={form.email} onChange={update('email')} required autoComplete="email"/></div>
          <div className="form-field"><label htmlFor="contact-message">Message</label><textarea id="contact-message" name="message" rows="6" value={form.message} onChange={update('message')} required/></div>
          <button className="btn-primary" type="submit">Open email <ArrowRight size={16}/></button>
        </form>
      </div>
    </section>
  );
}

function Storefront() {
  const store = useStore();
  const { filteredProducts, selectedCategory, setSelectedCategory, searchQuery, setSearchQuery,
    cart, cartCount, toggleWishlist, isWishlisted, setIsCartOpen, isCartOpen,
    updateCartQty, removeFromCart, cartTotal, cartSubtotal, shippingFee, discountAmount,
    isFreeShipping, theme, toggleTheme, appliedPromo, applyPromoCode, removePromoCode,
    clearCart, wishlist, isWishlistOpen, setIsWishlistOpen, toasts } = store;
  const [isStartingCheckout, setIsStartingCheckout] = React.useState(false);
  const [paymentError, setPaymentError] = React.useState('');
  const [paymentNotice, setPaymentNotice] = React.useState('');
  const [route, setRoute] = React.useState(parseHash);
  const [shopOpen, setShopOpen] = React.useState(false);
  const [promoInput, setPromoInput] = React.useState('');
  const shopMenuRef = React.useRef(null);
  const page = route.page;
  const activeProduct = page === 'product' ? PRODUCTS.find((item) => item.id === route.productId) : null;
  const shippingRemaining = Math.max(0, 150 - cartSubtotal);

  const openProduct = (productId) => {
    window.location.hash = `product/${productId}`;
  };

  const goToCatalog = (categoryId) => {
    if (categoryId) setSelectedCategory(categoryId);
    if (parseHash().page !== 'home') {
      window.location.hash = 'catalog';
      return;
    }
    document.querySelector('#catalog')?.scrollIntoView({ behavior: 'smooth' });
  };

  const focusSearch = () => {
    if (parseHash().page !== 'home') {
      window.location.hash = 'catalog';
      return;
    }
    document.querySelector('#catalog')?.scrollIntoView({ behavior: 'smooth' });
  };

  const startStripeCheckout = async () => {
    setPaymentError('');
    setIsStartingCheckout(true);
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: cart.map(item => ({
            productId: item.id,
            quantity: item.quantity,
            size: item.selectedSize,
            color: item.selectedColor,
          })),
          promoCode: appliedPromo?.code || '',
        }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Unable to start secure checkout.');
      if (!result.url) throw new Error('Stripe did not return a checkout link.');
      window.location.assign(result.url);
    } catch (error) {
      setPaymentError(error.message || 'Unable to start secure checkout. Please try again.');
      setIsStartingCheckout(false);
    }
  };

  React.useEffect(() => {
    const onHashChange = () => {
      setShopOpen(false);
      setRoute(parseHash());
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  React.useEffect(() => {
    if (page === 'home' && window.location.hash === '#catalog') {
      document.querySelector('#catalog')?.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    if (page !== 'home') window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page, route.productId]);

  React.useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const checkoutState = query.get('checkout');
    const sessionId = query.get('session_id');
    if (checkoutState === 'cancelled') {
      setPaymentNotice('Checkout was cancelled. Your bag is still saved.');
      window.history.replaceState({}, '', window.location.pathname);
      return;
    }
    if (checkoutState !== 'success' || !sessionId) return;

    fetch(`/api/checkout-session?session_id=${encodeURIComponent(sessionId)}`)
      .then(async response => {
        const result = await response.json();
        if (!response.ok) throw new Error(result.error || 'Payment status could not be verified.');
        return result;
      })
      .then(result => {
        if (result.paymentStatus === 'paid') {
          clearCart();
          setPaymentNotice('Payment confirmed. Thank you for your order.');
        } else {
          setPaymentNotice('Payment has not been confirmed yet. Your bag is still saved.');
        }
      })
      .catch(() => setPaymentNotice('We could not verify the payment status. Please contact support if you were charged.'))
      .finally(() => window.history.replaceState({}, '', window.location.pathname));
  }, [clearCart]);

  React.useEffect(() => {
    if (!shopOpen) return undefined;
    const close = (event) => {
      if (!shopMenuRef.current?.contains(event.target)) setShopOpen(false);
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, [shopOpen]);

  const submitPromo = (event) => {
    event.preventDefault();
    applyPromoCode(promoInput);
    setPromoInput('');
  };

  return <div className="app-container">
    <div className="announcement-bar"><span>Complimentary shipping on orders over <span className="highlight">$150</span></span></div>
    {paymentNotice && <div className="payment-return-banner" role="status">{paymentNotice}</div>}
    <header className="navbar"><div className="container navbar-inner">
      <a className="brand-logo" href="#top">ZPresents</a>
      <nav className="nav-page-links" aria-label="Primary">
        <div className="nav-shop" ref={shopMenuRef}>
          <button type="button" className={`nav-category-btn ${shopOpen ? 'active' : ''}`} aria-expanded={shopOpen} aria-haspopup="true" onClick={() => setShopOpen((open) => !open)}>Shop <ChevronDown size={14} className={`nav-shop-chevron ${shopOpen ? 'open' : ''}`}/></button>
          {shopOpen && <div className="nav-shop-menu" role="menu">{CATEGORIES.map((category) => <button type="button" role="menuitem" key={category.id} className={`nav-shop-item ${page === 'home' && selectedCategory === category.id ? 'active' : ''}`} onClick={() => { setShopOpen(false); goToCatalog(category.id); }}>{category.label}</button>)}</div>}
        </div>
        <a className={`nav-category-btn ${page === 'about' ? 'active' : ''}`} href="#about">About</a>
        <a className={`nav-category-btn ${page === 'contact' ? 'active' : ''}`} href="#contact">Contact</a>
      </nav>
      <div className="navbar-actions">
        <label className="search-input-wrapper"><Search size={17} className="search-icon-inside"/><input className="search-input" value={searchQuery} onChange={e=>setSearchQuery(e.target.value)} onFocus={focusSearch} placeholder="Search" aria-label="Search products"/></label>
        <button className="icon-btn" aria-label="Toggle theme" onClick={toggleTheme}>{theme === 'dark' ? <Sun size={19}/> : <Moon size={19}/>}</button>
        <button className="icon-btn" aria-label="Wishlist" onClick={()=>setIsWishlistOpen(true)}><Heart size={19}/>{wishlist.length > 0 && <span className="badge-count">{wishlist.length}</span>}</button>
        <button className="icon-btn" aria-label="Shopping bag" onClick={()=>setIsCartOpen(true)}><ShoppingBag size={20}/>{cartCount > 0 && <span className="badge-count">{cartCount}</span>}</button>
      </div>
    </div></header>
    <main className="site-main" id="top">
      {page === 'about' && <AboutPage onShop={() => goToCatalog('all')}/>}
      {page === 'contact' && <ContactPage/>}
      {page === 'product' && <ProductPage product={activeProduct} onBack={() => goToCatalog(activeProduct?.category || 'all')}/>}
      {page === 'home' && <>
      <section className="hero-section"><div className="container hero-banner"><div className="hero-glow"/><div className="hero-copy"><div className="hero-eyebrow">THE AUTUMN / WINTER EDITION — 2026</div><h1 className="hero-title">Form follows <span>feeling.</span></h1><p className="hero-desc">Considered essentials. Exceptional materials. A quieter kind of confidence.</p><div className="hero-cta-group"><button className="btn-primary" onClick={()=>document.querySelector('#catalog')?.scrollIntoView({behavior:'smooth'})}>Explore the collection <ArrowRight size={16}/></button></div><div className="hero-note"><span className="hero-note-dot"/> Thoughtfully made for the everyday</div></div><div className="hero-visual-grid"><div className="hero-img-card"><img src="https://images.unsplash.com/photo-1617137968427-85924c800a22?w=1200&auto=format&fit=crop&q=85" alt="Men's contemporary streetwear look"/><span className="hero-img-label">01 / Quiet confidence</span></div><div className="hero-img-card"><img src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=900&auto=format&fit=crop&q=80" alt="Men's modern casual style"/><span className="hero-img-label">02 / Made to move</span></div></div></div></section>
      <section className="trust-bar container"><div className="trust-item"><div className="trust-icon-box">✦</div><div><h4>Considered materials</h4><p>Built to last, made to wear</p></div></div><div className="trust-item"><div className="trust-icon-box">◇</div><div><h4>Thoughtful design</h4><p>Details with intention</p></div></div><div className="trust-item"><div className="trust-icon-box">↗</div><div><h4>Complimentary shipping</h4><p>On orders over $150</p></div></div></section>
      <section className="catalog-section container" id="catalog"><div className="section-header"><div className="section-title-wrap"><span className="section-kicker">THE WARDROBE</span><h2>Shop by category</h2><p>Start with the pieces you reach for most.</p></div></div><div className="category-sticky-bar"><div className="category-pill-grid">{CATEGORIES.map(c=><button key={c.id} className={`category-pill-card ${selectedCategory===c.id?'active':''}`} onClick={()=>setSelectedCategory(c.id)}><span className="category-pill-icon">{c.id==='all'?'✦':String(CATEGORIES.indexOf(c)).padStart(2,'0')}</span><span className="category-pill-title">{c.label}</span><span className="category-pill-count">{c.count} pieces <ArrowRight size={13}/></span></button>)}</div></div><div className="filter-toolbar"><div className="filter-controls-right"><select className="sort-select" value={store.sortBy} onChange={e=>store.setSortBy(e.target.value)} aria-label="Sort products"><option value="featured">Featured</option><option value="newest">Newest</option><option value="price-low">Price: low to high</option><option value="price-high">Price: high to low</option><option value="rating">Top rated</option></select></div></div>
        {filteredProducts.length ? <div className="products-grid">{filteredProducts.map(p=><article className="product-card" key={p.id}><div className="card-image-wrap" onClick={()=>openProduct(p.id)}><img className="card-image-primary" src={p.images[0]} alt={p.name} loading="lazy"/><div className="card-badges-row">{p.badge&&<span className="badge-tag gold">{p.badge}</span>}</div><button className={`card-wishlist-btn ${isWishlisted(p.id)?'active':''}`} aria-label={isWishlisted(p.id)?'Remove from wishlist':'Add to wishlist'} onClick={(event)=>{event.stopPropagation(); toggleWishlist(p);}}><Heart size={18} fill={isWishlisted(p.id)?'currentColor':'none'}/></button></div><div className="card-content"><div className="card-meta-row"><span className="card-category-tag">{CATEGORIES.find(c=>c.id===p.category)?.label}</span><span><Star size={13} fill="currentColor" className="card-rating-star"/> {p.rating}</span></div><h3 className="card-title"><button type="button" onClick={()=>openProduct(p.id)}>{p.name}</button></h3><p className="card-price-row"><span className="price-current">${p.price}</span>{p.originalPrice&&<span className="price-original">${p.originalPrice}</span>}</p><button className="quick-add-cart-btn" onClick={()=>openProduct(p.id)}>Select size <Plus size={15}/></button></div></article>)}</div> : <div className="empty-state"><h3>No pieces found</h3><p>Try another search or category.</p><button className="btn-secondary" onClick={()=>{store.resetFilters();}}>Reset filters</button></div>}
      </section>
      </>}
    </main>
    <footer className="site-footer"><div className="container footer-grid"><div className="footer-brand-col"><a className="brand-logo" href="#top">ZPresents</a><p>Modern menswear, thoughtfully made. Designed for everyday life and all the moments in between.</p></div><div className="footer-col"><h4>Explore</h4><ul>{CATEGORIES.slice(1).map(c=><li key={c.id}><button onClick={()=>goToCatalog(c.id)}>{c.label}</button></li>)}</ul></div><div className="footer-col"><h4>ZPresents</h4><ul><li><a href="#about">About us</a></li><li><a href="#contact">Contact us</a></li><li><a href="#catalog">New arrivals</a></li></ul></div></div><p className="footer-note container">Catalog photography is stock imagery for this demo. Live orders would use our own product photos, inventory, and Stripe webhooks.</p></footer>
    {isCartOpen&&<div className="drawer-backdrop" onClick={()=>setIsCartOpen(false)}><aside className="slide-drawer" onClick={e=>e.stopPropagation()}><div className="drawer-header"><h3>Your bag ({cartCount})</h3><button className="icon-btn" onClick={()=>setIsCartOpen(false)} aria-label="Close bag"><X/></button></div>{cart.length>0&&<div className="shipping-progress-wrap"><p className="shipping-progress-text">{isFreeShipping ? 'Complimentary shipping unlocked.' : `$${shippingRemaining.toFixed(0)} away from complimentary shipping`}</p><div className="shipping-progress-bar"><div className="shipping-progress-fill" style={{width: `${Math.min(100, (cartSubtotal / 150) * 100)}%`}}/></div></div>}<div className="drawer-body">{cart.length===0?<div className="empty-state"><h3>Your bag is empty</h3><p>Find something you love in the collection.</p></div>:cart.map(item=><div className="cart-item-card" key={item.cartItemId}><img className="cart-item-img" src={item.images[0]} alt=""/><div className="cart-item-info"><h4 className="cart-item-title">{item.name}</h4><p className="cart-item-variant">{item.selectedColor} · {item.selectedSize}</p><strong>${item.price}</strong><div className="cart-item-actions"><div className="qty-stepper"><button className="qty-btn" onClick={()=>updateCartQty(item.cartItemId,-1)} aria-label="Decrease quantity"><Minus size={14}/></button><span className="qty-val">{item.quantity}</span><button className="qty-btn" onClick={()=>updateCartQty(item.cartItemId,1)} aria-label="Increase quantity"><Plus size={14}/></button></div><button onClick={()=>removeFromCart(item.cartItemId)}>Remove</button></div></div></div>)}</div>{cart.length>0&&<div className="drawer-footer">{paymentError&&<p className="payment-error" role="alert">{paymentError}</p>}{appliedPromo ? <div className="drawer-summary-row"><span>Promo {appliedPromo.code}</span><button type="button" onClick={removePromoCode}>Remove</button></div> : <form className="promo-form" onSubmit={submitPromo}><input className="promo-input" value={promoInput} onChange={(event)=>setPromoInput(event.target.value)} placeholder="Promo code" aria-label="Promo code"/><button className="btn-secondary" type="submit">Apply</button></form>}<div className="drawer-summary-row"><span>Subtotal</span><span>${cartSubtotal.toFixed(2)}</span></div>{discountAmount>0&&<div className="drawer-summary-row"><span>Discount</span><span>−${discountAmount.toFixed(2)}</span></div>}<div className="drawer-summary-row"><span>Shipping</span><span>{shippingFee===0 ? 'Complimentary' : `$${shippingFee.toFixed(2)}`}</span></div><div className="drawer-summary-row total"><span>Total</span><strong>${cartTotal.toFixed(2)}</strong></div><button className="btn-primary" style={{width:'100%',justifyContent:'center'}} onClick={startStripeCheckout} disabled={isStartingCheckout}>{isStartingCheckout?'Connecting to Stripe…':'Continue to secure checkout'}</button><p className="payment-secure-note">Secure payment powered by Stripe</p></div>}</aside></div>}
    {isWishlistOpen&&<div className="drawer-backdrop" onClick={()=>setIsWishlistOpen(false)}><aside className="slide-drawer" onClick={e=>e.stopPropagation()}><div className="drawer-header"><h3>Saved ({wishlist.length})</h3><button className="icon-btn" onClick={()=>setIsWishlistOpen(false)} aria-label="Close wishlist"><X/></button></div><div className="drawer-body">{wishlist.length===0?<div className="empty-state"><h3>Nothing saved yet</h3><p>Tap the heart on a piece to keep it here.</p></div>:wishlist.map(item=><div className="cart-item-card" key={item.id}><img className="cart-item-img" src={item.images[0]} alt=""/><div className="cart-item-info"><h4 className="cart-item-title">{item.name}</h4><strong>${item.price}</strong><div className="cart-item-actions"><button type="button" onClick={()=>{ setIsWishlistOpen(false); openProduct(item.id); }}>View</button><button type="button" onClick={()=>toggleWishlist(item)}>Remove</button></div></div></div>)}</div></aside></div>}
    {toasts.length>0 && <div className="toast-container" aria-live="polite">{toasts.map((toast)=><div className={`toast-item toast-${toast.type}`} key={toast.id}>{toast.message}</div>)}</div>}
  </div>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><StoreProvider><Storefront/></StoreProvider></React.StrictMode>);
