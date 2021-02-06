import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { getBook } from "../../api/books";
import { useHistory, useParams } from "react-router-dom";
import Desktop from "./laptop";
import Mobile from "./mobile";

const Book = () => {
  const { id } = useParams();
  const isDesktop = useMediaQuery({ minWidth: 786 });
  const history = useHistory();
  const [book, setBook] = useState({
    data: {},
    loaded: false,
    err: "",
  });

  console.log(id)

  useEffect(() => {
    if (id) {
      getBook(id)
        .then((res) => {
          setBook({
            data: res.data,
            loaded: true,
          });
        })
        .catch((err) => {
          setBook({
            data: {},
            loaded: true,
            err: err.toString(),
          });
        });
    } else {
      history.push("/");
    }
  }, [id, history]);

  // if (book.loaded && book.err) {
  //   return book.err;
  // }

  return isDesktop ? <Desktop book={book} /> : <Mobile book={book} />;
};

export default Book;
