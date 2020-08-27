import React from "react";
import "./styles.scss";
import Rating from '@material-ui/lab/Rating';

import romeo from "../../assets/images/romeo&juliett.svg";

const BooksCard = () => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={romeo} alt="romeo and juliett" />
      </div>
      <p className="card-name">Romeo & Juliett</p>
      <p className="card-author">William Shakespare</p>
      <p className="card-genre">1912 Драма, Романтика</p>
      <div className="card-rating">
        <Rating
           name="read-only" value={2.5} readOnly 
           size="small"
        />
      </div>
    </div>
  );
};

export default BooksCard;
