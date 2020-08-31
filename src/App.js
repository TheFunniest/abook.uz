import React from "react";
import "./App.scss";
import { Route, Switch } from "react-router-dom";
import CoockieAccept from "./components/CoockieAccept";

// PAGES
import Index from "./pages/index";
import Footer from "./components/Footer";
import NewBooks from "./pages/newBooks";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Index />
        </Route>
        <Route path="/new_books" exact>
          <NewBooks />
        </Route>
      </Switch>
      <CoockieAccept />
      <Footer />
    </div>
  );
}

export default App;
