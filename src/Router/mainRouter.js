import React from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Project from "../Pages/Project";
import Detail from "../Pages/Detail";

const MainRouter = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="home" component={Home} />
      <Route path="about" component={About} />
      <Route path="project/:name" component={Detail} />
    </Switch>
  );
};

export default MainRouter;
