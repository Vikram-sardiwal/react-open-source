import PropTypes from "prop-types";
import { useWishlist } from "../context/useWishlist.js";

function ProductCard({
  product,
  onToggleWishlist,
  isWishlisted,
  showRemoveButton = false,
  className = "",
}) {
  const { isInWishlist, toggleWishlist, removeFromWishlist } = useWishlist();

  if (!product) return null;

  const { id, title, price, description, image, category } = product;
  const active = isWishlisted !== undefined ? isWishlisted : isInWishlist(id);

  const handleWishlistClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (onToggleWishlist) {
      onToggleWishlist(product);
    } else {
      toggleWishlist(product);
    }
  };

  const handleRemove = (e) => {
    e.preventDefault();
    e.stopPropagation();
    removeFromWishlist(id);
  };

  return (
    <div className={`product-card ${className}`.trim()}>
      <div className="product-image-container">
        {image && (
          <img
            src={image}
            alt={title || "Product image"}
            className="product-image"
            loading="lazy"
          />
        )}
        <button
          type="button"
          className={`wishlist-btn ${active ? "active" : ""}`}
          onClick={handleWishlistClick}
          aria-label={active ? "Remove from wishlist" : "Add to wishlist"}
          title={active ? "Remove from wishlist" : "Add to wishlist"}
        >
          <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill={active ? "#e53e3e" : "none"}
            stroke={active ? "#e53e3e" : "currentColor"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="heart-icon"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
      </div>

      <div className="product-info">
        {category && <span className="product-category">{category}</span>}
        <h3 className="product-title">{title}</h3>
        {description && <p className="product-description">{description}</p>}

        <div className="product-footer">
          {price && <span className="product-price">{price}</span>}

          {showRemoveButton ? (
            <button
              type="button"
              className="remove-wishlist-btn"
              onClick={handleRemove}
            >
              Remove
            </button>
          ) : (
            <button
              type="button"
              className={`product-action-btn ${active ? "in-wishlist" : ""}`}
              onClick={handleWishlistClick}
            >
              {active ? "Wishlisted ❤️" : "Save to Wishlist"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
  onToggleWishlist: PropTypes.func,
  isWishlisted: PropTypes.bool,
  showRemoveButton: PropTypes.bool,
  className: PropTypes.string,
};

export default ProductCard;
