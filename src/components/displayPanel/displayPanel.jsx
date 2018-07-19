import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Panel from "./style";
import Loader from "../loader";

import dashboard from "src/scenes/dashboard";
import { viewDives, editDive } from "src/scenes/divingHistory";
import Account from "src/scenes/account";
import Login from "src/scenes/login";
import pageNotFound from "src/scenes/404";
import * as ROUTES from "../../data/routes";

const {
  HOMEPAGE,
  DASHBOARD,
  DIVELIST,
  ADDDIVE,
  EDITDIVE,
  LOGIN,
  ACCOUNT
} = ROUTES;

function PrivateRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        authenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: LOGIN, state: { from: props.location } }} />
        )
      }
    />
  );
}

const DisplayPanel = ({ userInfo }) => {
  if (userInfo.isAuthenticated) {
    return (
      <Panel>
        <Switch>
          <Route path={HOMEPAGE} exact render={() => <h1>Welcome</h1>} />
          <Route path={ACCOUNT} component={Account} />
          <Route path={DASHBOARD} component={dashboard} />
          <Route path={DIVELIST} component={viewDives} exact />
          <Route path={ADDDIVE} component={editDive} />
          <Route path={LOGIN} component={Login} />
          <Route path={`${EDITDIVE}/:id`} component={editDive} />
          <PrivateRoute
            path="/test"
            authenticated={false}
            component={dashboard}
          />
          <Route component={pageNotFound} />
        </Switch>
      </Panel>
    );
  } else {
    return (
      <Panel>
        <Loader text="Checking..." />
      </Panel>
    );
  }
};

export default DisplayPanel;
