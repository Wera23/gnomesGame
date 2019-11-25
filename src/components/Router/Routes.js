import React from "react";
import { Route, Switch } from "react-router-dom";
import { MonstersListPage, TrollsPage, Homepage } from "../Router/Router";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/gnomes" component={MonstersListPage} />
        <Route exact path="/trolls" component={TrollsPage} />
      </Switch>
    </div>
  );
};

export default Routes;
