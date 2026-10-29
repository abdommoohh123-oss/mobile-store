import { useContext } from "react";
import { Link } from "react-router-dom";
import { FiHeart, FiTrash2 } from "react-icons/fi";
import AddToCartButton from "../../components/AddToCartButton";
import { WishlistContext } from "../../context/WishlistContextValue";
import Rating from "../Ourshop/Rating/Rating";
import "./Wishlist.css";

const Wishlist = () => {
  const { wishlistItems, toggleWishlist } = useContext(WishlistContext);

  return (
    <section className="container wishlist-page">
      <header className="wishlist-heading">
        <div>
          <h1>My Wishlist</h1>
          <p>
            {wishlistItems.length}{" "}
            {wishlistItems.length === 1 ? "saved item" : "saved items"}
          </p>
        </div>
        <Link to="/mobiles" className="wishlist-continue-link">
          Continue shopping
        </Link>
      </header>

      {wishlistItems.length === 0 ? (
        <div className="wishlist-empty">
          <FiHeart aria-hidden="true" />
          <h2>Your wishlist is empty</h2>
          <p>Save products you like and find them here later.</p>
          <Link to="/mobiles" className="wishlist-browse-button">
            Browse mobiles
          </Link>
        </div>
      ) : (
        <div className="wishlist-grid">
          {wishlistItems.map((product) => (
            <article className="wishlist-card" key={product.id}>
              <Link
                to={`/mobiles/${product.id}`}
                className="wishlist-card-image"
                aria-label={`View ${product.title}`}
              >
                <img src={product.img} alt={product.title} />
              </Link>
              <div className="wishlist-card-content">
                <div className="wishlist-card-title-row">
                  <div>
                    <Link
                      to={`/mobiles/${product.id}`}
                      className="wishlist-product-title"
                    >
                      {product.title}
                    </Link>
                    {product.author && (
                      <p className="wishlist-product-brand">{product.author}</p>
                    )}
                  </div>
                  <button
                    type="button"
                    className="wishlist-remove-button"
                    onClick={() => toggleWishlist(product)}
                    aria-label={`Remove ${product.title} from wishlist`}
                    title="Remove from wishlist"
                  >
                    <FiTrash2 aria-hidden="true" />
                  </button>
                </div>
                <Rating rating={product.rating} />
                <p className="wishlist-product-price">
                  {Number(String(product.price).replace(/,/g, "")).toLocaleString()} EGP
                </p>
                <AddToCartButton product={product} />
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
};

export default Wishlist;
