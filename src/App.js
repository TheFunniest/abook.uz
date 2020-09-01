import React from "react";
import "./App.scss";
import { Route, Switch } from "react-router-dom";
import CoockieAccept from "./components/CoockieAccept";

// PAGES
import Index from "./pages/index";
import Footer from "./components/Footer";
import NewBooks from "./pages/newBooks";
import Agreement from "./pages/Agreement";
import Book from "./pages/Book";

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
        <Route path="/agreement" exact>
          <Agreement />
        </Route>
        <Route path="/book" exact>
          <Book />
        </Route>
      </Switch>
      <CoockieAccept />
      <Footer />
    </div>
  );
}

export default App;
