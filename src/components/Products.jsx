import { sampleProducts } from "../data/products.js";
import ProductCard from "./ProductCard.jsx";

function Products() {
  return (
    <section className="products-page">
      <div className="products-header">
        <h1 className="products-title">Developer Merch & Gear</h1>
        <p className="products-subtitle">
          Save your favorite developer items to your wishlist and view them
          anytime.
        </p>
      </div>

      <div className="products-grid">
        {sampleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default Products;
