import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading.jsx";

const PRODUCTS_URL = "https://fakestoreapi.com/products";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await fetch(PRODUCTS_URL);
        if (!response.ok) {
          throw new Error("Unable to load products");
        }
        setProducts(await response.json());
        setStatus("success");
      } catch {
        setStatus("error");
      }
    };

    loadProducts();
  }, []);

  return (
    <main className="products-page">
      <section className="products-hero">
        <p className="eyebrow">Curated essentials</p>
        <h1>Find something you&apos;ll love.</h1>
        <p>Browse our collection and select a product to see all the details.</p>
      </section>

      {status === "loading" && <Loading />}
      {status === "error" && (
        <p className="products-message" role="alert">
          We couldn&apos;t load the products. Please refresh and try again.
        </p>
      )}
      {status === "success" && (
        <section className="product-grid" aria-label="Products">
          {products.map((product) => (
            <Link
              className="product-card"
              to={`/products/${product.id}`}
              key={product.id}
            >
              <div className="product-card-image">
                <img src={product.image} alt="" />
              </div>
              <div className="product-card-content">
                <p className="product-category">{product.category}</p>
                <h2>{product.title}</h2>
                <p className="product-price">${product.price.toFixed(2)}</p>
                <span className="view-product">View details <span aria-hidden="true">→</span></span>
              </div>
            </Link>
          ))}
        </section>
      )}
    </main>
  );
}

export default ProductList;
