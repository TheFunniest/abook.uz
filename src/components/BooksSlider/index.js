import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import BookCard from "../BookCard";
import "./styles.scss";
import SwiperCore, { Autoplay } from "swiper";

const BooksSlider = ({ count, title }) => {
  SwiperCore.use([Autoplay]);
  const slidesArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (

    <>
    {title ? <h2 style={{
      color: "#192D3D",
      marginBottom: 20,
    }}>
      {title}
      </h2> : null}
    <Swiper spaceBetween={25} slidesPerView={count} autoplay >
      {slidesArr.map((el) => {
        return (
          <SwiperSlide key={el}>
            <BookCard />
          </SwiperSlide>
        );
      })}
    </Swiper></>
  );
};

export default BooksSlider;
