import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Home from "./pages/Home";
import DrawerPage from "./pages/DrawerPage/index_new";

const Routes = () => (
  <BrowserRouter>
    <Switch>
        <Route exact path="/" render={Home}/>
        <Route path="/colorir" component={DrawerPage}/>
    </Switch>
  </BrowserRouter>
);

export default Routes;
