import React from "react";
import "./App.scss";
import { Route, Switch } from "react-router-dom";

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
    </div>
  );
}

export default App;
