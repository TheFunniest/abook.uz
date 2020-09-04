import React from "react";
import "./styles.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { ReactComponent as ArrowDown } from "../../assets/images/arrow_down.svg";
import { ReactComponent as SearchIcon } from "../../assets/images/searchIcon.svg";
import "swiper/swiper.scss";
import { useMediaQuery } from "react-responsive";

const Filter = () => {
  const isDesktop = useMediaQuery({ minWidth: 786 });
  return (
    <>
      {isDesktop ? (
        <>
          <div className="container">
            <div className="filter">
              <ul className="filter-list">
                <li className="filter-list__item">
                  По дате
                  <ArrowDown
                    style={{
                      marginLeft: 5,
                    }}
                  />
                </li>
                <li className="filter-list__item">По названию</li>
                <li className="filter-list__item">Аудиокнига</li>
              </ul>
              <div className="search-input">
                <input type="text" placeholder="Автор или название книги" />
                <SearchIcon />
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="filter">
            <div
              style={{
                width: "100%",
              }}
            >
              <Swiper slidesPerView={1.4} spaceBetween={20}>
                <SwiperSlide>
                  <div className="slider-wrapper">
                    <div className="filter-list__item">
                      По дате
                      <ArrowDown
                        style={{
                          marginLeft: 5,
                        }}
                      />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slider-wrapper">
                    <div className="filter-list__item">По названию</div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="slider-wrapper">
                    <div className="filter-list__item">Аудиокнига</div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>

            <div className="container">
              <div className="search-input">
                <input type="text" placeholder="Автор или название книги" />
                <SearchIcon />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Filter;
