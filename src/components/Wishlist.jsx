import { Link } from "react-router-dom";
import { useWishlist } from "../context/useWishlist.js";
import ProductCard from "./ProductCard.jsx";

function Wishlist() {
  const { wishlist, clearWishlist } = useWishlist();

  return (
    <section className="wishlist-page">
      <div className="wishlist-header">
        <div>
          <h1 className="wishlist-title">My Wishlist</h1>
          <p className="wishlist-subtitle">
            {wishlist.length === 0
              ? "No items saved yet"
              : `You have ${wishlist.length} saved ${
                  wishlist.length === 1 ? "item" : "items"
                }`}
          </p>
        </div>

        {wishlist.length > 0 && (
          <button
            type="button"
            className="clear-wishlist-btn"
            onClick={clearWishlist}
          >
            Clear Wishlist
          </button>
        )}
      </div>

      {wishlist.length === 0 ? (
        <div className="empty-wishlist">
          <div className="empty-wishlist-icon" aria-hidden="true">
            <svg
              viewBox="0 0 24 24"
              width="64"
              height="64"
              fill="none"
              stroke="#8e8dd3"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </div>
          <h2>Your Wishlist is Empty</h2>
          <p>
            You haven’t added any products to your wishlist yet. Explore our
            products and click the heart icon to save your favorites!
          </p>
          <Link to="/products" className="browse-products-btn">
            Browse Products
          </Link>
        </div>
      ) : (
        <div className="products-grid">
          {wishlist.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              showRemoveButton={true}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Wishlist;
