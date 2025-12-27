// ===================================
// PRODUCTS DATA
// ===================================
const products = [
    {
        id: 1,
        name: "Unisex oversized hoodie",
        price: 75.00,
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=600&fit=crop",
        category: "clothing"
    },
    {
        id: 2,
        name: "Unisex oversized hoodie",
        price: 75.00,
        image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&h=600&fit=crop",
        category: "clothing"
    },
    {
        id: 3,
        name: "Unisex Hoodie",
        price: 75.00,
        image: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=600&h=600&fit=crop",
        category: "clothing"
    },
    {
        id: 4,
        name: "Kids eco hoodie",
        price: 55.00,
        image: "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?w=600&h=600&fit=crop",
        category: "clothing"
    },
    {
        id: 5,
        name: "Clear Case for Samsung®",
        price: 18.50,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&h=600&fit=crop",
        category: "phone-case"
    },
    {
        id: 6,
        name: "MagSafe® Tough Case for iPhone®",
        price: 32.00,
        image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=600&h=600&fit=crop",
        category: "phone-case"
    },
    {
        id: 7,
        name: "MagSafe® Tough Case for iPhone®",
        price: 34.50,
        image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=600&h=600&fit=crop",
        category: "phone-case"
    },
    {
        id: 8,
        name: "Snap Case for Samsung®",
        price: 34.50,
        image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=600&h=600&fit=crop",
        category: "phone-case"
    },
    {
        id: 9,
        name: "Laptop Sleeve",
        price: 39.99,
        image: "https://images.unsplash.com/photo-1586920207355-7044c8fc3e90?w=600&h=600&fit=crop",
        category: "accessories"
    },
    {
        id: 10,
        name: "Laptop Sleeve",
        price: 42.50,
        image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600&h=600&fit=crop",
        category: "accessories"
    },
    {
        id: 11,
        name: "Black Glossy Mug",
        price: 18.99,
        image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600&h=600&fit=crop",
        category: "accessories"
    },
    {
        id: 12,
        name: "Duffle Bag",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=600&fit=crop",
        category: "bag"
    },
    {
        id: 13,
        name: "Headband",
        price: 23.50,
        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&h=600&fit=crop",
        category: "accessories"
    },
    {
        id: 14,
        name: "Snapback Hat",
        price: 29.99,
        image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=600&h=600&fit=crop",
        category: "hat"
    },
    {
        id: 15,
        name: "Tote Bag",
        price: 32.99,
        image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&h=600&fit=crop",
        category: "bag"
    },
    {
        id: 16,
        name: "Travel Mug with Handle",
        price: 39.99,
        image: "https://images.unsplash.com/photo-1517256673644-36ad11246d21?w=600&h=600&fit=crop",
        category: "accessories"
    },
    {
        id: 17,
        name: "Minimalist Backpack",
        price: 81.00,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop",
        category: "bag"
    },
    {
        id: 18,
        name: "Utility Crossbody Bag",
        price: 45.00,
        image: "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?w=600&h=600&fit=crop",
        category: "bag"
    },
    {
        id: 19,
        name: "Visor",
        price: 26.99,
        image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&h=600&fit=crop",
        category: "hat"
    },
    {
        id: 20,
        name: "Cuffed Beanie",
        price: 35.00,
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=600&fit=crop",
        category: "hat"
    },
    {
        id: 21,
        name: "Crop Hoodie",
        price: 60.00,
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=600&fit=crop",
        category: "clothing"
    },
    {
        id: 22,
        name: "Oversized Heavyweight Hoodie",
        price: 75.00,
        image: "https://images.unsplash.com/photo-1542327897-d73f4005b533?w=600&h=600&fit=crop",
        category: "clothing"
    },
    {
        id: 23,
        name: "Unisex Eco Raglan Hoodie",
        price: 75.00,
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=600&fit=crop",
        category: "clothing"
    },
    {
        id: 24,
        name: "Unisex Sports Jersey",
        price: 28.50,
        image: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=600&h=600&fit=crop",
        category: "clothing"
    }
];

// ===================================
// CART MANAGEMENT
// ===================================
let cart = [];

// Load cart from localStorage on page load
function loadCart() {
    const savedCart = localStorage.getItem('zkzomiCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartUI();
    }
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('zkzomiCart', JSON.stringify(cart));
}

// Add item to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    saveCart();
    updateCartUI();
    showNotification('Product added to cart!');
}

// Remove item from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
}

// Update cart quantity
function updateCartQuantity(productId, quantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = Math.max(1, quantity);
        saveCart();
        updateCartUI();
    }
}

