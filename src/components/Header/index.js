import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
// images
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { ReactComponent as Arrow } from "../../assets/images/dropdown_arrow.svg";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <Logo />
      </Link>
      <div className="header-nav">
        <ul className="header-nav__list">
          <li className="header-nav__item">
            <a href="#statistics" className="header-nav__link">
              Статистика
            </a>
          </li>
          <li className="header-nav__item">
            <a href="#new_books" className="header-nav__link">
              Новые книги
            </a>
          </li>
          <li className="header-nav__item">
            <a href="#download" className="header-nav__link">
              Скачать
            </a>
          </li>
          <li className="header-nav__item">
            <a href="#order" className="header-nav__link">
              Стол заказов
            </a>
          </li>
          <li className="header-nav__item">
            <a href="#partners" className="header-nav__link">
              Партнёры
            </a>
          </li>
          <li className="header-nav__item">
            <a href="#contact" className="header-nav__link">
              Контакты
            </a>
          </li>
          <li className="header-nav__item">
            <span className="header-nav__link header-lang">
              Язык{" "}
              <Arrow
                style={{
                  marginBottom: 1,
                  marginLeft: 2,
                }}
              />
              <ul className="header-lang__dropdown">
                <li>O'zbekcha</li>
                <li>Русский</li>
              </ul>
            </span>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
