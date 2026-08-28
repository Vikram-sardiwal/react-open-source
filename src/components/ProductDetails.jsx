import { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "./Loading.jsx";

const PRODUCTS_API_URL = "https://dummyjson.com/products";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const loadProduct = useCallback(async () => {
    setIsLoading(true);
    setHasError(false);
    setNotFound(false);
    setProduct(null);
    setAddedToCart(false);

    if (!/^\d+$/.test(id)) {
      setNotFound(true);
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch(`${PRODUCTS_API_URL}/${id}`);

      if (response.status === 404) {
        setNotFound(true);
        return;
      }

      if (!response.ok) {
        throw new Error("Request failed");
      }

      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.error("Failed to load product details:", error);
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    loadProduct();
  }, [loadProduct]);

  function handleAddToCart() {
    setAddedToCart(true);
  }

  const imageSrc = product?.thumbnail || product?.images?.[0];
  const price =
    product?.price !== undefined ? Number(product.price).toFixed(2) : "";

  return (
    <section className="product-details-page">
      <Link to="/products" className="product-back-link">
        ← Back to products
      </Link>

      {isLoading && <Loading />}

      {notFound && !isLoading && (
        <div className="product-not-found">
          <h1>Product not found</h1>
          <p>This product does not exist or is no longer available.</p>
          <Link to="/products" className="home-button">
            ← Back to products
          </Link>
        </div>
      )}

      {hasError && !isLoading && (
        <div className="api-error" role="alert">
          <h2>Unable to load the content</h2>
          <p>The request could not be completed. Please try again.</p>
          <button
            type="button"
            className="retry-button"
            onClick={loadProduct}
          >
            Try Again
          </button>
        </div>
      )}

      {product && !isLoading && !hasError && !notFound && (
        <article className="product-details">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={product.title}
              className="product-details-image"
            />
          ) : null}

          <div className="product-details-info">
            <p className="product-category">{product.category}</p>
            <h1>{product.title}</h1>
            <p className="product-price">${price}</p>
            <p className="product-description">{product.description}</p>

            <button
              type="button"
              className="add-cart-button"
              onClick={handleAddToCart}
              disabled={addedToCart}
            >
              {addedToCart ? "Added to cart" : "Add to Cart"}
            </button>

            {addedToCart && (
              <p className="cart-confirmation" aria-live="polite">
                This product was added to your cart.
              </p>
            )}
          </div>
        </article>
      )}
    </section>
  );
}

export default ProductDetails;
