import React from "react";
import "./styles.scss";

const OrderForm = () => {
  return (
    <form className="order-form">
      <div className="input-row">
        <input type="text" name="name" id="name" placeholder="Имя" />
        <input
          type="text"
          name="number"
          id="number"
          placeholder="+998 XX XXX XXXX"
        />
      </div>
      <div className="input-row">
        <input
          type="text"
          name="author"
          id="author"
          placeholder="Автор книги"
        />
        <input
          type="text"
          name="book-name"
          id="book-name"
          placeholder="Название книги"
        />
      </div>
      <button className="order-btn">
          Заказать
      </button>
    </form>
  );
};

export default OrderForm;
