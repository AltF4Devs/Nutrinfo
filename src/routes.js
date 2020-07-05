import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Home from "./pages/Home";
import DrawerPage from "./pages/DrawerPage";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={DrawerPage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
