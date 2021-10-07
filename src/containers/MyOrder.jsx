import React, { useContext } from "react";
import AppContext from "@context/AppContext";
import OrderItem from "@components/OrderItem";
import felchita from "@icons/flechita.svg";
import "@styles/MyOrder.scss";

const MyOrder = () => {
  const { state } = useContext(AppContext);
  return (
    <aside className="MyOrder">
      <div className="title-container">
        <img src={felchita} alt="arrow" />
        <p className="title">My order</p>
      </div>
      <div className="my-order-content">
        {state.cart.map(item => (
          <OrderItem product={item} key={`orderItem-${item.id}`} />
        ))}
        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>$560.00</p>
        </div>
        <button className="primary-button">Checkout</button>
      </div>
    </aside>
  );
};

export default MyOrder;
