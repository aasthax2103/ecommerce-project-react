import { Fragment } from "react";
import { useState } from "react";
import CheckmarkIcon from "../../assets/images/icons/checkmark-white.png";
import BuyAgainIcon from "../../assets/images/icons/buy-again.png";
import dayjs from "dayjs";

export function OrderProduct({ orderProduct, order, addToCart }) {
  const [added, setAdded] = useState(false);

  const handleAddToCart = async () => {
    await addToCart(orderProduct.productId, orderProduct.quantity);
    setAdded(true);
  };

  return (
    <Fragment>
      <div className="product-image-container">
        <img src={orderProduct.product.image} />
      </div>

      <div className="product-details">
        <div className="product-name">{orderProduct.product.name}</div>
        <div className="product-delivery-date">
          Arriving on:{" "}
          {dayjs(orderProduct.estimatedDeliveryTimeMs).format("MMMM D")}
        </div>
        <div className="product-quantity">
          Quantity: {orderProduct.quantity}
        </div>
        <button
          className="buy-again-button button-primary"
          onClick={handleAddToCart}
        >
          {added ? (
            <>
              <img className="buy-again-icon" src={CheckmarkIcon} />
              <span className="buy-again-message">Added</span>
            </>
          ) : (
            <>
              <img className="buy-again-icon" src={BuyAgainIcon} />
              <span className="buy-again-message">Add to Cart</span>
            </>
          )}
        </button>
      </div>

      <div className="product-actions">
        <a href={`/tracking/${order.id}/${orderProduct.productId}`}>
          <button className="track-package-button button-secondary">
            Track package
          </button>
        </a>
      </div>
    </Fragment>
  );
}
