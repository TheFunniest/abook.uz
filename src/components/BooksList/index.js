import React, { useState, useEffect } from "react";
import "./styles.scss";
import BookCard from "../BookCard";
import { getBooks } from "../../api/books";
import { Link } from "react-router-dom";

const BooksList = () => {
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
    <div className="booksList-wrapper">
      <ul className="books-list">
        {books.loading ? (
          <>
            <li className="books-list__item">
              <BookCard loading={true} />
            </li>
            <li className="books-list__item">
              <BookCard loading={true} />
            </li>
            <li className="books-list__item">
              <BookCard loading={true} />
            </li>
            <li className="books-list__item">
              <BookCard loading={true} />
            </li>
            <li className="books-list__item">
              <BookCard loading={true} />
            </li>
            <li className="books-list__item">
              <BookCard loading={true} />
            </li>
            <li className="books-list__item">
              <BookCard loading={true} />
            </li>
            <li className="books-list__item">
              <BookCard loading={true} />
            </li>
            <li className="books-list__item">
              <BookCard loading={true} />
            </li>
          </>
        ) : (
          books.data.map((book) => {
            return (
              <li className="books-list__item" key={book.id}>
                <Link to={`book/${book.id}`} style={{ textDecoration: "none" }}>
                  <BookCard data={book} loading={books.loading} />
                </Link>
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
};

export default BooksList;
