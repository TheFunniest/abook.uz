import React, { useState, useEffect } from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
// import { useMediaQuery } from "react-responsive";


// images
import { ReactComponent as Logo } from "../../assets/images/logo-light.svg";
import { ReactComponent as Arrow } from "../../assets/images/dropdown_arrow.svg";


const Header = (props) => {
  const [scrolled, setScrolled] = useState(false);
  // const isDesktop = useMediaQuery({ minWidth: 768 });
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 70) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  let classes = ["header"];
  if (scrolled) {
    classes.push("scrolled");
  }

  return (
    <header
      className={classes.join(" ")}
      style={{
        backgroundColor: props.dark && "#282d30",
      }}
    >
      <div className="container">
        <div className="header-content">
          <Link to="/">
            <Logo />
          </Link>
          <div className="header-nav">
            <ul className="header-nav__list">
              <li className="header-nav__item">
                <a href="/#statistics" className="header-nav__link">
                  Статистика
                </a>
              </li>
              <li className="header-nav__item">
                <a href="/#new_books" className="header-nav__link">
                  Новые книги
                </a>
              </li>
              <li className="header-nav__item">
                <a href="/#download" className="header-nav__link">
                  Скачать
                </a>
              </li>
              <li className="header-nav__item">
                <a href="/#order" className="header-nav__link">
                  Стол заказов
                </a>
              </li>
              <li className="header-nav__item">
                <a href="/#partners" className="header-nav__link">
                  Партнёры
                </a>
              </li>
              <li className="header-nav__item">
                <Link to="/contact" className="header-nav__link">
                  Контакты
                </Link>
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
        </div>
        <div className="header-mobile">
          <Link to="/">
            <Logo />
          </Link>
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
        </div>
      </div>
    </header>
  );
};

export default Header;
