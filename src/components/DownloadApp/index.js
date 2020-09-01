import React from "react";
import "./styles.scss";
import { ReactComponent as Phones } from "../../assets/images/phones.svg";
import StoreLinks from "../StoreLinks";

const DonwloadApp = () => {
  return (
    <div className="download" id="download">
      <div className="download-image">
        <Phones />
      </div>
      <div className="download-links">
        <p className="download-links__text">
          Скачайте приложение для Вашего смартфона
        </p>
        <div className="download-links__stores">
         <StoreLinks/>
        </div>
      </div>
    </div>
  );
};

export default DonwloadApp;
