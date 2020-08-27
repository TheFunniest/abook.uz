import React from "react";
import "./App.scss";
import { Route, Switch } from "react-router-dom";

import CookieConsent from "react-cookie-consent";
// PAGES
import Index from "./pages/index";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Index />
        </Route>
      </Switch>
      <div className="container">
        <CookieConsent
          containerClasses="coockie"
          contentClasses="coockie-text"
          buttonClasses="coockie-btn"
          buttonText="Принять"
          cookieName="myAwesomeCookieName2"
          disableStyles
          expires={150}
          // sameSite="lax"
        >
          Мы используем файлы «cookies» и похожие технологии на нашем <br />{" "}
          веб-сайте, чтобы улучшить работу и повысить эффективность сайта
        </CookieConsent>
      </div>
    </div>
  );
}

export default App;
