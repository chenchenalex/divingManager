import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import dashboard from "src/scenes/dashboard";
import { viewDives, editDive } from "src/scenes/divingHistory";
import AccountComponent from "src/scenes/account";
import Login from "src/scenes/login";
import Register from "src/scenes/register";
import pageNotFound from "src/scenes/404";
import PropTypes from "prop-types";

import Panel from "./style";
import MobileHeader from "../mobileHeader";
import Loader from "../loader";
import * as ROUTES from "../../data/routes";

const {
  HOMEPAGE,
  DASHBOARD,
  DIVELIST,
  ADDDIVE,
  EDITDIVE,
  LOGIN,
  REGISTER,
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
        <MobileHeader />
        <Switch>
          <Route path={HOMEPAGE} exact render={() => <h1>Welcome</h1>} />
          <PrivateRoute
            path={ACCOUNT}
            authenticated={isAuthenticated}
            component={AccountComponent}
          />
          <Route path={DASHBOARD} component={dashboard} />
          <Route path={ADDDIVE} component={editDive} />
          <Route path={LOGIN} component={Login} />
          <Route path={`${EDITDIVE}/:id`} component={editDive} />
          <Route path={REGISTER} component={Register} />
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
  }
  return (
    <Panel>
      <MobileHeader />
      <Loader text="Checking..." />
    </Panel>
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  authenticated: PropTypes.bool.isRequired,
  location: PropTypes.object
};

PrivateRoute.defaultProps = {
  location: {}
};

DisplayPanel.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

export default DisplayPanel;
