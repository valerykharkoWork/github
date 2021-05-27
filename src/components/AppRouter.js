import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { publicRoutes } from "../routes";
import { USER_ROUTE } from "../utils/const";

const AppRouter = () => {
  return (
    <Switch>
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact />
      ))}
      <Redirect to={USER_ROUTE} />
    </Switch>
  );
};

export default AppRouter;
