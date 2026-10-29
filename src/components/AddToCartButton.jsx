
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./AddToCartButton.css";

const AddToCartButton = ({
  product,
  className = "btn btn-primary",
}) => {
  const { addToCart } = useContext(CartContext);

  return (
    <button
      type="button"
      className={`add-to-cart-button ${className}`}
      onClick={() => addToCart(product)}
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
