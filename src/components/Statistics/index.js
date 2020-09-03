import React from "react";
import { useMediaQuery } from "react-responsive";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import "swiper/components/pagination/pagination.scss";
import "./styles.scss";

// IMAGES
import { ReactComponent as Books } from "../../assets/images/books.svg";
import { ReactComponent as Audio } from "../../assets/images/audio.svg";
import { ReactComponent as Genres } from "../../assets/images/genres.svg";
import { ReactComponent as Sells } from "../../assets/images/sells.svg";
import { ReactComponent as Users } from "../../assets/images/users.svg";

const Statistics = () => {
  const isDesktop = useMediaQuery({ minWidth: 786 })
  const isTablet = useMediaQuery({ minWidth: 426, maxWidth: 786 });
  SwiperCore.use([Pagination, Autoplay]);
  return (
    <div className="statistics" id="statistics">
      {isDesktop ? (
        <ul className="statistics-list">
          <li className="statistics-list__item">
            <Books />
            <div className="statistics-list__textWrapper">
              <p className="statistics-list__textPrimary">990 000</p>
              <p className="statistics-list__textSecondary">
                общее кол-во книг
              </p>
            </div>
          </li>
          <li className="statistics-list__item">
            <Audio />
            <div className="statistics-list__textWrapper">
              <p className="statistics-list__textPrimary">560 000</p>
              <p className="statistics-list__textSecondary">книг с аудио</p>
            </div>
          </li>
          <li className="statistics-list__item">
            <Users />
            <div className="statistics-list__textWrapper">
              <p className="statistics-list__textPrimary">10 000</p>
              <p className="statistics-list__textSecondary">
                новых пользователей <br /> за месяц
              </p>
            </div>
          </li>
          <li className="statistics-list__item">
            <Sells />
            <div className="statistics-list__textWrapper">
              <p className="statistics-list__textPrimary">560 000</p>
              <p className="statistics-list__textSecondary">
                книг продали <br /> за месяц
              </p>
            </div>
          </li>
          <li className="statistics-list__item">
            <Genres />
            <div className="statistics-list__textWrapper">
              <p className="statistics-list__textPrimary">56</p>
              <p className="statistics-list__textSecondary">разных жанров</p>
            </div>
          </li>
        </ul>
      ) : (
        <div className="statistics-list">
          <Swiper slidesPerView={isTablet ? 3 : 1} pagination={{ clickable: true }} autoplay>
            <SwiperSlide>
              <div className="statistics-list__item">
                <Books />
                <div className="statistics-list__textWrapper">
                  <p className="statistics-list__textPrimary">990 000</p>
                  <p className="statistics-list__textSecondary">
                    общее кол-во книг
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="statistics-list__item">
                <Audio />
                <div className="statistics-list__textWrapper">
                  <p className="statistics-list__textPrimary">560 000</p>
                  <p className="statistics-list__textSecondary">книг с аудио</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="statistics-list__item">
                <Users />
                <div className="statistics-list__textWrapper">
                  <p className="statistics-list__textPrimary">10 000</p>
                  <p className="statistics-list__textSecondary">
                    новых пользователей <br /> за месяц
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="statistics-list__item">
                <Sells />
                <div className="statistics-list__textWrapper">
                  <p className="statistics-list__textPrimary">560 000</p>
                  <p className="statistics-list__textSecondary">
                    книг продали <br /> за месяц
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="statistics-list__item">
                <Genres />
                <div className="statistics-list__textWrapper">
                  <p className="statistics-list__textPrimary">56</p>
                  <p className="statistics-list__textSecondary">
                    разных жанров
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      )}
    </div>
  );
};

export default Statistics;
