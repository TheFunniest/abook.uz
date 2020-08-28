import React from "react";
import "./styles.scss";
import { ReactComponent as Phones } from "../../assets/images/phones.svg";
import { ReactComponent as AppleIcon } from "../../assets/images/app-store.svg";
import { ReactComponent as GooglePlayIcon } from "../../assets/images/google-play.svg";
import { a } from "react-router-dom";

const DonwloadApp = () => {
  return (
    <div className="download">
      <div className="download-image">
        <Phones />
      </div>
      <div className="download-links">
        <p className="download-links__text">
          Скачайте приложение для Вашего смартфона
        </p>
        <div className="download-links__stores">
          <a href="https://apple.com">
            <div className="download-links__store">
              <AppleIcon />
              <p>
                Доступно на <br /> AppStore
              </p>
            </div>
          </a>
          <a href="https://google.com">
            <div className="download-links__store">
              <GooglePlayIcon />
              <p>
                Доступно на <br /> Google Play
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DonwloadApp;
