import React from "react";

import "./reset.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./components/pages/Main";
import Pokemon from "./components/pages/Pokemon";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/pokemon/:id" component={Pokemon} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
