import React from "react";
import "./styles.scss";
import Rating from "@material-ui/lab/Rating";
import Skeleton from "@material-ui/lab/Skeleton";
import romeo from "../../assets/images/romeo&juliett.svg";
import { ReactComponent as Headphones } from "../../assets/images/headphones_dark.svg";

const BooksCard = ({ loading, mb, audio }) => {
  return (
    <div
      className="card"
      style={{
        marginBottom: mb ? 20 : null,
      }}
    >
      {loading ? (
        <Skeleton height={178} />
      ) : (
        <div className="card-image">
          <img src={romeo} alt="romeo and juliett" />
          <div className="card-audio">
            <Headphones />
          </div>
        </div>
      )}
      <p className="card-name">
        {loading ? <Skeleton width={117} height={17} /> : "Romeo & Juliett"}
      </p>
      <p className="card-author">
        {loading ? <Skeleton height={17} /> : "William Shakespare"}
      </p>
      <p className="card-genre">
        {loading ? (
          <Skeleton width={68} height={12} />
        ) : (
          "1912 Драма, Романтика"
        )}
      </p>
      <div className="card-rating">
        {loading ? (
          <Skeleton width={68} height={12} />
        ) : (
          <Rating name="read-only" value={2.5} readOnly size="small" />
        )}
      </div>
    </div>
  );
};

export default BooksCard;
