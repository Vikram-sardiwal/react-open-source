
import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <main className="empty-cart">
      <div className="empty-cart-icon" aria-hidden="true">
        🛒
      </div>

      <h1>Your cart is empty</h1>
      <p>
       Looks like you haven&apos;t added anything to your cart yet.
       Explore our collection and find something you&apos;ll love!
      </p>

      <Link to="/" className="continue-shopping-button">
        Continue Shopping
      </Link>
    </main>
  );
}

export default EmptyCart;
