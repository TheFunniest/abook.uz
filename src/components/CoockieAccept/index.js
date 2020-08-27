import React from "react";
import CookieConsent from "react-cookie-consent";
import "./styles.scss"

const CoockieAccept = () => {
  return (
    <div className="container">
      <CookieConsent
        containerClasses="coockie"
        contentClasses="coockie-text"
        buttonClasses="coockie-btn"
        buttonText="Принять"
        cookieName="myAwesomeCookieName2"
        disableStyles
        expires={150}
        sameSite="lax"
      >
        Мы используем файлы «cookies» и похожие технологии на нашем <br />{" "}
        веб-сайте, чтобы улучшить работу и повысить эффективность сайта
      </CookieConsent>
    </div>
  );
};

export default CoockieAccept;
