import React from "react";
import "./styles.scss";

import { ReactComponent as Logo } from "../../assets/images/logo-dark.svg";
import { ReactComponent as Support } from "../../assets/images/support.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <Logo />
          </div>
          <ul className="footer-list">
            <li className="footer-list__item">
              <a href="agreement">Условия соглашения</a>
            </li>
            <li className="footer-list__item">
              <a href="newbooks"> Новые книги</a>
            </li>
            <li className="footer-list__item">
              <a href="about_us">О нас</a>
            </li>
            <li className="footer-list__item">
              <p>Copyright© Abook - 2020. All rights reserved</p>
            </li>
          </ul>
          <div className="footer-support">
            <Support />
            <div className="footer-support-text">
              <p>Служба поддержки</p>
              <h2>71 200 00 00</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
