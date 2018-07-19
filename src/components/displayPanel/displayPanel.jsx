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
          <Redirect to={{ pathname: LOGIN, from: props.location }} />
        )
      }
    />
  );
}

const DisplayPanel = ({ isOnline, isAuthenticated }) => {
  if (isOnline) {
    return (
      <Panel>
        <Switch>
          <Route path={HOMEPAGE} exact render={() => <h1>Welcome</h1>} />
          <PrivateRoute
            path={ACCOUNT}
            authenticated={isAuthenticated}
            component={Account}
          />
          <Route path={DASHBOARD} component={dashboard} />
          <Route path={ADDDIVE} component={editDive} />
          <Route path={LOGIN} component={Login} />
          <Route path={`${EDITDIVE}/:id`} component={editDive} />
          <PrivateRoute
            path={DIVELIST}
            authenticated={isAuthenticated}
            component={viewDives}
            exact
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
