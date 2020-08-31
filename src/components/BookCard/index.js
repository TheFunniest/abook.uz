import React from "react";
import "./styles.scss";
import Rating from "@material-ui/lab/Rating";
import Skeleton from "@material-ui/lab/Skeleton";
import romeo from "../../assets/images/romeo&juliett.svg";

const BooksCard = ({ loading }) => {
  return (
    <div className="card">
      {loading ? (
        <Skeleton width={178} height={178} />
      ) : (
        <div className="card-image">
          <img src={romeo} alt="romeo and juliett" />
        </div>
      )}
      <p className="card-name">{loading ? <Skeleton width={117} height={17}/> : "Romeo & Juliett"}</p>
      <p className="card-author">
        {loading ? <Skeleton width={139} height={17}/> : "William Shakespare"}
      </p>
      <p className="card-genre">
        {loading ? <Skeleton width={68} height={12}/> : "1912 Драма, Романтика"}
      </p>
      <div className="card-rating">
        {loading ? (
          <Skeleton width={68} height={12}/>
        ) : (
          <Rating name="read-only" value={2.5} readOnly size="small" />
        )}
      </div>
    </div>
  );
};

export default BooksCard;
