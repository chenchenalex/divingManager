import React from "react";
import { Route, Switch } from "react-router-dom";
import Panel from "./style";

import dashboard from "src/scenes/dashboard";
import { viewDives, editDive } from "src/scenes/divingHistory";
import account from "src/scenes/account";
import pageNotFound from "src/scenes/404";

const DisplayPanel = () => (
  <Panel>
    <Switch>
      <Route path="/" exact render={() => <h1>Welcome</h1>} />
      <Route path="/Account" component={account} />
      <Route path="/dashboard" component={dashboard} />
      <Route path="/list" component={viewDives} exact />
      <Route path="/list/add" component={editDive} />
      <Route path="/list/edit/:id" component={editDive} />
      <Route component={pageNotFound} />
    </Switch>
  </Panel>
);

export default DisplayPanel;
