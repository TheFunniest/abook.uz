import React from "react";
import "./styles.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from 'react-responsive'


import echoacademy from "../../assets/images/echoacademy.png";
import test2020 from "../../assets/images/test2020.png";
import lukoil from "../../assets/images/lukoil.png";
import myBazar from "../../assets/images/mybazar_logo 1.png";
import noorMusic from "../../assets/images/NoorMusic.png";
import universal from "../../assets/images/universal.png";
import benoor from "../../assets/images/benoor.png";

const Partners = () => {
  const isDesktop = useMediaQuery({ minWidth: 786 })
  return (
    <div className="partners" id="partners">
      <div className="container">
        <h2 className="partners-title">Партнёры</h2>
        <div className="partners-carousel">
        <Swiper slidesPerView={isDesktop ? 5 : 2} spaceBetween={isDesktop ? null : 40} autoplay>
          <SwiperSlide>
            <div className="parterns-carousel__item">
              <img src={lukoil} alt="lukoil" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="parterns-carousel__item">
              <img src={universal} alt="universal" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="parterns-carousel__item">
              <img src={test2020} alt="test2020" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="parterns-carousel__item">
              <img src={echoacademy} alt="echoacademy" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="parterns-carousel__item">
              <img src={noorMusic} alt="noorMusic" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="parterns-carousel__item">
              <img src={benoor} alt="benoor" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="parterns-carousel__item">
              <img src={myBazar} alt="myBazar" />
            </div>
          </SwiperSlide>
        </Swiper>
 
        </div>
     </div>
    </div>
  );
};

export default Partners;
