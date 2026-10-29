import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Mycartitem from "../cartitem/Mycartitem";
import "./Cart.css";

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    increaseQty,
    decreaseQty,
    cartTotal,
    cartCount,
  } = useContext(CartContext);

  if (cartItems.length === 0) {
    return (
      <section className="container cart-page">
        <h1>Your cart</h1>
        <div className="cart-empty">
          <i className="bi bi-cart3 cart-empty-icon" aria-hidden="true"></i>
          <h2>Your cart is empty</h2>
          <p>Browse our mobiles and add something you like.</p>
          <Link to="/mobiles" className="cart-continue-button">
            Browse mobiles
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="container cart-page">
      <div className="cart-heading">
        <div>
          <h1>Your cart</h1>
          <p>{cartCount} {cartCount === 1 ? "item" : "items"}</p>
        </div>
        <Link to="/mobiles" className="cart-continue-link">
          Continue shopping
        </Link>
      </div>

      <div className="row g-4">
        <div className="col-lg-8">
          <div className="cart-items">
            {cartItems.map((item) => (
              <Mycartitem
                key={item.id}
                myitem={item}
                onRemove={() => removeFromCart(item.id)}
                onIncrease={() => increaseQty(item.id)}
                onDecrease={() => decreaseQty(item.id)}
              />
            ))}
          </div>
        </div>

        <aside className="col-lg-4">
          <div className="cart-summary">
            <h2>Order summary</h2>
            <p>
              <span>Subtotal</span>
              <strong>{cartTotal.toLocaleString()} EGP</strong>
            </p>
            <p>
              <span>Shipping</span>
              <strong>Free</strong>
            </p>
            <p className="cart-total">
              <span>Total</span>
              <strong>{cartTotal.toLocaleString()} EGP</strong>
            </p>
            <button className="cart-checkout-button" type="button" disabled>
              Checkout coming soon
            </button>
            <p className="cart-checkout-note">
              Checkout will be available soon.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Cart;
