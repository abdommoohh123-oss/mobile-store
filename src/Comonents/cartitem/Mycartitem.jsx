import Rating from "../Ourshop/Rating/Rating";

const Mycartitem = ({ myitem, onRemove, onIncrease, onDecrease }) => {
  const unitPrice = Number(String(myitem.price).replace(/,/g, ""));

  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img src={myitem.img} alt={myitem.title} />
      </div>
      <div className="cart-item-details">
        <div className="cart-item-heading">
          <div>
            <h3>{myitem.title}</h3>
            {myitem.author && <p className="cart-item-brand">{myitem.author}</p>}
          </div>
          <button
            className="cart-action cart-delete"
            type="button"
            onClick={onRemove}
            aria-label={`Remove ${myitem.title} from cart`}
          >
            <i className="bi bi-trash" aria-hidden="true"></i>
          </button>
        </div>
        <div className="cart-item-rating">
          <Rating rating={myitem.rating} />
        </div>
        <p className="cart-item-price">{unitPrice.toLocaleString()} EGP</p>
        <div className="cart-item-bottom">
          <div className="cart-quantity">
            <button
              className="cart-action cart-qty"
              type="button"
              onClick={onDecrease}
              aria-label={`Decrease ${myitem.title} quantity`}
            >
              <i className="bi bi-dash" aria-hidden="true"></i>
            </button>
            <span aria-live="polite">{myitem.quantity}</span>
            <button
              className="cart-action cart-add"
              type="button"
              onClick={onIncrease}
              aria-label={`Increase ${myitem.title} quantity`}
            >
              <i className="bi bi-plus" aria-hidden="true"></i>
            </button>
          </div>
          <strong className="cart-item-subtotal">
            {(unitPrice * myitem.quantity).toLocaleString()} EGP
          </strong>
        </div>
      </div>
    </div>
  );
};

export default Mycartitem;
