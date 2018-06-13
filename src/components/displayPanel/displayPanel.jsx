import React from "react";
import { Route, Switch } from "react-router-dom";
import Panel from "./style";

import dashboard from "src/scenes/dashboard";
import { viewDives, editDive } from "src/scenes/divingHistory";
import account from "src/scenes/account";
import pageNotFound from "src/scenes/404";
import * as ROUTES from "../../data/routes";

const { HOMEPAGE, ACCOUNT, DASHBOARD, DIVELIST, ADDDIVE, EDITDIVE } = ROUTES;

const DisplayPanel = () => (
  <Panel>
    <Switch>
      <Route path={HOMEPAGE} exact render={() => <h1>Welcome</h1>} />
      <Route path={ACCOUNT} component={account} />
      <Route path={DASHBOARD} component={dashboard} />
      <Route path={DIVELIST} component={viewDives} exact />
      <Route path={ADDDIVE} component={editDive} />
      <Route path={`${EDITDIVE}/:id`} component={editDive} />
      <Route component={pageNotFound} />
    </Switch>
  </Panel>
);

export default DisplayPanel;
