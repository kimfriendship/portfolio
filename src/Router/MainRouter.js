import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Pages/Home";
import Project from "../Pages/Project";

const MainRouter = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/project" component={Project} />
    </Switch>
  );
};

export default MainRouter;
