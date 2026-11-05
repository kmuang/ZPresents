import React, { createContext, useContext, useState, useEffect } from 'react';
import { PRODUCTS, PROMO_CODES, LOOKBOOK_PRESETS } from '../data/products';

const StoreContext = createContext(null);

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};

export const StoreProvider = ({ children }) => {
  // Theme State
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('zpresents_theme') || 'light';
  });

  // Catalog & Filtering State
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState(500);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [sortBy, setSortBy] = useState('featured');
  const [showExtendedFilters, setShowExtendedFilters] = useState(false);

  // Cart & Wishlist State (persisted)
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('zpresents_cart') || localStorage.getItem('atelier_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('zpresents_wishlist') || localStorage.getItem('atelier_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // UI Drawers & Modals
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  // Promo Code State
  const [appliedPromo, setAppliedPromo] = useState(null);

  // Notifications Toast State
  const [toasts, setToasts] = useState([]);

  // Outfit Builder State
  const [activeOutfitPreset, setActiveOutfitPreset] = useState(LOOKBOOK_PRESETS[0].id);
  const [outfitSelection, setOutfitSelection] = useState({
    topId: LOOKBOOK_PRESETS[0].topId,
    bottomId: LOOKBOOK_PRESETS[0].bottomId,
    shoeId: LOOKBOOK_PRESETS[0].shoeId,
    hoodieId: LOOKBOOK_PRESETS[0].hoodieId,
  });

  // Persist Cart and Wishlist
  useEffect(() => {
    localStorage.setItem('zpresents_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('zpresents_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  // Sync Theme
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('zpresents_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Toast Trigger
  const addToast = (message, type = 'success') => {
    const id = Date.now() + Math.random();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3500);
  };

  // Cart Operations
  const addToCart = (product, size, color, quantity = 1) => {
    const selectedSize = size || product.sizes[0];
    const selectedColor = color || (product.colors && product.colors[0]?.name) || 'Standard';
    const cartItemId = `${product.id}-${selectedSize}-${selectedColor}`;

    setCart(prev => {
      const existing = prev.find(item => item.cartItemId === cartItemId);
      if (existing) {
        return prev.map(item =>
          item.cartItemId === cartItemId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, {
        ...product,
        cartItemId,
        selectedSize,
        selectedColor,
        quantity,
      }];
    });

    addToast(`Added "${product.name}" (${selectedSize}) to bag`, 'success');
  };

  const removeFromCart = (cartItemId) => {
    setCart(prev => prev.filter(item => item.cartItemId !== cartItemId));
    addToast('Item removed from your bag', 'info');
  };

  const updateCartQty = (cartItemId, delta) => {
    setCart(prev =>
      prev.map(item => {
        if (item.cartItemId === cartItemId) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : item;
        }
        return item;
      })
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  // Wishlist Operations
  const toggleWishlist = (product) => {
    setWishlist(prev => {
      const exists = prev.some(item => item.id === product.id);
      if (exists) {
        addToast(`Removed "${product.name}" from wishlist`, 'info');
        return prev.filter(item => item.id !== product.id);
      } else {
        addToast(`Saved "${product.name}" to wishlist`, 'success');
        return [...prev, product];
      }
    });
  };

  const isWishlisted = (productId) => {
    return wishlist.some(item => item.id === productId);
  };

  // Promo Code Application
  const applyPromoCode = (codeStr) => {
    const trimmed = codeStr.trim().toUpperCase();
    if (PROMO_CODES[trimmed]) {
      setAppliedPromo(PROMO_CODES[trimmed]);
      addToast(`Promo code "${trimmed}" applied: ${PROMO_CODES[trimmed].description}`, 'success');
      return true;
    } else {
      addToast('That code is not valid. Try ZP10, ZP20, or FREESHIP.', 'error');
      return false;
    }
  };

  const removePromoCode = () => {
    setAppliedPromo(null);
    addToast('Promo code removed', 'info');
  };

  // Calculations
  const cartSubtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountAmount = appliedPromo ? cartSubtotal * appliedPromo.discount : 0;
  const isFreeShipping = cartSubtotal >= 150 || (appliedPromo && appliedPromo.freeShipping);
  const shippingFee = cartSubtotal === 0 ? 0 : (isFreeShipping ? 0 : 15);
  const cartTotal = Math.max(0, cartSubtotal - discountAmount + shippingFee);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Outfit Preset Handler
  const selectOutfitPreset = (preset) => {
    setActiveOutfitPreset(preset.id);
    setOutfitSelection({
      topId: preset.topId,
      bottomId: preset.bottomId,
      shoeId: preset.shoeId,
      hoodieId: preset.hoodieId,
    });
  };

  const addOutfitBundleToBag = () => {
    const items = [
      PRODUCTS.find(p => p.id === outfitSelection.topId),
      PRODUCTS.find(p => p.id === outfitSelection.bottomId),
      PRODUCTS.find(p => p.id === outfitSelection.shoeId),
      PRODUCTS.find(p => p.id === outfitSelection.hoodieId),
    ].filter(Boolean);

    items.forEach(product => {
      const defaultSize = product.sizes[0];
      const defaultColor = product.colors[0]?.name || 'Standard';
      const cartItemId = `${product.id}-${defaultSize}-${defaultColor}`;
      setCart(prev => {
        const existing = prev.find(item => item.cartItemId === cartItemId);
        if (existing) {
          return prev.map(item => item.cartItemId === cartItemId ? { ...item, quantity: item.quantity + 1 } : item);
        }
        return [...prev, {
          ...product,
          cartItemId,
          selectedSize: defaultSize,
          selectedColor: defaultColor,
          quantity: 1,
        }];
      });
    });

    // Auto-apply bundle promo if no promo is active
    if (!appliedPromo) {
      setAppliedPromo({ code: 'BUNDLE15', discount: 0.15, description: '15% Outfit Lookbook Bundle Discount' });
    }

    addToast('Full 4-Piece Curated Fit added to your bag with 15% discount!', 'success');
    setIsCartOpen(true);
  };

  // Filtered Products List
  const filteredProducts = PRODUCTS.filter(product => {
    // Category match
    if (selectedCategory !== 'all' && product.category !== selectedCategory) {
      return false;
    }

    // Search match
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName = product.name.toLowerCase().includes(q);
      const matchDesc = product.description.toLowerCase().includes(q);
      const matchCat = product.category.toLowerCase().includes(q);
      const matchMaterial = product.material.toLowerCase().includes(q);
      if (!matchName && !matchDesc && !matchCat && !matchMaterial) {
        return false;
      }
    }

    // Price range match
    if (product.price > priceRange) {
      return false;
    }

    // Size filter match
    if (selectedSizes.length > 0) {
      const hasSize = product.sizes.some(s => selectedSizes.includes(s));
      if (!hasSize) return false;
    }

    // Color filter match
    if (selectedColors.length > 0) {
      const hasColor = product.colors.some(c => selectedColors.includes(c.name));
      if (!hasColor) return false;
    }

    return true;
  }).sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    if (sortBy === 'newest') return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
    return 0; // featured default
  });

  const resetFilters = () => {
    setSelectedCategory('all');
    setSearchQuery('');
    setPriceRange(500);
    setSelectedSizes([]);
    setSelectedColors([]);
    setSortBy('featured');
  };

  return (
    <StoreContext.Provider
      value={{
        theme,
        toggleTheme,
        selectedCategory,
        setSelectedCategory,
        searchQuery,
        setSearchQuery,
        priceRange,
        setPriceRange,
        selectedSizes,
        setSelectedSizes,
        selectedColors,
        setSelectedColors,
        sortBy,
        setSortBy,
        showExtendedFilters,
        setShowExtendedFilters,
        cart,
        addToCart,
        removeFromCart,
        updateCartQty,
        clearCart,
        cartSubtotal,
        discountAmount,
        isFreeShipping,
        shippingFee,
        cartTotal,
        cartCount,
        wishlist,
        toggleWishlist,
        isWishlisted,
        isCartOpen,
        setIsCartOpen,
        isWishlistOpen,
        setIsWishlistOpen,
        isCheckoutOpen,
        setIsCheckoutOpen,
        quickViewProduct,
        setQuickViewProduct,
        appliedPromo,
        applyPromoCode,
        removePromoCode,
        toasts,
        addToast,
        activeOutfitPreset,
        outfitSelection,
        setOutfitSelection,
        selectOutfitPreset,
        addOutfitBundleToBag,
        filteredProducts,
        resetFilters,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
