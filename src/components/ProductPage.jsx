import React from 'react';
import { ArrowLeft, Heart, Plus, Star } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { CATEGORIES } from '../data/products';

export function ProductPage({ product, onBack }) {
  const store = useStore();
  const [size, setSize] = React.useState('');
  const [color, setColor] = React.useState('');
  const [photo, setPhoto] = React.useState(0);
  const [error, setError] = React.useState('');

  React.useEffect(() => {
    setSize('');
    setColor('');
    setPhoto(0);
    setError('');
  }, [product?.id]);

  if (!product) {
    return (
      <section className="page-section container">
        <div className="page-hero">
          <h1>Piece not found</h1>
          <p>That item is no longer in the collection.</p>
        </div>
        <button className="btn-secondary" type="button" onClick={onBack}>
          <ArrowLeft size={16} /> Back to the collection
        </button>
      </section>
    );
  }

  const images = product.images?.length ? product.images : [product.image];
  const categoryLabel = CATEGORIES.find((item) => item.id === product.category)?.label;
  const reviews = product.reviews || [];

  const addToBag = () => {
    if (!size || !color) {
      setError('Choose a size and color before adding to your bag.');
      return;
    }
    setError('');
    store.addToCart(product, size, color);
    store.setIsCartOpen(true);
  };

  return (
    <section className="page-section container pdp-section">
      <button className="pdp-back" type="button" onClick={onBack}>
        <ArrowLeft size={16} /> Collection
      </button>
      <div className="pdp-layout">
        <div className="pdp-gallery">
          <img className="pdp-hero-image" src={images[photo] || images[0]} alt={product.name} />
          {images.length > 1 && (
            <div className="pdp-thumbs">
              {images.map((src, index) => (
                <button
                  key={`${src}-${index}`}
                  type="button"
                  className={`pdp-thumb ${photo === index ? 'active' : ''}`}
                  onClick={() => setPhoto(index)}
                  aria-label={`View photo ${index + 1}`}
                >
                  <img src={src} alt="" />
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="pdp-info">
          <div className="pdp-kicker-row">
            <span className="section-kicker">{categoryLabel}</span>
            {product.badge && <span className="badge-tag gold">{product.badge}</span>}
          </div>
          <h1 className="pdp-title">{product.name}</h1>
          <p className="pdp-price-row">
            <span className="price-current">${product.price}</span>
            {product.originalPrice && <span className="price-original">${product.originalPrice}</span>}
            <span className="pdp-rating">
              <Star size={14} fill="currentColor" /> {product.rating}
              {product.reviewCount ? ` · ${product.reviewCount} reviews` : ''}
            </span>
          </p>
          <p className="pdp-description">{product.description}</p>
          <div className="pdp-option-block">
            <span className="pdp-option-label">Color{color ? ` · ${color}` : ''}</span>
            <div className="pdp-swatches">
              {(product.colors || []).map((option) => (
                <button
                  key={option.name}
                  type="button"
                  className={`pdp-swatch ${color === option.name ? 'active' : ''}`}
                  style={{ background: option.hex }}
                  aria-label={option.name}
                  title={option.name}
                  onClick={() => { setColor(option.name); setError(''); }}
                />
              ))}
            </div>
          </div>
          <div className="pdp-option-block">
            <span className="pdp-option-label">Size{size ? ` · ${size}` : ''}</span>
            <div className="pdp-sizes">
              {(product.sizes || []).map((value) => (
                <button
                  key={value}
                  type="button"
                  className={`pdp-size ${size === value ? 'active' : ''}`}
                  onClick={() => { setSize(value); setError(''); }}
                >
                  {value}
                </button>
              ))}
            </div>
          </div>
          {error && <p className="pdp-error" role="alert">{error}</p>}
          <div className="pdp-cta-row">
            <button className="btn-primary" type="button" onClick={addToBag}>
              Add to bag <Plus size={16} />
            </button>
            <button
              className={`icon-btn pdp-wish ${store.isWishlisted(product.id) ? 'active' : ''}`}
              type="button"
              aria-label={store.isWishlisted(product.id) ? 'Remove from wishlist' : 'Save to wishlist'}
              onClick={() => store.toggleWishlist(product)}
            >
              <Heart size={18} fill={store.isWishlisted(product.id) ? 'currentColor' : 'none'} />
            </button>
          </div>
          <dl className="pdp-facts">
            {product.material && <><dt>Material</dt><dd>{product.material}</dd></>}
            {product.fit && <><dt>Fit</dt><dd>{product.fit}</dd></>}
            {product.care && <><dt>Care</dt><dd>{product.care}</dd></>}
          </dl>
        </div>
      </div>
      {reviews.length > 0 && (
        <div className="pdp-reviews">
          <h2>Reviews</h2>
          <div className="pdp-review-grid">
            {reviews.map((review) => (
              <article className="pdp-review" key={`${review.author}-${review.title}`}>
                <h3>{review.title}</h3>
                <p className="pdp-review-meta">{review.author} · {review.rating}/5 · {review.date}</p>
                <p>{review.comment}</p>
              </article>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
