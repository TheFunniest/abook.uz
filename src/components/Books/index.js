import React, { useEffect, useState } from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import BooksSlider from "../BooksSlider";
import { getBooks } from "../../api/books"

const Books = () => {
  const isDesktop = useMediaQuery({ minWidth: 1025 });
  const isTablet = useMediaQuery({ minWidth: 425, maxWidth: 1024 });

  const [books, setBooks] = useState({
    data: [],
    loading: true,
    err: "",
  });

  useEffect(() => {
    getBooks()
      .then((res) => {
        setBooks({
          data: res.data.results,
          loading: false,
          err: "",
        });
      })
      .catch((err) => {
        console.log(err);
        setBooks({
          data: [],
          loading: false,
          err: err.toString(),
        });
      });
  }, []);

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
        <BooksSlider
          count={isDesktop ? 4 : isTablet ? 3 : 2}
          spaceBetween={isDesktop ? 25 : 10}
          books={books}
        />
        <div className="books-bg"></div>
      </div>
      <Link to="/new_books" className="books-section__btnMobile">
        Посмотреть список
      </Link>
    </div>
  );
};

export default Books;
