import { useCallback, useEffect, useState } from "react";
import Loading from "./Loading.jsx";
import ProductCard from "./ProductCard.jsx";

const PRODUCTS_API_URL = "https://dummyjson.com/products?limit=12";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const loadProducts = useCallback(async () => {
    setIsLoading(true);
    setHasError(false);

    try {
      const response = await fetch(PRODUCTS_API_URL);

      if (!response.ok) {
        throw new Error("Request failed");
      }

      const data = await response.json();
      setProducts(Array.isArray(data.products) ? data.products : []);
    } catch (error) {
      console.error("Failed to load products:", error);
      setProducts([]);
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  return (
    <section className="product-list">
      <h1>Products</h1>
      <p>Browse a few sample products and open one to see its full details.</p>

      {isLoading && <Loading />}

      {hasError && !isLoading && (
        <div className="api-error" role="alert">
          <h2>Unable to load the content</h2>
          <p>The request could not be completed. Please try again.</p>
          <button
            type="button"
            className="retry-button"
            onClick={loadProducts}
          >
            Try Again
          </button>
        </div>
      )}

      {!isLoading && !hasError && products.length === 0 && (
        <p>No products are available right now.</p>
      )}

      {!isLoading && !hasError && products.length > 0 && (
        <ul className="product-grid">
          {products.map((product) => (
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default ProductList;