// Calculate cart total
function getCartTotal() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// Update cart UI
function updateCartUI() {
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    const cartCountElement = document.querySelector('.cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = cartCount;
        cartCountElement.style.display = cartCount > 0 ? 'flex' : 'none';
    }

    const cartTotal = getCartTotal();
    const cartTotalElement = document.getElementById('cart-total');
    if (cartTotalElement) {
        cartTotalElement.textContent = `$${cartTotal.toFixed(2)}`;
    }

    // Update cart items display
    const cartItemsContainer = document.getElementById('cart-items');
    const cartEmptyElement = document.getElementById('cart-empty');

    if (cart.length === 0) {
        if (cartEmptyElement) cartEmptyElement.style.display = 'block';
        if (cartItemsContainer) cartItemsContainer.innerHTML = '';
    } else {
        if (cartEmptyElement) cartEmptyElement.style.display = 'none';
        if (cartItemsContainer) {
            cartItemsContainer.innerHTML = cart.map(item => `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}">
                    <div class="cart-item-info">
                        <h4>${item.name}</h4>
                        <p>$${item.price.toFixed(2)}</p>
                        <div class="cart-item-quantity">
                            <button onclick="updateCartQuantity(${item.id}, ${item.quantity - 1})">-</button>
                            <span>${item.quantity}</span>
                            <button onclick="updateCartQuantity(${item.id}, ${item.quantity + 1})">+</button>
                        </div>
                    </div>
                    <button class="remove-item" onclick="removeFromCart(${item.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `).join('');
        }
    }
}

// ===================================
// PRODUCT RENDERING
// ===================================
function renderProducts() {
    const productsGrid = document.getElementById('products-grid');
    if (!productsGrid) return;

    const productCards = products.map(product => `
        <div class="product-card" data-product-id="${product.id}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">$${product.price.toFixed(2)}</p>
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                    Add to Cart
                </button>
            </div>
        </div>
    `).join('');

    productsGrid.innerHTML = productCards;
}

// ===================================
// NAVIGATION
// ===================================
function initNavigation() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.getElementById('main-nav');

    if (mobileMenuBtn && mainNav) {
        mobileMenuBtn.addEventListener('click', () => {
            mainNav.classList.toggle('active');
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mainNav.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                mainNav.classList.remove('active');
            }
        });
    }

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.slice(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });

                    // Update active state
                    navLinks.forEach(l => l.classList.remove('active'));
                    link.classList.add('active');

                    // Close mobile menu
                    if (mainNav) mainNav.classList.remove('active');
                }
            }
        });
    });

    // Active nav link on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section[id]');

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ===================================
// CART SIDEBAR
// ===================================
function initCartSidebar() {
    const cartBtn = document.querySelector('.cart-btn');
    const cartSidebar = document.getElementById('cart-sidebar');
    const closeCartBtn = document.querySelector('.close-cart');

    if (cartBtn && cartSidebar) {
        cartBtn.addEventListener('click', () => {
            cartSidebar.classList.add('active');
        });
    }

    if (closeCartBtn && cartSidebar) {
        closeCartBtn.addEventListener('click', () => {
            cartSidebar.classList.remove('active');
        });
    }

    // Close cart when clicking outside
    document.addEventListener('click', (e) => {
        if (cartSidebar &&
            !cartSidebar.contains(e.target) &&
            !cartBtn?.contains(e.target) &&
            cartSidebar.classList.contains('active')) {
            cartSidebar.classList.remove('active');
        }
    });
}

// ===================================
// SEARCH MODAL
// ===================================
function initSearchModal() {
    const searchBtn = document.querySelector('.search-btn');
    const searchModal = document.getElementById('search-modal');
    const closeSearchBtn = document.querySelector('.close-search');
    const searchInput = document.getElementById('search-input');

    if (searchBtn && searchModal) {
        searchBtn.addEventListener('click', () => {
            searchModal.classList.add('active');
            setTimeout(() => searchInput?.focus(), 300);
        });
    }

    if (closeSearchBtn && searchModal) {
        closeSearchBtn.addEventListener('click', () => {
            searchModal.classList.remove('active');
        });
    }

    // Close modal when clicking outside
    if (searchModal) {
        searchModal.addEventListener('click', (e) => {
            if (e.target === searchModal) {
                searchModal.classList.remove('active');
            }
        });
    }

    // Search functionality
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            const searchResults = document.getElementById('search-results');

            if (!searchResults) return;

            if (query.length < 2) {
                searchResults.innerHTML = '';
                return;
            }

            const filteredProducts = products.filter(product =>
                product.name.toLowerCase().includes(query) ||
                product.category.toLowerCase().includes(query)
            );

            if (filteredProducts.length === 0) {
                searchResults.innerHTML = '<p style="padding: 1rem; text-align: center;">No products found</p>';
                return;
            }

            searchResults.innerHTML = filteredProducts.map(product => `
                <div class="search-result-item" style="display: flex; gap: 1rem; padding: 1rem; border-bottom: 1px solid #e5e5e5; cursor: pointer;">
                    <img src="${product.image}" alt="${product.name}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 0.5rem;">
                    <div>
                        <h4 style="font-size: 0.95rem; margin-bottom: 0.25rem;">${product.name}</h4>
                        <p style="font-weight: 600; color: #6B4423;">$${product.price.toFixed(2)}</p>
                    </div>
                </div>
            `).join('');

            // Add click handlers to search results
            searchResults.querySelectorAll('.search-result-item').forEach((item, index) => {
                item.addEventListener('click', () => {
                    addToCart(filteredProducts[index].id);
                    searchModal.classList.remove('active');
                    searchInput.value = '';
                    searchResults.innerHTML = '';
                });
            });
        });
    }
}

