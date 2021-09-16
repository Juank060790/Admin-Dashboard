import React from "react";

import { Route, Switch } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Customers from "../pages/Customers";

const Routes = () => {
  return (
    <Switch>
      <Route path="/customers" component={Customers} />
      <Route path="/" component={Dashboard} />
    </Switch>
  );
};

export default Routes;
