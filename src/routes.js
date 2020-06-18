import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Home from './pages/Home'


const Routes = () => (
  <BrowserRouter>
    <Switch>
        <Route exact path="/" render={Home}/>
       
       
    </Switch>
  </BrowserRouter>
);

export default Routes;