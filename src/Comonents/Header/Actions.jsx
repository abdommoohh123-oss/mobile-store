import { useContext } from "react";
import { FiHeart, FiShoppingCart, FiUser, FiList } from "react-icons/fi";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { WishlistContext } from "../../context/WishlistContextValue";

const Actions = (props) => {
  const { cartCount } = useContext(CartContext);
  const { wishlistItems } = useContext(WishlistContext);

  return (
    <div className="header-actions">
      <Link to="/wishlist" className="action-button" title="المفضلة" aria-label="المفضلة">
        <FiHeart />
        <span>المفضلة</span>
        <span className="cart-count">{wishlistItems.length}</span>
      </Link>

      <Link to="/cart" className="action-button" title="السلة" aria-label="السلة">
        <FiShoppingCart />
        <span className="cart-count">{cartCount}</span>
      </Link>

      <button type="button" className="action-button" title="الحساب" aria-label="الحساب">
        <FiUser />
        <span>الحساب</span>
      </button>

      <button type="button" className="mobile-icon" title="القائمة" aria-label="القائمة" onClick={props.openSidebar}>
        <FiList />
      </button>
    </div>
  );
};

export default Actions;