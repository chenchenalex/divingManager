import React from "react";
import { Route, Switch } from "react-router-dom";
import Panel from "./style";

import dashboard from "../dashboard";
import { diveList, diveForm } from "../diveList";
import account from "../account";
import pageNotFound from "../404";

const DisplayPanel = () => (
  <Panel>
    <Switch>
      <Route path="/" exact render={() => <h1>Welcome</h1>} />
      <Route path="/Account" component={account} />
      <Route path="/dashboard" component={dashboard} />
      <Route path="/list" component={diveList} exact />
      <Route path="/list/add" component={diveForm} />
      <Route path="/list/edit/:id" component={diveForm} />
      <Route component={pageNotFound} />
    </Switch>
  </Panel>
);

export default DisplayPanel;
