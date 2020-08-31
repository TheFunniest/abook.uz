import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
import BooksSlider from "../BooksSlider";

const Books = () => {
  return (
    <div className="books" id="new_books">
      <div className="books-section">
        <h2>Новинки и бестселлеры</h2>
        <p>Популярные и начинающие авторы, крупнейшие и нишевые издательства</p>
        <Link to="/new_books" className="books-section__btn">
          Посмотреть список
        </Link>
      </div>
      <div className="books-slider">
        <BooksSlider />
        <div className="books-bg">

        </div>
      </div>
    </div>
  );
};

export default Books;
