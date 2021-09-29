import React from "react";

import { Route, Switch } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Customers from "../pages/Customers";
import Products from "../pages/Products";
import Inventory from "../pages/Inventory";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path="/products" component={Products} />
        <Route path="/customers" component={Customers} />
        <Route path="/inventory" component={Inventory} />
        <Route path="/" component={Dashboard} />
      </Switch>
    </>
  );
};

export default Routes;
