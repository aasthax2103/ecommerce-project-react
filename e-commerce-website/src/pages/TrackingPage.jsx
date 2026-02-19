import axios from "axios";
import dayjs from "dayjs";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { Header } from "../components/Header";
import "./TrackingPage.css";

export function TrackingPage({ cart }) {
  const { orderId, productId } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const fetchOrderData = async () => {
      const response = await axios.get(
        `/api/orders/${orderId}?expand=products`,
      );
      setOrder(response.data);
    };
    fetchOrderData();
  }, [orderId]);

  if (!order) {
    return null;
  }

  const orderProduct = order.products.find((orderProduct) => {
    return orderProduct.product.id === productId;
  });
  if (!orderProduct) return null;

  const totalDeliveryTimeMs =
    orderProduct.estimatedDeliveryTimeMs - order.orderTimeMs;
  const timePassedMs = dayjs().valueOf() - order.orderTimeMs;
  const deliveryPercentage = (timePassedMs / totalDeliveryTimeMs) * 100;

  const isPreparing = deliveryPercentage < 33;
  const isShipping = deliveryPercentage >= 33 && deliveryPercentage < 100;
  const isDelivered = deliveryPercentage >= 100;

  return (
    <>
      <title>Tracking</title>
      <link
        rel="icon"
        type="image/svg+xml"
        href="images/favicon/tracking-favicon.png"
      />
      <Header cart={cart} />

      <div className="tracking-page">
        <div className="order-tracking">
          <a className="back-to-orders-link link-primary" href="/orders">
            View all orders
          </a>

          <div className="delivery-date">
            {deliveryPercentage >= 100 ? "Delivered on " : "Arriving on "}
            {dayjs(orderProduct.estimatedDeliveryTimeMs).format("dddd, MMMM D")}
          </div>

          <div className="product-info">{orderProduct.product.name}</div>

          <div className="product-info">Quantity: {orderProduct.quantity}</div>

          <img className="product-image" src={orderProduct.product.image} />

          <div className="progress-labels-container">
            <div
              className={`progress-label ${isPreparing ? "current-status" : ""} `}
            >
              Preparing
            </div>
            <div
              className={`progress-label ${isShipping ? "current-status" : ""} `}
            >
              Shipped
            </div>
            <div
              className={`progress-label ${isDelivered ? "current-status" : ""} `}
            >
              Delivered
            </div>
          </div>

          <div className="progress-bar-container">
            <div
              className="progress-bar"
              style={{ width: `${deliveryPercentage}%` }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}
