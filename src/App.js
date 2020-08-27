import React from "react";
import "./App.scss";
import { Route, Switch } from "react-router-dom";

import CookieConsent from "react-cookie-consent";
// PAGES
import Index from "./pages/index";

function App() {
  return (
    <div className="App">
      <CookieConsent
        location="bottom"
        buttonText="Sure man!!"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
        sameSite="lax"
      >
        This website uses cookies to enhance the user experience.{" "}
        <span style={{ fontSize: "10px" }}>This bit of text is smaller :O</span>
      </CookieConsent>
      <Switch>
        <Route path="/" exact>
          <Index />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
