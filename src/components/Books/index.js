import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
import { useMediaQuery } from 'react-responsive'
import BooksSlider from "../BooksSlider";

const Books = () => {
  const isDesktop = useMediaQuery({ minWidth: 786 })
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
        <BooksSlider count={ isDesktop ? 4 : 2 } spaceBetween={isDesktop ? 25 : 10} />
        <div className="books-bg">

        </div>
      </div>
      <Link to="/new_books" className="books-section__btnMobile">
          Посмотреть список
        </Link>
    </div>
  );
};

export default Books;
