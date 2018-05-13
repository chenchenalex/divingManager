import React from "react";
import { Route } from "react-router-dom";
import Panel from "./style";

import dashboard from "../dashboard";
import { diveList, diveForm } from "../diveList";
import account from "../account";

const DisplayPanel = () => (
  <Panel>
    <Route exact path="/" render={() => <h1>Welcome</h1>} />
    <Route path="/Account" component={account} />
    <Route path="/dashboard" component={dashboard} />
    <Route path="/list" component={diveList} exact />
    <Route path="/list/add" component={diveForm} exact />
    <Route path="/list/edit/:id" component={diveForm} exact />
  </Panel>
);

export default DisplayPanel;
