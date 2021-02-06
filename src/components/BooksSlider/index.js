import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import BookCard from "../BookCard";
import "./styles.scss";
import SwiperCore, { Autoplay } from "swiper";
import { Link } from "react-router-dom";

const BooksSlider = ({ count, title, spaceBetween, books }) => {
  
  SwiperCore.use([Autoplay]);
  return (
    <>
      {title ? (
        <h2
          style={{
            color: "#192D3D",
            marginBottom: 20,
          }}
        >
          {title}
        </h2>
      ) : null}
      <Swiper spaceBetween={spaceBetween} slidesPerView={count} autoplay>
        {books.loading ? (
          <>
            <SwiperSlide>
              <BookCard loading mb />
            </SwiperSlide>
            <SwiperSlide>
              <BookCard loading mb />
            </SwiperSlide>
            <SwiperSlide>
              <BookCard loading mb />
            </SwiperSlide>
            <SwiperSlide>
              <BookCard loading mb />
            </SwiperSlide>
            <SwiperSlide>
              <BookCard loading mb />
            </SwiperSlide>
            <SwiperSlide>
              <BookCard loading mb />
            </SwiperSlide>
          </>
        ) : (
          books.data.map((el) => {
            return (
              <SwiperSlide key={el.id}>
                <Link to={`/book/${el.id}`} style={{ textDecoration: "none" }}>
                  <BookCard data={el} loading={books.loading} mb />
                </Link>
              </SwiperSlide>
            );
          })
        )}
      </Swiper>
    </>
  );
};

export default BooksSlider;
