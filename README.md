# ZPresents Clone - Premium E-commerce Website

A pixel-perfect clone of the zkzomi.com e-commerce website, featuring a modern, premium design with full interactivity and responsive layout.

## 🌟 Features

### **Design & Aesthetics**
- **Premium Visual Design**: Modern, clean interface with vibrant gradients and smooth animations
- **Responsive Layout**: Fully responsive design that works flawlessly on desktop, tablet, and mobile
- **Smooth Animations**: Fade-in effects, hover states, and micro-interactions throughout
- **Modern Typography**: Inter font family for a clean, professional look
- **Color Palette**: Sophisticated black, white, and brown color scheme matching the original

### **Core Functionality**
- **Product Catalog**: 24 products across multiple categories (Hoodies, Phone Cases, Bags, Hats, Accessories)
- **Shopping Cart**: 
  - Add/remove items
  - Update quantities
  - Persistent cart using localStorage
  - Real-time cart total calculation
  - Sliding cart sidebar
- **Search**: Real-time product search with instant results
- **Categories**: Quick category navigation with circular image cards
- **Newsletter Signup**: Functional newsletter subscription form
- **Region Selector**: Currency/region selection dropdown

### **Interactive Elements**
- **Navigation**: 
  - Sticky header with smooth scroll
  - Active link highlighting
  - Mobile responsive menu
- **Modals**: Search and account modals with smooth transitions
- **Product Cards**: Hover effects with image zoom
- **Category Cards**: Interactive circular category buttons
- **Social Links**: Connected to Facebook, Instagram, YouTube, TikTok, Twitter, and Threads

### **Technical Features**
- **Semantic HTML5**: Proper structure and accessibility
- **CSS Custom Properties**: Maintainable design system with CSS variables
- **Vanilla JavaScript**: No dependencies, pure JavaScript for all interactions
- **LocalStorage**: Persistent shopping cart across sessions
- **Intersection Observer**: Lazy loading and scroll animations
- **SEO Optimized**: Proper meta tags, semantic markup, and heading hierarchy

## 📁 Project Structure

```
zkzomi-clone/
├── index.html          # Main HTML structure
├── style.css           # Complete styling and responsive design
├── script.js           # All JavaScript functionality
└── README.md           # This file
```

## 🚀 Getting Started

### **Quick Start**
1. Simply open `index.html` in your web browser
2. No build process or dependencies required!

### **For Development**
```bash
# Clone or navigate to the project directory
cd zkzomi-clone

# Open in your preferred browser
open index.html        # macOS
start index.html       # Windows
xdg-open index.html    # Linux
```

### **Using a Local Server** (Optional)
For the best experience, you can use a local server:

```bash
# Using Python 3
python3 -m http.server 8000

# Using Node.js
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## 💻 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: 320px - 767px

## 🎨 Color Palette

```css
--color-black: #000000
--color-white: #FFFFFF
--color-brown: #6B4423
--color-brown-dark: #4A2F1A
--color-grey-100: #F5F5F5
--color-grey-600: #525252
```

## 🛠️ Customization

### **Adding New Products**
Edit the `products` array in `script.js`:

```javascript
{
    id: 25,
    name: "Your Product Name",
    price: 49.99,
    image: "your-image-url.jpg",
    category: "clothing"
}
```

### **Changing Colors**
Modify CSS custom properties in `style.css`:

```css
:root {
    --color-brown: #your-color;
    /* ... other variables */
}
```

### **Updating Content**
- Edit text directly in `index.html`
- Modify navigation links
- Update footer information
- Change social media links

## ✨ Key Components

### **Header**
- Sticky navigation
- Logo and menu
- Search, account, and cart icons
- Region/currency selector

### **Hero Section**
- Full-width hero with gradient overlay
- Call-to-action button
- Background image with overlay effect

### **Featured Products**
- Alternating image/text layout
- Large product showcases
- Shop now buttons

### **Category Carousel**
- Circular category images
- Interactive hover effects
- Quick navigation to product types

### **Product Grid**
- 4-column responsive grid
- Product images with details
- Add to cart functionality
- Hover animations

### **Footer**
- Multi-column layout
- Quick links and information
- Newsletter signup
- Payment method icons
- Social media links

## 🎯 Performance

- **Optimized Images**: Using Unsplash CDN for fast loading
- **Lazy Loading**: Intersection Observer for images
- **CSS Animations**: Hardware-accelerated transforms
- **No Dependencies**: Pure vanilla JavaScript for faster load times
- **LocalStorage**: Efficient cart persistence

## 📄 License

This is a clone project created for educational purposes.

## 🙏 Credits

- Original Design: [zkzomi.com](https://zkzomi.com/)
- Images: [Unsplash](https://unsplash.com/)
- Icons: [Font Awesome](https://fontawesome.com/)
- Fonts: [Google Fonts (Inter)](https://fonts.google.com/specimen/Inter)

## 📧 Contact

For questions or suggestions, feel free to reach out!

---

**Built with ❤️ using HTML, CSS, and JavaScript**
