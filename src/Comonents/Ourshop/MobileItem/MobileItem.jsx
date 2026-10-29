import { FiHeart, FiShoppingCart } from "react-icons/fi";
import "./MobileItem.css";
import Sale from "../../Sale/Sale";
import Rating from "../../Ourshop/Rating/Rating";
import { Link } from "react-router-dom";
import AddToCartButton from "../../../components/AddToCartButton";
import { useContext } from "react";
import { WishlistContext } from "../../../context/WishlistContextValue";
import { FaHeart } from "react-icons/fa";

const MobileItem = ({ phone }) => {
  const { toggleWishlist, isInWishlist } =
  useContext(WishlistContext);

const isFavorite = isInWishlist(phone.id);
  return (
    <div className="col-md-6 col-lg-3 col-sm-6">
      <div className="card">
        <div className="card-body">
          <Link to={`/mobiles/${phone.id}`} className="card-title">
            {phone.title}
          </Link>
          <p className="card-text">{phone.description}</p>
        </div>
        <img src={phone.img} alt={phone.title} />
        <div className="card-footer">
          <span className="price">Price: {phone.price} EGP</span>
          <Rating rating={phone.rating} />
          <div className="footer-actions">
            <AddToCartButton product={phone} />
            <div className="card-icons">
              <span className="wishlist" onClick={() => toggleWishlist(phone)}>
                {isFavorite ? <FaHeart style={{ color: "red" }} /> : <FiHeart />}
              </span>
              <Link to="/cart" className="cart" aria-label="View cart">
                <FiShoppingCart />
              </Link>
            </div>
          </div>
        </div>
        <Sale sale={phone.sale} />
      </div>
    </div>
  );
};

export default MobileItem;