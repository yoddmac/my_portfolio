import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import App from "../App";
import Page2 from "../Page2/Page2";

export function MultiPage() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={App}></Route>
        <Route path="/Project" exact component={Page2}></Route>
      </Switch>
    </Router>
  );
}

export default MultiPage;
