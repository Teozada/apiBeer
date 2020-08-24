import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./pages/Main";
import Beer from "./pages/Beer";
import Comparation from './pages/Comparation';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/comparation" exact component={Comparation} />
        <Route path="/:beer" exact component={Beer} />
      </Switch>
    </BrowserRouter>
  );
}
