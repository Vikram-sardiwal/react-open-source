import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function ProductCard({ product }) {
  const imageSrc = product.thumbnail || product.images?.[0];
  const price = Number(product.price).toFixed(2);

  return (
    <Link to={`/products/${product.id}`} className="product-card">
      {imageSrc ? (
        <img
          src={imageSrc}
          alt={product.title}
          className="product-card-image"
        />
      ) : null}
      <h2 className="product-card-title">{product.title}</h2>
      <p className="product-price">${price}</p>
    </Link>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default ProductCard;
