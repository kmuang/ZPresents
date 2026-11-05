export const CATEGORIES = [
  { id: 'all', label: 'All Items', icon: 'Sparkles', count: 60 },
  { id: 'top', label: 'Tops', icon: 'Shirt', count: 12, description: 'Elevated tees, structured shirts, and fine knits.' },
  { id: 'bottom', label: 'Bottoms', icon: 'Layers', count: 12, description: 'Tailored trousers, selvedge denim, and technical cargos.' },
  { id: 'shoe', label: 'Shoes', icon: 'Footprints', count: 12, description: 'Chunky loafers, Italian leather low-tops, and trail runners.' },
  { id: 'short', label: 'Shorts', icon: 'Scissors', count: 12, description: 'Heavyweight sweatshorts, nylon trail, and pleated linen.' },
  { id: 'hoodie', label: 'Hoodies', icon: 'Flame', count: 12, description: 'Pullover, zip-through, oversized, graphic, and heavyweight hoodies.' },
];

export const SIZES = {
  top: ['S', 'M', 'L', 'XL', 'XXL'],
  bottom: ['28', '30', '32', '34', '36'],
  shoe: ['US 8', 'US 9', 'US 10', 'US 11', 'US 12', 'US 13'],
  short: ['S', 'M', 'L', 'XL', 'XXL'],
  hoodie: ['S', 'M', 'L', 'XL', 'XXL'],
};

export const COLOR_OPTIONS = [
  { name: 'Onyx Black', hex: '#111113' },
  { name: 'Chalk White', hex: '#F3F3F0' },
  { name: 'Smoked Taupe', hex: '#877B70' },
  { name: 'Olive Drab', hex: '#4B5320' },
  { name: 'Heather Grey', hex: '#9E9E9E' },
  { name: 'Midnight Navy', hex: '#1B2432' },
  { name: 'Raw Ochre', hex: '#C28448' },
];

