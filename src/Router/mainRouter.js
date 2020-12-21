import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Pages/Home";
import Detail from "../Pages/Detail";

const MainRouter = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/project/:name" component={Detail} />
    </Switch>
  );
};

export default MainRouter;
