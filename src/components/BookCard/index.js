import React from "react";
import "./styles.scss";
import Rating from "@material-ui/lab/Rating";
import Skeleton from "@material-ui/lab/Skeleton";
import { ReactComponent as Headphones } from "../../assets/images/headphones_dark.svg";

const BooksCard = ({
  loading,
  mb,
  data = {
    title: "",
    author: "",
    cover_url: "",
    is_abook: false,
  },
}) => {
  console.log(loading, "loading");
  const { title, author, cover_url, is_abook } = data;

  return loading ? (
    <div
      className="card"
      style={{
        marginBottom: mb ? 20 : null,
      }}
    >
      <Skeleton height={178} />
      <p className="card-name">
        <Skeleton width={117} height={17} />
      </p>
      <p className="card-author">
        <Skeleton height={17} />
      </p>
      <p className="card-genre">
        <Skeleton width={68} height={12} />
      </p>
      <div className="card-rating">
        <Skeleton width={68} height={12} />
      </div>
    </div>
  ) : (
    <div
      className="card"
      style={{
        marginBottom: mb ? 20 : null,
      }}
    >
      <div className="card-image">
        <img
          src={`http://185.74.5.132:3050${cover_url}`}
          alt="romeo and juliett"
        />
        {is_abook ? (
          <div className="card-audio">
            <Headphones />
            <p className="card-audio__dropdown">Аудиокнига</p>
          </div>
        ) : ("")}
      </div>
      <p className="card-name">{title}</p>
      <p className="card-author">{author.title}</p>
      <p className="card-genre">1912 Драма, Романтика</p>
      <div className="card-rating">
        <Rating name="read-only" value={data.vote?.rate || 3} readOnly size="small" />
      </div>
    </div>
  );
};

export default BooksCard;
