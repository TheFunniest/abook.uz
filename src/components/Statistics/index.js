import React from "react";
import "./styles.scss";

import { ReactComponent as Books } from "../../assets/images/books.svg";
import { ReactComponent as Audio } from "../../assets/images/audio.svg";
import { ReactComponent as Genres } from "../../assets/images/genres.svg";
import { ReactComponent as Sells } from "../../assets/images/sells.svg";
import { ReactComponent as Users } from "../../assets/images/users.svg";

const Statistics = () => {
  return (
    <div className="statistics"  id="statistics">
      <ul className="statistics-list">
        <li className="statistics-list__item">
          <Books />
          <div className="statistics-list__textWrapper">
            <p className="statistics-list__textPrimary">990 000</p>
            <p className="statistics-list__textSecondary">общее кол-во книг</p>
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
    </div>
  );
};

export default Statistics;