// ===================================
// ACCOUNT MODAL
// ===================================
function initAccountModal() {
    const accountBtn = document.querySelector('.account-btn');
    const accountModal = document.getElementById('account-modal');
    const closeAccountBtn = document.querySelector('.close-account');

    if (accountBtn && accountModal) {
        accountBtn.addEventListener('click', () => {
            accountModal.classList.add('active');
        });
    }

    if (closeAccountBtn && accountModal) {
        closeAccountBtn.addEventListener('click', () => {
            accountModal.classList.remove('active');
        });
    }

    // Close modal when clicking outside
    if (accountModal) {
        accountModal.addEventListener('click', (e) => {
            if (e.target === accountModal) {
                accountModal.classList.remove('active');
            }
        });
    }
}

// ===================================
// NEWSLETTER FORM
// ===================================
function initNewsletterForm() {
    const newsletterForm = document.getElementById('newsletter-form');

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = newsletterForm.querySelector('input[type="email"]');

            if (emailInput && emailInput.value) {
                showNotification('Thank you for subscribing!');
                emailInput.value = '';
            }
        });
    }
}

// ===================================
// NOTIFICATIONS
// ===================================
function showNotification(message) {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(n => n.remove());

    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #6B4423;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
        z-index: 1000;
        animation: slideInRight 0.3s ease;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add notification animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }

    .cart-item {
        display: flex;
        gap: 1rem;
        padding: 1rem;
        border-bottom: 1px solid #e5e5e5;
        align-items: center;
    }

    .cart-item img {
        width: 80px;
        height: 80px;
        object-fit: cover;
        border-radius: 0.5rem;
    }

    .cart-item-info {
        flex: 1;
    }

    .cart-item-info h4 {
        font-size: 0.95rem;
        margin-bottom: 0.25rem;
    }

    .cart-item-info p {
        font-weight: 600;
        color: #6B4423;
        margin-bottom: 0.5rem;
    }

    .cart-item-quantity {
        display: flex;
        gap: 0.5rem;
        align-items: center;
    }

    .cart-item-quantity button {
        width: 24px;
        height: 24px;
        border: 1px solid #d4d4d4;
        border-radius: 0.25rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        background: white;
    }

    .cart-item-quantity button:hover {
        background: #f5f5f5;
    }

    .remove-item {
        color: #737373;
        padding: 0.5rem;
    }

    .remove-item:hover {
        color: #000;
    }
`;
document.head.appendChild(style);

// ===================================
// CATEGORY INTERACTIONS
// ===================================
function initCategoryCards() {
    const categoryCards = document.querySelectorAll('.category-card');

    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const categoryName = card.querySelector('h3').textContent.toLowerCase();
            showNotification(`Browsing ${categoryName} collection`);

            // Scroll to products section
            const productsSection = document.getElementById('shop-all');
            if (productsSection) {
                productsSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// ===================================
// PRODUCT CARD ANIMATIONS
// ===================================
function initProductCardAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.animationDelay = `${index * 0.05}s`;
        observer.observe(card);
    });
}

// ===================================
// REGION SELECTOR
// ===================================
function initRegionSelector() {
    const regionOptions = document.querySelectorAll('.region-option');
    const regionBtn = document.querySelector('.region-btn span');

    regionOptions.forEach(option => {
        option.addEventListener('click', () => {
            const currency = option.querySelector('.currency').textContent;
            if (regionBtn) {
                regionBtn.textContent = currency;
            }
            showNotification(`Currency changed to ${currency}`);
        });
    });
}

// ===================================
// INITIALIZATION
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    // Load cart from localStorage
    loadCart();

    // Render products
    renderProducts();

    // Initialize all components
    initNavigation();
    initCartSidebar();
    initSearchModal();
    initAccountModal();
    initNewsletterForm();
    initCategoryCards();
    initProductCardAnimations();
    initRegionSelector();

    // Add smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    console.log('ZPresents website initialized successfully!');
});

// ===================================
// PERFORMANCE OPTIMIZATION
// ===================================
// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    });

    // Observe images after a short delay to let initial page load
    setTimeout(() => {
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }, 1000);
}
