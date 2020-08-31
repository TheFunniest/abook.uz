import React from "react";
import "./styles.scss";
import OrderForm from "../OrderForm";

const Order = () => {
  return (
    <div className="order" id="order">
      <div className="container">
        <div className="order-wrapper">
          <div className="order-about">
            <h2 className="order-title">Стол заказов</h2>
            <p className="order-text">
              Давно выяснено, что при оценке дизайна и композиции читаемый текст
              мешает сосредоточиться. Lorem Ipsum используют потому, что тот
              обеспечивает более или менее стандартное заполнение шаблона
            </p>
          </div>
          <OrderForm />
        </div>
      </div>
    </div>
  );
};

export default Order;