export const PRODUCTS = [
  // ==================== TOPS ====================
  {
    id: 'top-1',
    name: 'Heavyweight Oversized Tee',
    category: 'top',
    price: 48,
    originalPrice: 60,
    rating: 4.9,
    reviewCount: 142,
    badge: 'Bestseller',
    isNew: false,
    inStock: true,
    material: '100% Combed Organic Cotton (300 GSM)',
    fit: 'Boxy, drop-shoulder relaxed cut. True to size for oversized look.',
    care: 'Machine wash cold inside out, hang dry only.',
    images: [
      'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=900&auto=format&fit=crop&q=80'
    ],
    colors: [
      { name: 'Onyx Black', hex: '#111113' },
      { name: 'Chalk White', hex: '#F3F3F0' },
      { name: 'Smoked Taupe', hex: '#877B70' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Constructed from bespoke 300GSM organic cotton jersey with a tight 1x1 rib collar that never sags. Designed with a structured drape that holds its shape throughout the day.',
    reviews: [
      { author: 'Marcus V.', rating: 5, date: '2 days ago', title: 'Best heavy tee on the market', comment: 'The collar stays crisp even after 10 washes. The drape is unreal.' },
      { author: 'Derrick K.', rating: 5, date: '1 week ago', title: 'Perfect weight and fit', comment: 'Substantial fabric without feeling stiff. Ordered 3 more colors.' }
    ]
  },
  {
    id: 'top-2',
    name: 'Raw Silk Cuban Collar Shirt',
    category: 'top',
    price: 110,
    originalPrice: 135,
    rating: 4.8,
    reviewCount: 88,
    badge: 'Luxury Blend',
    isNew: true,
    inStock: true,
    material: '65% Raw Mulberry Silk, 35% Belgian Linen',
    fit: 'Fluid relaxed fit with camp collar and straight hem.',
    care: 'Dry clean recommended or gentle hand wash cold.',
    images: [
      'https://images.pexels.com/photos/7671168/pexels-photo-7671168.jpeg?auto=compress&cs=tinysrgb&w=900',
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=900&auto=format&fit=crop&q=80'
    ],
    colors: [
      { name: 'Chalk White', hex: '#F3F3F0' },
      { name: 'Smoked Taupe', hex: '#877B70' },
      { name: 'Midnight Navy', hex: '#1B2432' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'An understated resort statement. Woven from breathable raw slub silk and linen that develops a distinct personal patina over time. Finished with genuine mother-of-pearl buttons.',
    reviews: [
      { author: 'Julian S.', rating: 5, date: '3 days ago', title: 'Effortless elegance', comment: 'Feels like second skin. Perfect drape for warm evenings.' }
    ]
  },
  {
    id: 'top-3',
    name: 'Waffle Knit Crew Sweater',
    category: 'top',
    price: 68,
    originalPrice: null,
    rating: 4.7,
    reviewCount: 64,
    badge: 'New Season',
    isNew: true,
    inStock: true,
    material: '100% Ring-Spun Heavy Waffle Cotton',
    fit: 'Modern tailored body with elongated ribbed cuffs.',
    care: 'Machine wash cold, dry flat.',
    images: [
      'https://images.pexels.com/photos/45982/pexels-photo-45982.jpeg?auto=compress&cs=tinysrgb&w=900',
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=900&auto=format&fit=crop&q=80'
    ],
    colors: [
      { name: 'Olive Drab', hex: '#4B5320' },
      { name: 'Onyx Black', hex: '#111113' },
      { name: 'Smoked Taupe', hex: '#877B70' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Textured micro-waffle weave delivers thermal insulation and architectural texture. Perfect for layering beneath trench coats or wearing solo with wide-leg trousers.',
    reviews: [
      { author: 'Evan R.', rating: 5, date: '2 weeks ago', title: 'Top tier layering piece', comment: 'Incredible texture and substantial weight. Cuffs stay tight.' }
    ]
  },
  {
    id: 'top-4',
    name: 'Structured Poplin Boxy Oxford Shirt',
    category: 'top',
    price: 95,
    originalPrice: 120,
    rating: 4.9,
    reviewCount: 73,
    badge: 'Trending',
    isNew: false,
    inStock: true,
    material: '100% High-Density Egyptian Cotton Poplin',
    fit: 'Contemporary boxy cut with subtle drop shoulder.',
    care: 'Machine wash cold, light steam press.',
    images: [
      'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=900&auto=format&fit=crop&q=80'
    ],
    colors: [
      { name: 'Chalk White', hex: '#F3F3F0' },
      { name: 'Midnight Navy', hex: '#1B2432' },
      { name: 'Heather Grey', hex: '#9E9E9E' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'A contemporary reimagining of the classic Oxford shirt. Features a crisp, matte poplin hand-feel with a clean hidden placket and tailored back pleat.',
    reviews: [
      { author: 'Nathan B.', rating: 5, date: '1 month ago', title: 'Modern silhouette done right', comment: 'Not stuffy at all. Looks amazing tucked or untucked.' }
    ]
  },
  {
    id: 'top-5',
    name: 'Vintage Mineral Wash Minimalist Tee',
    category: 'top',
    price: 52,
    originalPrice: null,
    rating: 4.6,
    reviewCount: 51,
    badge: 'Limited Drop',
    isNew: true,
    inStock: true,
    material: '100% Combed Slub Jersey Cotton',
    fit: 'Slightly relaxed, pre-shrunk vintage wash.',
    care: 'Cold wash, gentle tumble dry low.',
    images: [
      'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=900&auto=format&fit=crop&q=80'
    ],
    colors: [
      { name: 'Smoked Taupe', hex: '#877B70' },
      { name: 'Onyx Black', hex: '#111113' },
      { name: 'Olive Drab', hex: '#4B5320' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Each piece undergoes a bespoke salt-and-mineral enzyme wash to achieve a weathered, velvety hand feel with unique tonal variations across seams.',
    reviews: [
      { author: 'Liam P.', rating: 4, date: '3 weeks ago', title: 'Super soft', comment: 'Great color nuance, exactly what I was looking for.' }
    ]
  },
  {
    id: 'top-6',
    name: 'Fine-Gauge Merino Knit Polo',
    category: 'top',
    price: 98,
    originalPrice: 120,
    rating: 4.8,
    reviewCount: 36,
    badge: 'New Season',
    isNew: true,
    inStock: true,
    material: '100% Extrafine Merino Wool',
    fit: 'Regular fit with a refined open collar.',
    care: 'Hand wash cold or dry clean.',
    images: [
      'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=900&auto=format&fit=crop&q=80'
    ],
    colors: [
      { name: 'Midnight Navy', hex: '#1B2432' },
      { name: 'Smoked Taupe', hex: '#877B70' },
      { name: 'Chalk White', hex: '#F3F3F0' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'A polished knit polo in soft, breathable merino. The clean placket and softly structured collar make it an easy alternative to a woven shirt.',
    reviews: []
  },

  // ==================== BOTTOMS ====================
  {
    id: 'bottom-1',
    name: 'Relaxed Double-Pleated Tailored Trousers',
    category: 'bottom',
    price: 135,
    originalPrice: 160,
    rating: 4.9,
    reviewCount: 119,
    badge: 'Bestseller',
    isNew: false,
    inStock: true,
    material: '70% Fine Merino Wool, 28% Viscose, 2% Elastane',
    fit: 'Wide leg with gentle taper at ankle. High-rise waist.',
    care: 'Dry clean only.',
    images: [
      'https://images.pexels.com/photos/2897533/pexels-photo-2897533.jpeg?auto=compress&cs=tinysrgb&w=900',
      'https://images.unsplash.com/photo-1479064555552-3ef4979f8908?w=900&auto=format&fit=crop&q=80'
    ],
    colors: [
      { name: 'Onyx Black', hex: '#111113' },
      { name: 'Smoked Taupe', hex: '#877B70' },
      { name: 'Midnight Navy', hex: '#1B2432' }
    ],
    sizes: ['28', '30', '32', '34', '36'],
    description: 'The definitive modern trouser. Double front pleats yield dramatic volume through the thigh that cascades gracefully onto footwear. Internal elastic waist adjusters allow for tailored versatility.',
    reviews: [
      { author: 'Zack M.', rating: 5, date: '5 days ago', title: 'The drape is sensational', comment: 'Pairs cleanly with both heavy sneakers and dress loafers.' }
    ]
  },
  {
    id: 'bottom-2',
    name: 'Tech Modular Multi-Pocket Cargo Pants',
    category: 'bottom',
    price: 140,
    originalPrice: null,
    rating: 4.8,
    reviewCount: 94,
    badge: 'Popular',
    isNew: true,
    inStock: true,
    material: '100% Water-Repellent Structured Cordura Nylon',
    fit: 'Articulated knees, adjustable bungee ankle cuffs.',
    care: 'Machine wash cold, air dry.',
    images: [
      'https://images.unsplash.com/photo-1548883354-7622d03aca27?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=900&auto=format&fit=crop&q=80'
    ],
    colors: [
      { name: 'Olive Drab', hex: '#4B5320' },
      { name: 'Onyx Black', hex: '#111113' },
      { name: 'Smoked Taupe', hex: '#877B70' }
    ],
    sizes: ['28', '30', '32', '34', '36'],
    description: 'Engineered for tactical utility without sacrificing clean aesthetics. Equipped with hidden magnetic cargo flap pockets, YKK weatherproof zips, and ergonomic 3D knee darting.',
    reviews: [
      { author: 'Kai T.', rating: 5, date: '1 week ago', title: 'Ultimate streetwear cargos', comment: 'Quality is unmatched. Water beads right off.' }
    ]
  },
  {
    id: 'bottom-3',
    name: '14oz Japanese Selvedge Raw Denim',
    category: 'bottom',
    price: 165,
    originalPrice: 195,
    rating: 4.9,
    reviewCount: 162,
    badge: 'Artisanal',
    isNew: false,
    inStock: true,
    material: '100% Kuroki Mills Okayama Cotton Selvedge (14oz)',
    fit: 'Straight relaxed fit with red-line selvedge ID on outseam.',
    care: 'Soak inside out in cold water after 6 months of wear.',
    images: [
      'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=900',
      'https://images.unsplash.com/photo-1604176354204-9268737828e4?w=900&auto=format&fit=crop&q=80'
    ],
    colors: [
      { name: 'Midnight Navy', hex: '#1B2432' },
      { name: 'Onyx Black', hex: '#111113' }
    ],
    sizes: ['28', '30', '32', '34', '36'],
    description: 'Loom-woven in Okayama, Japan on vintage shuttle looms. Unsanforized deep indigo denim with distinct nep texture, custom matte black hardware, and embossed leather patch.',
    reviews: [
      { author: 'Daniel O.', rating: 5, date: '4 days ago', title: 'Heritage denim masterclass', comment: 'The fading potential is huge. Rigid yet molds to your body.' }
    ]
  },
  {
    id: 'bottom-4',
    name: 'Minimalist Tapered Wool-Blend Pants',
    category: 'bottom',
    price: 125,
    originalPrice: null,
    rating: 4.7,
    reviewCount: 45,
    badge: 'Core Essential',
    isNew: false,
    inStock: true,
    material: '60% Wool, 38% Polyester, 2% Spandex',
    fit: 'Clean tailored taper, cropped slightly above sneaker sole.',
    care: 'Dry clean recommended.',
    images: [
      'https://images.unsplash.com/photo-1479064555552-3ef4979f8908?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=900&auto=format&fit=crop&q=80'
    ],
    colors: [
      { name: 'Heather Grey', hex: '#9E9E9E' },
      { name: 'Onyx Black', hex: '#111113' },
      { name: 'Midnight Navy', hex: '#1B2432' }
    ],
    sizes: ['28', '30', '32', '34', '36'],
    description: 'Designed for effortless smart-casual rotation. Features invisible side zip pockets, smooth interior lining, and comfortable two-way mechanical stretch.',
    reviews: [
      { author: 'Brandon H.', rating: 5, date: '2 weeks ago', title: 'Work to weekend staple', comment: 'Crisp look with sweatpant-level comfort.' }
    ]
  },
  {
    id: 'bottom-5',
    name: 'Utility Drawstring Wide-Leg Pant',
    category: 'bottom',
    price: 115,
    originalPrice: 140,
    rating: 4.8,
    reviewCount: 58,
    badge: 'Trending',
    isNew: true,
    inStock: true,
    material: '100% Heavy Brushed Cotton Canvas',
    fit: 'Oversized wide leg with encased drawstring waist.',
    care: 'Machine wash cold inside out.',
    images: [
      'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1517445312882-bc9910d016b7?w=900&auto=format&fit=crop&q=80'
    ],
    colors: [
      { name: 'Smoked Taupe', hex: '#877B70' },
      { name: 'Olive Drab', hex: '#4B5320' },
      { name: 'Onyx Black', hex: '#111113' }
    ],
    sizes: ['28', '30', '32', '34', '36'],
    description: 'Heavyweight canvas washed for an authentic broken-in drape. Cut with an exaggerated wide leg profile and elasticized rear waistband for all-day freedom.',
    reviews: [
      { author: 'Sam G.', rating: 5, date: '1 month ago', title: 'Insanely flattering', comment: 'The silhouette looks stellar with chunky footwear.' }
    ]
  },
  {
    id: 'bottom-6',
    name: 'Brushed Cotton Pleated Chino',
    category: 'bottom',
    price: 118,
    originalPrice: 145,
    rating: 4.7,
    reviewCount: 29,
    badge: 'New Season',
    isNew: true,
    inStock: true,
    material: '98% Cotton, 2% Elastane Brushed Twill',
    fit: 'Relaxed straight leg with a single front pleat.',
    care: 'Machine wash cold inside out.',
    images: [
      'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=900&auto=format&fit=crop&q=80'
    ],
    colors: [
      { name: 'Smoked Taupe', hex: '#877B70' },
      { name: 'Olive Drab', hex: '#4B5320' },
      { name: 'Onyx Black', hex: '#111113' }
    ],
    sizes: ['28', '30', '32', '34', '36'],
    description: 'A versatile chino with a soft brushed finish, considered volume, and a clean single pleat. Designed to pair easily with tees, knits, and overshirts.',
    reviews: []
  },

  // ==================== SHOES ====================
  {
    id: 'shoe-1',
    name: 'Vortex Chunky Lug-Sole Leather Loafers',
    category: 'shoe',
    price: 195,
    originalPrice: 240,
    rating: 4.9,
    reviewCount: 180,
    badge: 'Iconic',
    isNew: false,
    inStock: true,
    material: '100% Full-Grain Calfskin Leather with Vibram Lug Sole',
    fit: 'True to size. Half sizes should size down.',
    care: 'Wipe clean with damp cloth and condition leather monthly.',
    images: [
      'https://images.pexels.com/photos/267301/pexels-photo-267301.jpeg?auto=compress&cs=tinysrgb&w=900',
      'https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=900&auto=format&fit=crop&q=80'
    ],
    colors: [
      { name: 'Onyx Black', hex: '#111113' },
      { name: 'Midnight Navy', hex: '#1B2432' }
    ],
    sizes: ['US 8', 'US 9', 'US 10', 'US 11', 'US 12', 'US 13'],
    description: 'Handcrafted in Florence using vegetable-tanned full-grain calf leather. Mounted onto an ultra-lightweight extruded rubber commando sole for a bold architectural stance.',
    reviews: [
      { author: 'Christian L.', rating: 5, date: '3 days ago', title: 'Showstopper loafers', comment: 'Zero break-in period and getting tons of compliments.' }
    ]
  },
  {
    id: 'shoe-2',
    name: 'Monochrome Italian Minimalist Low-Tops',
    category: 'shoe',
    price: 175,
    originalPrice: null,
    rating: 4.8,
    reviewCount: 132,
    badge: 'Essential',
    isNew: false,
    inStock: true,
    material: 'Nappa Calfskin Upper, Margom Rubber Cupsole',
    fit: 'True to size with cushioned memory foam arch support.',
    care: 'Clean with sneaker cleaner brush and leather conditioner.',
    images: [
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=900&auto=format&fit=crop&q=80'
    ],
    colors: [
      { name: 'Chalk White', hex: '#F3F3F0' },
      { name: 'Onyx Black', hex: '#111113' },
      { name: 'Smoked Taupe', hex: '#877B70' }
    ],
    sizes: ['US 8', 'US 9', 'US 10', 'US 11', 'US 12', 'US 13'],
    description: 'Stripped of all superficial branding. Hand-stitched sidewalls, butter-soft leather lining, and waxed cotton laces provide understated luxury for any wardrobe.',
    reviews: [
      { author: 'Tyler R.', rating: 5, date: '1 week ago', title: 'Better than luxury designer brands', comment: 'The leather quality blew me away. Super plush insole.' }
    ]
  },
  {
    id: 'shoe-3',
    name: 'Castore Weatherproof Technical Trail Runner',
    category: 'shoe',
    price: 185,
    originalPrice: 215,
    rating: 4.9,
    reviewCount: 88,
    badge: 'GORE-Shield',
    isNew: true,
    inStock: true,
    material: 'Waterproof Ripstop Mesh, TPU Welded Overlays, EVA Midsole',
    fit: 'Snug performance fit with speed-lacing toggle.',
    care: 'Rinse with cold water, dry in shade.',
    images: [
      'https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=900',
      'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=900&auto=format&fit=crop&q=80'
    ],
    colors: [
      { name: 'Onyx Black', hex: '#111113' },
      { name: 'Olive Drab', hex: '#4B5320' },
      { name: 'Smoked Taupe', hex: '#877B70' }
    ],
    sizes: ['US 8', 'US 9', 'US 10', 'US 11', 'US 12', 'US 13'],
    description: 'Engineered for both off-road terrain and rain-soaked city streets. Features dynamic energy-return cushioning and high-traction chevron rubber treads.',
    reviews: [
      { author: 'Leo M.', rating: 5, date: '2 weeks ago', title: 'Insanely comfortable', comment: 'Walked 20,000 steps on day one without any foot fatigue.' }
    ]
  },
  {
    id: 'shoe-4',
    name: 'Suede Chelsea Boots in Smoked Taupe',
    category: 'shoe',
    price: 210,
    originalPrice: 250,
    rating: 4.8,
    reviewCount: 77,
    badge: 'Handcrafted',
    isNew: false,
    inStock: true,
    material: 'Water-Resistant Italian Suede with Natural Crepe Sole',
    fit: 'Sleek silhouette with reinforced elastic side gussets.',
    care: 'Brush with suede crepe brush and apply water-shield spray.',
    images: [
      'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=900&auto=format&fit=crop&q=80'
    ],
    colors: [
      { name: 'Smoked Taupe', hex: '#877B70' },
      { name: 'Onyx Black', hex: '#111113' }
    ],
    sizes: ['US 8', 'US 9', 'US 10', 'US 11', 'US 12', 'US 13'],
    description: 'Timeless Chelsea boot crafted in Portugal from buttery suede. Goodyear welted onto a shock-absorbing natural crepe rubber sole that yields supreme walkability.',
    reviews: [
      { author: 'Gavin K.', rating: 5, date: '1 month ago', title: 'Gorgeous silhouette', comment: 'Smoked taupe is the perfect neutral shade.' }
    ]
  },
  {
    id: 'shoe-5',
    name: 'Mesh Lifestyle Low Sneaker',
    category: 'shoe',
    price: 75,
    originalPrice: 90,
    rating: 4.7,
    reviewCount: 92,
    badge: 'Summer Core',
    isNew: true,
    inStock: true,
    material: '100% High-Density Injected EVA Bio-Foam',
    fit: 'Ergonomic anatomical footbed with deep heel cup.',
    care: 'Wash with mild soap and water.',
    images: [
      'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=900&auto=format&fit=crop&q=80'
    ],
    colors: [
      { name: 'Onyx Black', hex: '#111113' },
      { name: 'Smoked Taupe', hex: '#877B70' },
      { name: 'Chalk White', hex: '#F3F3F0' }
    ],
    sizes: ['US 8', 'US 9', 'US 10', 'US 11', 'US 12'],
    description: 'Sculptural one-piece molded recovery slides. Provides cloud-like cushioning with anti-microbial textured footbeds for poolside relaxation or casual city roaming.',
    reviews: [
      { author: 'Jordan S.', rating: 5, date: '6 days ago', title: 'Cloud comfort', comment: 'Haven’t taken these off all summer.' }
    ]
  },
  {
    id: 'shoe-6',
    name: 'Leather Monk-Strap Derby',
    category: 'shoe',
    price: 188,
    originalPrice: 225,
    rating: 4.8,
    reviewCount: 31,
    badge: 'New Season',
    isNew: true,
    inStock: true,
    material: 'Full-Grain Leather Upper, Leather Lining',
    fit: 'True to size with a softly rounded toe.',
    care: 'Wipe clean and condition leather regularly.',
    images: [
      'https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=900&auto=format&fit=crop&q=80'
    ],
    colors: [
      { name: 'Onyx Black', hex: '#111113' },
      { name: 'Smoked Taupe', hex: '#877B70' }
    ],
    sizes: ['US 8', 'US 9', 'US 10', 'US 11', 'US 12', 'US 13'],
    description: 'A pared-back leather derby that brings a refined finish to everyday outfits. Built with a cushioned footbed and durable stitched sole.',
    reviews: []
  },

  // ==================== SHORTS ====================
  {
    id: 'short-1',
    name: '500GSM Heavy French Terry Sweatshorts',
    category: 'short',
    price: 68,
    originalPrice: 85,
    rating: 4.9,
    reviewCount: 145,
    badge: 'Bestseller',
    isNew: false,
    inStock: true,
    material: '100% Heavyweight French Terry Cotton (500 GSM)',
    fit: 'Relaxed 6-inch inseam, thick ribbed drawstring waist.',
    care: 'Cold wash, tumble dry low.',
    images: [
      'https://images.pexels.com/photos/1261422/pexels-photo-1261422.jpeg?auto=compress&cs=tinysrgb&w=900',
      'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=900&auto=format&fit=crop&q=80'
    ],
    colors: [
      { name: 'Heather Grey', hex: '#9E9E9E' },
      { name: 'Onyx Black', hex: '#111113' },
      { name: 'Smoked Taupe', hex: '#877B70' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'The heavyweight standard. Knitted from ultra-dense 500GSM looped French terry with deep zippered front pockets and raw edge hems with reinforced stay-stitching.',
    reviews: [
      { author: 'Cole W.', rating: 5, date: '1 day ago', title: 'Phenomenal weight', comment: 'Heavy enough to have structure without feeling hot.' }
    ]
  },
  {
    id: 'short-2',
    name: 'Nylon Ripstop Multi-Pocket Trail Shorts',
    category: 'short',
    price: 78,
    originalPrice: null,
    rating: 4.8,
    reviewCount: 67,
    badge: 'Waterproof',
    isNew: true,
    inStock: true,
    material: '100% Recycled Water-Repellent Taslan Nylon',
    fit: '5.5-inch inseam with integrated webbing belt.',
    care: 'Machine wash cold, fast drying.',
    images: [
      'https://images.pexels.com/photos/2827392/pexels-photo-2827392.jpeg?auto=compress&cs=tinysrgb&w=900',
      'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=900&auto=format&fit=crop&q=80'
    ],
    colors: [
      { name: 'Olive Drab', hex: '#4B5320' },
      { name: 'Onyx Black', hex: '#111113' },
      { name: 'Raw Ochre', hex: '#C28448' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Lightweight, ultra-durable utility shorts built with DWR coating and breathable mesh-lined pocket bags. Features an aluminum buckle closure and carabiner key loop.',
    reviews: [
      { author: 'Harrison T.', rating: 5, date: '5 days ago', title: 'Perfect adventure shorts', comment: 'Wore these hiking and swimming, dried in 15 minutes.' }
    ]
  },
  {
    id: 'short-3',
    name: 'Tailored Pleated Linen Resort Shorts',
    category: 'short',
    price: 85,
    originalPrice: 110,
    rating: 4.8,
    reviewCount: 52,
    badge: 'Summer Essential',
    isNew: false,
    inStock: true,
    material: '100% French Normandy Flamed Linen',
    fit: 'Relaxed thigh with sharp front pleats and extended tab closure.',
    care: 'Gentle cycle cold, line dry.',
    images: [
      'https://images.unsplash.com/photo-1771711286856-765bdbca923f?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=900&auto=format&fit=crop&q=80'
    ],
    colors: [
      { name: 'Smoked Taupe', hex: '#877B70' },
      { name: 'Chalk White', hex: '#F3F3F0' },
      { name: 'Midnight Navy', hex: '#1B2432' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Elevated tailoring meets warm-weather leisure. Cut from high-grade flax linen that softens with every wash, styled with front pleats and horn buttons.',
    reviews: [
      { author: 'Mateo C.', rating: 5, date: '2 weeks ago', title: 'Vacation perfection', comment: 'Looks tailored enough for nice dinners with a linen shirt.' }
    ]
  },
  {
    id: 'short-4',
    name: 'Court Perforated Double-Layer Athletic Shorts',
    category: 'short',
    price: 62,
    originalPrice: null,
    rating: 4.7,
    reviewCount: 41,
    badge: 'Performance',
    isNew: true,
    inStock: true,
    material: 'Heavyweight Mesh Outer with Soft Modal Compression Liner',
    fit: '7-inch athletic fit with interior phone pocket.',
    care: 'Machine wash cold with like colors.',
    images: [
      'https://images.unsplash.com/photo-1656005947689-400af2fa63b1?w=900&auto=format&fit=crop&q=80',
      'https://images.pexels.com/photos/3253501/pexels-photo-3253501.jpeg?auto=compress&cs=tinysrgb&w=900'
    ],
    colors: [
      { name: 'Onyx Black', hex: '#111113' },
      { name: 'Heather Grey', hex: '#9E9E9E' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Retro basketball heritage merged with modern tech. Breathable double-layer perforated mesh with heavy knit striped waist ribbing and brass metal aglets.',
    reviews: [
      { author: 'Alex F.', rating: 5, date: '3 weeks ago', title: 'Great gym & lifestyle shorts', comment: 'The inner liner is so soft and holds my phone securely.' }
    ]
  },
  {
    id: 'short-5',
    name: 'Washed Canvas Utility Cargo Shorts',
    category: 'short',
    price: 74,
    originalPrice: 92,
    rating: 4.6,
    reviewCount: 38,
    badge: 'Durable',
    isNew: false,
    inStock: true,
    material: '100% Heavy Peached Cotton Twill',
    fit: 'Relaxed skater fit hit right above the knee.',
    care: 'Machine wash warm, tumble dry normal.',
    images: [
      'https://images.unsplash.com/photo-1628022622693-8cf6083f2724?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=900&auto=format&fit=crop&q=80'
    ],
    colors: [
      { name: 'Olive Drab', hex: '#4B5320' },
      { name: 'Smoked Taupe', hex: '#877B70' },
      { name: 'Onyx Black', hex: '#111113' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Built like workwear, styled for the street. Gusseted cargo pockets with reinforced bar-tack stitching and antique brass snap hardware.',
    reviews: [
      { author: 'Liam S.', rating: 4, date: '1 month ago', title: 'Tough as nails', comment: 'Super sturdy fabric that will last for years.' }
    ]
  },
  {
    id: 'short-6',
    name: 'Structured Cotton Drawstring Short',
    category: 'short',
    price: 72,
    originalPrice: null,
    rating: 4.7,
    reviewCount: 24,
    badge: 'New Season',
    isNew: true,
    inStock: true,
    material: '100% Compact Cotton Twill',
    fit: 'Relaxed fit with a clean 7-inch inseam.',
    care: 'Machine wash cold, hang dry.',
    images: [
      'https://images.unsplash.com/photo-1553068551-db8745da0850?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=900&auto=format&fit=crop&q=80'
    ],
    colors: [
      { name: 'Onyx Black', hex: '#111113' },
      { name: 'Smoked Taupe', hex: '#877B70' },
      { name: 'Olive Drab', hex: '#4B5320' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'A clean, structured short cut from compact cotton twill. Finished with an elastic drawstring waist, discreet side pockets, and an easy everyday fit.',
    reviews: []
  },

  // ==================== HOODIES ====================
  {
    id: 'hoodie-1',
    name: '500GSM Ultra-Heavyweight Boxy Hoodie',
    category: 'hoodie',
    price: 125,
    originalPrice: 155,
    rating: 5.0,
    reviewCount: 230,
    badge: 'Grail Piece',
    isNew: false,
    inStock: true,
    material: '100% Combed Cotton Heavy Terry (500 GSM)',
    fit: 'Extreme boxy cut, seamless double-layer hood, no drawstrings.',
    care: 'Machine wash cold inside out, dry flat.',
    images: [
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=900&auto=format&fit=crop&q=80',
      'https://images.pexels.com/photos/6311388/pexels-photo-6311388.jpeg?auto=compress&cs=tinysrgb&w=900'
    ],
    colors: [
      { name: 'Onyx Black', hex: '#111113' },
      { name: 'Heather Grey', hex: '#9E9E9E' },
      { name: 'Smoked Taupe', hex: '#877B70' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'The heavyweight crown jewel. Double-layered hood that stands upright without collapsing, dropped shoulders, kangaroo pocket with hidden internal phone sleeve, and ribbed side gussets.',
    reviews: [
      { author: 'Wesley M.', rating: 5, date: 'Yesterday', title: 'Literally the perfect hoodie', comment: 'The hood stands perfectly. Heavyweight fabric keeps you warm in any weather.' },
      { author: 'Anthony D.', rating: 5, date: '4 days ago', title: 'Worth every penny', comment: 'Better quality than $400 designer hoodies. The fit is masterclass.' }
    ]
  },
  {
    id: 'hoodie-2',
    name: 'Vintage Wash Pullover Hoodie',
    category: 'hoodie',
    price: 138,
    originalPrice: 170,
    rating: 4.9,
    reviewCount: 112,
    badge: 'Trending',
    isNew: true,
    inStock: true,
    material: '480GSM Vintage Washed Looped French Terry',
    fit: 'Relaxed pullover cut with a lined hood and kangaroo pocket.',
    care: 'Machine wash cold, dry flat.',
    images: [
      'https://images.unsplash.com/photo-1509942774463-acf339cf87d5?w=900&auto=format&fit=crop&q=80',
      'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=900'
    ],
    colors: [
      { name: 'Smoked Taupe', hex: '#877B70' },
      { name: 'Onyx Black', hex: '#111113' },
      { name: 'Olive Drab', hex: '#4B5320' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'A washed pullover hoodie with a lived-in color and a lined hood. Kangaroo pocket, ribbed cuffs, and a relaxed everyday drape.',
    reviews: [
      { author: 'Noah B.', rating: 5, date: '3 days ago', title: 'Two-way zip is game changing', comment: 'Allows you to style it unzipped from the bottom for layering.' }
    ]
  },
  {
    id: 'hoodie-3',
    name: 'Minimalist Drop-Shoulder Fleece Pullover',
    category: 'hoodie',
    price: 115,
    originalPrice: null,
    rating: 4.8,
    reviewCount: 95,
    badge: 'Essential',
    isNew: false,
    inStock: true,
    material: '100% Organic Brushed Cotton Fleece (420 GSM)',
    fit: 'Relaxed oversized fit with tailored cuffs.',
    care: 'Machine wash cold, tumble dry low.',
    images: [
      'https://images.pexels.com/photos/6311390/pexels-photo-6311390.jpeg?auto=compress&cs=tinysrgb&w=900',
      'https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?w=900&auto=format&fit=crop&q=80'
    ],
    colors: [
      { name: 'Chalk White', hex: '#F3F3F0' },
      { name: 'Midnight Navy', hex: '#1B2432' },
      { name: 'Heather Grey', hex: '#9E9E9E' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Clean lines, zero visual noise. Ultra-soft brushed microfleece interior feels like cashmere against the skin. Minimalist tonal embroidery on the left cuff.',
    reviews: [
      { author: 'Oliver S.', rating: 5, date: '1 week ago', title: 'Coziest piece I own', comment: 'Super soft interior and the color is clean.' }
    ]
  },
  {
    id: 'hoodie-4',
    name: 'Graphic Street Pullover Hoodie',
    category: 'hoodie',
    price: 145,
    originalPrice: 180,
    rating: 4.8,
    reviewCount: 63,
    badge: 'Artisanal',
    isNew: true,
    inStock: true,
    material: '100% Hand-Distressed French Terry Cotton',
    fit: 'Oversized silhouette with a lined hood and raw roll cuffs.',
    care: 'Dry clean or hand wash cold inside out.',
    images: [
      'https://images.unsplash.com/photo-1714339081580-d089ceadb267?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=900&auto=format&fit=crop&q=80'
    ],
    colors: [
      { name: 'Onyx Black', hex: '#111113' },
      { name: 'Smoked Taupe', hex: '#877B70' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Hand-abraded distress points along the hood neckline and cuffs create an authentic lived-in finish. Pre-washed for optimal drape and softness.',
    reviews: [
      { author: 'Jared F.', rating: 5, date: '2 weeks ago', title: 'Edge with high-end feel', comment: 'The distressing is subtle and tastefully executed.' }
    ]
  },
  {
    id: 'hoodie-5',
    name: 'Thermal Lined Pullover Hoodie',
    category: 'hoodie',
    price: 130,
    originalPrice: null,
    rating: 4.7,
    reviewCount: 48,
    badge: 'Winter Ready',
    isNew: false,
    inStock: true,
    material: '500GSM Cotton Face with Micro-Waffle Thermal Lining',
    fit: 'Substantial pullover fit with a lined hood and kangaroo pocket.',
    care: 'Machine wash cold, dry flat.',
    images: [
      'https://images.pexels.com/photos/6311387/pexels-photo-6311387.jpeg?auto=compress&cs=tinysrgb&w=900',
      'https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&w=900'
    ],
    colors: [
      { name: 'Olive Drab', hex: '#4B5320' },
      { name: 'Onyx Black', hex: '#111113' },
      { name: 'Heather Grey', hex: '#9E9E9E' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Dual-layer engineering for colder climates. A dense outer shell lined with insulating micro-waffle knit, finished with a lined hood and kangaroo pocket.',
    reviews: [
      { author: 'Lucas M.', rating: 5, date: '3 weeks ago', title: 'Insanely warm', comment: 'Replaces a light jacket during fall. Super comfortable.' }
    ]
  }
  ,{
    id: 'hoodie-6',
    name: 'Heavyweight Zip-Through Hoodie',
    category: 'hoodie',
    price: 132,
    originalPrice: 158,
    rating: 4.8,
    reviewCount: 27,
    badge: 'New Season',
    isNew: true,
    inStock: true,
    material: '480GSM Brushed Cotton-Blend Fleece',
    fit: 'Relaxed boxy fit with a two-way front zip.',
    care: 'Machine wash cold inside out, dry flat.',
    images: [
      'https://images.unsplash.com/photo-1559697242-07e90b48b9fe?w=900&auto=format&fit=crop&q=80',
      'https://images.pexels.com/photos/6311388/pexels-photo-6311388.jpeg?auto=compress&cs=tinysrgb&w=900'
    ],
    colors: [
      { name: 'Heather Grey', hex: '#9E9E9E' },
      { name: 'Onyx Black', hex: '#111113' },
      { name: 'Midnight Navy', hex: '#1B2432' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'A substantial zip-through layer with a softly brushed interior, deep hand pockets, and a structured hood. Built for easy layering through the colder months.',
    reviews: []
  }
];

const ADDITIONAL_PRODUCTS = [
  { id: 'top-7', category: 'top', name: 'Relaxed Heavy Cotton Tee', price: 74, material: '100% Cotton Jersey', fit: 'Relaxed fit with a clean crew neck.', image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=900&auto=format&fit=crop&q=80' },
  { id: 'top-8', category: 'top', name: 'Heavyweight Ribbed Crew Tee', price: 58, material: 'Heavyweight Ribbed Cotton Jersey', fit: 'Easy regular fit with a substantial hand feel.', image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=900&auto=format&fit=crop&q=80' },
  { id: 'top-9', category: 'top', name: 'Soft-Washed Oxford Shirt', price: 102, material: '100% Washed Cotton Oxford', fit: 'Roomy through the body with a straight hem.', image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=900&auto=format&fit=crop&q=80' },
  { id: 'top-10', category: 'top', name: 'Graphic Cotton Tee', price: 66, material: 'Textured Ring-Spun Cotton', fit: 'Relaxed fit with a classic crew neck.', image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=900&auto=format&fit=crop&q=80' },
  { id: 'top-11', category: 'top', name: 'Tailored Everyday Dress Shirt', price: 112, material: 'Compact Cotton Poplin', fit: 'Modern fit with a soft-spread collar.', image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=900&auto=format&fit=crop&q=80' },
  { id: 'top-12', category: 'top', name: 'Merino Knit Crew Sweater', price: 128, material: 'Merino Wool and Cotton Blend', fit: 'Comfortable regular fit for easy layering.', image: 'https://images.pexels.com/photos/3812433/pexels-photo-3812433.jpeg?auto=compress&cs=tinysrgb&w=900' },
  { id: 'bottom-7', category: 'bottom', name: 'Relaxed Dark-Wash Straight Jeans', price: 128, material: '14oz Cotton Denim', fit: 'Relaxed straight leg with a mid rise.', image: 'https://images.pexels.com/photos/4210866/pexels-photo-4210866.jpeg?auto=compress&cs=tinysrgb&w=900' },
  { id: 'bottom-8', category: 'bottom', name: 'Everyday Slim-Stretch Pant', price: 98, material: 'Stretch Cotton Twill', fit: 'Modern slim fit with a clean tapered leg.', image: 'https://images.unsplash.com/photo-1554704802-e6e0136c5b75?w=900&auto=format&fit=crop&q=80' },
  { id: 'bottom-9', category: 'bottom', name: 'Utility Canvas Fatigue Pant', price: 118, material: 'Garment-Washed Cotton Canvas', fit: 'Relaxed fit with a straight leg and utility pockets.', image: 'https://images.unsplash.com/photo-1592727995117-4cdc7ee6fcb4?w=900&auto=format&fit=crop&q=80' },
  { id: 'bottom-10', category: 'bottom', name: 'Modern Black Five-Pocket Jean', price: 122, material: 'Comfort-Stretch Cotton Denim', fit: 'Straight fit with a mid rise.', image: 'https://images.pexels.com/photos/6764007/pexels-photo-6764007.jpeg?auto=compress&cs=tinysrgb&w=900' },
  { id: 'bottom-11', category: 'bottom', name: 'Studio Pleated Wool Trouser', price: 148, material: 'Wool-Blend Suiting Fabric', fit: 'Draped relaxed fit with a pressed crease.', image: 'https://images.unsplash.com/photo-1625698457101-fec2f565a8f0?w=900&auto=format&fit=crop&q=80' },
  { id: 'bottom-12', category: 'bottom', name: 'Technical Tapered Track Pant', price: 92, material: 'Lightweight Stretch Performance Twill', fit: 'Tapered leg with an adjustable waistband.', image: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=900&auto=format&fit=crop&q=80' },
  { id: 'shoe-7', category: 'shoe', name: 'Retro Court Leather Sneaker', price: 145, material: 'Leather Upper with Rubber Cupsole', fit: 'True to size with a padded collar.', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900&auto=format&fit=crop&q=80' },
  { id: 'shoe-8', category: 'shoe', name: 'Cushioned Mesh Running Shoe', price: 158, material: 'Breathable Mesh and EVA Foam', fit: 'Performance fit with a secure heel.', image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=900&auto=format&fit=crop&q=80' },
  { id: 'shoe-9', category: 'shoe', name: 'Canvas Deck Low-Top', price: 88, material: 'Cotton Canvas with Vulcanized Sole', fit: 'Classic low profile; true to size.', image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=900&auto=format&fit=crop&q=80' },
  { id: 'shoe-10', category: 'shoe', name: 'Lightweight Knit Trainer', price: 138, material: 'Engineered Knit and Foam Midsole', fit: 'Flexible everyday fit with arch support.', image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=900&auto=format&fit=crop&q=80' },
  { id: 'shoe-11', category: 'shoe', name: 'Leather Lace-Up Work Boot', price: 205, material: 'Full-Grain Leather with Leather Lining', fit: 'Refined rounded toe; true to size.', image: 'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=900&auto=format&fit=crop&q=80' },
  { id: 'shoe-12', category: 'shoe', name: 'Modern Suede Trainer', price: 132, material: 'Suede and Mesh with Rubber Outsole', fit: 'True to size with a cushioned footbed.', image: 'https://images.pexels.com/photos/812871/pexels-photo-812871.jpeg?auto=compress&cs=tinysrgb&w=900' },
  { id: 'short-7', category: 'short', name: 'Relaxed Washed Denim Short', price: 76, material: 'Washed Cotton Denim', fit: 'Relaxed 7-inch inseam with classic five pockets.', image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=900&auto=format&fit=crop&q=80' },
  { id: 'short-8', category: 'short', name: 'Everyday Streetwear Short', price: 70, material: 'Soft Cotton Jersey', fit: 'Easy fit with a comfortable elastic waist.', image: 'https://images.unsplash.com/photo-1777447458426-43f11f1f7667?w=900&auto=format&fit=crop&q=80' },
  { id: 'short-9', category: 'short', name: 'Boxy Athletic Court Short', price: 72, material: 'Loopback French Terry', fit: 'Relaxed fit with a roomy leg opening.', image: 'https://images.pexels.com/photos/3253501/pexels-photo-3253501.jpeg?auto=compress&cs=tinysrgb&w=900' },
  { id: 'short-10', category: 'short', name: 'Classic Utility Chino Short', price: 78, material: 'Cotton Twill', fit: 'Straight fit with an easy 7-inch inseam.', image: 'https://images.unsplash.com/photo-1771711286856-765bdbca923f?w=900&auto=format&fit=crop&q=80' },
  { id: 'short-11', category: 'short', name: 'Minimal Training Short', price: 64, material: 'Lightweight Performance Nylon', fit: 'Athletic fit with a flexible waistband.', image: 'https://images.unsplash.com/photo-1656005947689-400af2fa63b1?w=900&auto=format&fit=crop&q=80' },
  { id: 'short-12', category: 'short', name: 'Printed Resort Swim Short', price: 82, material: 'Quick-Dry Recycled Nylon', fit: 'Relaxed swim fit with mesh lining.', image: 'https://images.unsplash.com/photo-1519156062512-8e563047dc6f?w=900&auto=format&fit=crop&q=80' },
  { id: 'hoodie-7', category: 'hoodie', name: 'Relaxed Heather Pullover Hoodie', price: 108, material: 'Brushed Cotton-Blend Fleece', fit: 'Relaxed fit with a soft lined hood.', image: 'https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&w=900' },
  { id: 'hoodie-8', category: 'hoodie', name: 'Classic White Pullover Hoodie', price: 122, material: 'Heavy Loopback Cotton', fit: 'Relaxed fit with a roomy kangaroo pocket.', image: 'https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?w=900&auto=format&fit=crop&q=80' },
  { id: 'hoodie-9', category: 'hoodie', name: 'Structured Grey Fleece Hoodie', price: 128, material: 'Dense Cotton-Blend Fleece', fit: 'Boxy fit with a double-layer hood.', image: 'https://images.pexels.com/photos/6311393/pexels-photo-6311393.jpeg?auto=compress&cs=tinysrgb&w=900' },
  { id: 'hoodie-10', category: 'hoodie', name: 'Mustard Raglan Pullover Hoodie', price: 116, material: 'Cotton-Poly Performance Fleece', fit: 'Modern fit with ribbed cuffs and hem.', image: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=900' },
  { id: 'hoodie-11', category: 'hoodie', name: 'Washed Lavender Pullover Hoodie', price: 124, material: 'Brushed Cotton Fleece', fit: 'Relaxed pullover fit with a lined hood.', image: 'https://images.pexels.com/photos/6311391/pexels-photo-6311391.jpeg?auto=compress&cs=tinysrgb&w=900' },
  { id: 'hoodie-12', category: 'hoodie', name: 'Sandstone Boxy Pullover Hoodie', price: 118, material: 'Midweight Cotton Fleece', fit: 'Regular boxy fit with a kangaroo pocket.', image: 'https://images.pexels.com/photos/6311388/pexels-photo-6311388.jpeg?auto=compress&cs=tinysrgb&w=900' },
];

PRODUCTS.push(...ADDITIONAL_PRODUCTS.map((product, index) => ({
  ...product,
  price: product.price,
  originalPrice: null,
  rating: 4.7 + (index % 3) * 0.1,
  reviewCount: 24 + index * 3,
  badge: 'New Season',
  isNew: true,
  inStock: true,
  care: 'Machine wash cold; follow the garment care label.',
  images: [product.image.startsWith('http') ? product.image : `https://images.unsplash.com/${product.image}?w=900&auto=format&fit=crop&q=80`],
  colors: COLOR_OPTIONS.slice(index % 4, (index % 4) + 3),
  sizes: SIZES[product.category],
  description: `${product.name}, made for a modern men's wardrobe with considered materials and an easy everyday fit.`,
  reviews: [],
})));

// Give each catalog card its own lead photo. Several starter products reused
// the same Unsplash image, which made the collection grid look repetitive.
const DISTINCT_PRODUCT_IMAGES = {
  'top-1': 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=900&auto=format&fit=crop&q=80',
  'top-2': 'https://images.pexels.com/photos/7671168/pexels-photo-7671168.jpeg?auto=compress&cs=tinysrgb&w=900',
  'top-3': 'https://images.pexels.com/photos/45982/pexels-photo-45982.jpeg?auto=compress&cs=tinysrgb&w=900',
  'top-4': 'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=900&auto=format&fit=crop&q=80',
  'top-5': 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=900&auto=format&fit=crop&q=80',
  'top-6': 'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=900&auto=format&fit=crop&q=80',
  'top-7': 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=900&auto=format&fit=crop&q=80',
  'top-8': 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=900&auto=format&fit=crop&q=80',
  'top-9': 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=900&auto=format&fit=crop&q=80',
  'top-10': 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=900&auto=format&fit=crop&q=80',
  'top-11': 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=900&auto=format&fit=crop&q=80',
  'top-12': 'https://images.pexels.com/photos/3812433/pexels-photo-3812433.jpeg?auto=compress&cs=tinysrgb&w=900',
  'bottom-1': 'https://images.pexels.com/photos/2897533/pexels-photo-2897533.jpeg?auto=compress&cs=tinysrgb&w=900',
  'bottom-2': 'https://images.unsplash.com/photo-1548883354-7622d03aca27?w=900&auto=format&fit=crop&q=80',
  'bottom-3': 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=900',
  'bottom-4': 'https://images.unsplash.com/photo-1479064555552-3ef4979f8908?w=900&auto=format&fit=crop&q=80',
  'bottom-5': 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=900&auto=format&fit=crop&q=80',
  'bottom-6': 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=900&auto=format&fit=crop&q=80',
  'bottom-7': 'https://images.pexels.com/photos/4210866/pexels-photo-4210866.jpeg?auto=compress&cs=tinysrgb&w=900',
  'bottom-8': 'https://images.unsplash.com/photo-1554704802-e6e0136c5b75?w=900&auto=format&fit=crop&q=80',
  'bottom-9': 'https://images.unsplash.com/photo-1592727995117-4cdc7ee6fcb4?w=900&auto=format&fit=crop&q=80',
  'bottom-10': 'https://images.pexels.com/photos/6764007/pexels-photo-6764007.jpeg?auto=compress&cs=tinysrgb&w=900',
  'bottom-11': 'https://images.unsplash.com/photo-1625698457101-fec2f565a8f0?w=900&auto=format&fit=crop&q=80',
  'bottom-12': 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=900&auto=format&fit=crop&q=80',
  'shoe-1': 'https://images.pexels.com/photos/267301/pexels-photo-267301.jpeg?auto=compress&cs=tinysrgb&w=900',
  'shoe-2': 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=900&auto=format&fit=crop&q=80',
  'shoe-3': 'https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=900',
  'shoe-4': 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=900&auto=format&fit=crop&q=80',
  'shoe-5': 'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=900&auto=format&fit=crop&q=80',
  'shoe-6': 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=900&auto=format&fit=crop&q=80',
  'shoe-7': 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900&auto=format&fit=crop&q=80',
  'shoe-8': 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=900&auto=format&fit=crop&q=80',
  'shoe-9': 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=900&auto=format&fit=crop&q=80',
  'shoe-10': 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=900&auto=format&fit=crop&q=80',
  'shoe-11': 'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=900&auto=format&fit=crop&q=80',
  'shoe-12': 'https://images.pexels.com/photos/812871/pexels-photo-812871.jpeg?auto=compress&cs=tinysrgb&w=900',
  'short-1': 'https://images.pexels.com/photos/1261422/pexels-photo-1261422.jpeg?auto=compress&cs=tinysrgb&w=900',
  'short-2': 'https://images.pexels.com/photos/2827392/pexels-photo-2827392.jpeg?auto=compress&cs=tinysrgb&w=900',
  'short-3': 'https://images.unsplash.com/photo-1771711286856-765bdbca923f?w=900&auto=format&fit=crop&q=80',
  'short-4': 'https://images.unsplash.com/photo-1656005947689-400af2fa63b1?w=900&auto=format&fit=crop&q=80',
  'short-5': 'https://images.unsplash.com/photo-1628022622693-8cf6083f2724?w=900&auto=format&fit=crop&q=80',
  'short-6': 'https://images.unsplash.com/photo-1553068551-db8745da0850?w=900&auto=format&fit=crop&q=80',
  'short-7': 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=900&auto=format&fit=crop&q=80',
  'short-8': 'https://images.unsplash.com/photo-1777447458426-43f11f1f7667?w=900&auto=format&fit=crop&q=80',
  'short-9': 'https://images.pexels.com/photos/3253501/pexels-photo-3253501.jpeg?auto=compress&cs=tinysrgb&w=900',
  'short-10': 'https://images.unsplash.com/photo-1771711286856-765bdbca923f?w=900&auto=format&fit=crop&q=80',
  'short-11': 'https://images.unsplash.com/photo-1656005947689-400af2fa63b1?w=900&auto=format&fit=crop&q=80',
  'short-12': 'https://images.unsplash.com/photo-1519156062512-8e563047dc6f?w=900&auto=format&fit=crop&q=80',
  'hoodie-1': 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=900&auto=format&fit=crop&q=80',
  'hoodie-2': 'https://images.unsplash.com/photo-1509942774463-acf339cf87d5?w=900&auto=format&fit=crop&q=80',
  'hoodie-3': 'https://images.pexels.com/photos/6311390/pexels-photo-6311390.jpeg?auto=compress&cs=tinysrgb&w=900',
  'hoodie-4': 'https://images.unsplash.com/photo-1714339081580-d089ceadb267?w=900&auto=format&fit=crop&q=80',
  'hoodie-5': 'https://images.pexels.com/photos/6311387/pexels-photo-6311387.jpeg?auto=compress&cs=tinysrgb&w=900',
  'hoodie-6': 'https://images.unsplash.com/photo-1559697242-07e90b48b9fe?w=900&auto=format&fit=crop&q=80',
  'hoodie-7': 'https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&w=900',
  'hoodie-8': 'https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?w=900&auto=format&fit=crop&q=80',
  'hoodie-9': 'https://images.pexels.com/photos/6311393/pexels-photo-6311393.jpeg?auto=compress&cs=tinysrgb&w=900',
  'hoodie-10': 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=900',
  'hoodie-11': 'https://images.pexels.com/photos/6311391/pexels-photo-6311391.jpeg?auto=compress&cs=tinysrgb&w=900',
  'hoodie-12': 'https://images.pexels.com/photos/6311388/pexels-photo-6311388.jpeg?auto=compress&cs=tinysrgb&w=900',
};

for (const product of PRODUCTS) {
  if (DISTINCT_PRODUCT_IMAGES[product.id]) {
    product.images[0] = DISTINCT_PRODUCT_IMAGES[product.id];
  }
}

export const PROMO_CODES = {
  ZP10: { code: 'ZP10', discount: 0.10, description: '10% off the order' },
  ZP20: { code: 'ZP20', discount: 0.20, description: '20% off the order' },
  FREESHIP: { code: 'FREESHIP', discount: 0, freeShipping: true, description: 'Complimentary shipping' },
};

export const LOOKBOOK_PRESETS = [
  {
    id: 'look-1',
    name: 'The Obsidian Street Uniform',
    description: 'Substantial proportions, deep blacks, and sharp luxury footwear.',
    topId: 'top-1',
    bottomId: 'bottom-2',
    shoeId: 'shoe-1',
    hoodieId: 'hoodie-1',
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=900&auto=format&fit=crop&q=80'
  },
  {
    id: 'look-2',
    name: 'Relaxed Sartorial',
    description: 'Raw silk fluidity with double-pleated tailored trousers and Italian leather low-tops.',
    topId: 'top-2',
    bottomId: 'bottom-1',
    shoeId: 'shoe-2',
    hoodieId: 'hoodie-3',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=900&auto=format&fit=crop&q=80'
  },
  {
    id: 'look-3',
    name: 'Summer Heavyweight Leisure',
    description: '500GSM French terry sweatshorts paired with boxy tee and molded bio-foam slides.',
    topId: 'top-1',
    bottomId: 'short-1',
    shoeId: 'shoe-5',
    hoodieId: 'hoodie-2',
    image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=900&auto=format&fit=crop&q=80'
  }
];
