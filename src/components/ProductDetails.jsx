import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "./Loading.jsx";

function ProductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [status, setStatus] = useState("loading");
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${productId}`,
        );
        if (!response.ok) {
          throw new Error("Product not found");
        }
        setProduct(await response.json());
        setStatus("success");
      } catch {
        setStatus("error");
      }
    };

    loadProduct();
  }, [productId]);

  if (status === "loading") {
    return <Loading />;
  }

  if (status === "error" || !product) {
    return (
      <main className="product-details product-details-error">
        <h1>Product not found</h1>
        <p>We couldn&apos;t find the product you requested.</p>
        <Link className="back-link" to="/">← Back to products</Link>
      </main>
    );
  }

  return (
    <main className="product-details">
      <Link className="back-link" to="/">← Back to products</Link>
      <section className="product-details-card">
        <div className="product-details-image">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="product-details-content">
          <p className="product-category">{product.category}</p>
          <h1>{product.title}</h1>
          <p className="product-details-price">${product.price.toFixed(2)}</p>
          <p className="product-description">{product.description}</p>
          <div className="product-rating">
            <span aria-label={`${product.rating.rate} out of 5 stars`}>★ {product.rating.rate}</span>
            <span>{product.rating.count} reviews</span>
          </div>
          <button
            className="add-to-cart-button"
            type="button"
            onClick={() => setAddedToCart(true)}
          >
            {addedToCart ? "Added to cart ✓" : "Add to Cart"}
          </button>
        </div>
      </section>
    </main>
  );
}

export default ProductDetails;
