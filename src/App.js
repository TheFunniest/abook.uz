import React from "react";
import "./App.scss";
import { Route, Switch } from "react-router-dom";
import CoockieAccept from "./components/CoockieAccept";

// PAGES
import Index from "./pages/index";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Index />
        </Route>
      </Switch>
      <CoockieAccept />
      <Footer />
    </div>
  );
}

export default App;
