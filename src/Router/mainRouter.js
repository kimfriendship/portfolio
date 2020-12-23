import React from "react";
import { Route, Switch } from "react-router-dom";
import Detail from "../Pages/Detail";
import Main from "../Pages/Main";

const MainRouter = () => {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/project" component={Detail} />
    </Switch>
  );
};

export default MainRouter;
