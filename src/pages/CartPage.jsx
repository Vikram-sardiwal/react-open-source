import { useCart } from "../context/useCart";

function CartPage() {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    totalPrice,
  } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <h2 className="empty-cart-heading">Your cart is empty</h2>
        <p className="empty-cart-sub">
          Go to the Products page and add some items!
        </p>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1 className="cart-heading">Your Cart</h1>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img
              src={item.image}
              alt={item.title}
              className="cart-item-image"
            />
            <div className="cart-item-info">
              <h3 className="cart-item-title">{item.title}</h3>
              <p className="cart-item-price">
                ${item.price.toFixed(2)} each
              </p>
              <div className="cart-item-controls">
                <button
                  className="quantity-btn"
                  onClick={() => decreaseQuantity(item.id)}
                >
                  −
                </button>
                <span className="cart-item-quantity">{item.quantity}</span>
                <button
                  className="quantity-btn"
                  onClick={() => increaseQuantity(item.id)}
                >
                  +
                </button>
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
            <p className="cart-item-subtotal">
              ${(item.price * item.quantity).toFixed(2)}
            </p>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <h2>Total: ${totalPrice.toFixed(2)}</h2>
      </div>
    </div>
  );
}

export default CartPage;