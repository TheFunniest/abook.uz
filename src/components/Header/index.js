import React, { useState, useEffect } from "react";
import "./styles.scss";
// import { Link } from "react-router-dom";
// import { useMediaQuery } from "react-responsive";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom"

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
          <RouterLink to="/">
            <Logo />
          </RouterLink>
          <div className="header-nav">
            <ul className="header-nav__list">
              <li className="header-nav__item">
                <Link
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={400}
                  to="statistics"
                  className="header-nav__link"
                >
                  Статистика
                </Link>
              </li>
              <li className="header-nav__item">
                <Link
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={400}
                  to="new_books"
                  className="header-nav__link"
                >
                  Новые книги
                </Link>
              </li>
              <li className="header-nav__item">
                <Link
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={400}
                  to="download"
                  className="header-nav__link"
                >
                  Скачать
                </Link>
              </li>
              <li className="header-nav__item">
                <Link
                  className="header-nav__link"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={400}
                  to="order"
                >
                  Стол заказов
                </Link>
              </li>
              <li className="header-nav__item">
                <Link
                  to="partners"
                  className="header-nav__link"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={400}
                >
                  Партнёры
                </Link>
              </li>
              <li className="header-nav__item">
                <RouterLink to="/contact" className="header-nav__link">
                  Контакты
                </RouterLink>
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
          <RouterLink to="/">
            <Logo />
          </RouterLink>
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
