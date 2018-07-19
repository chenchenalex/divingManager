import React from "react";
import Container from "./style";
import SideMenu from "../components/menu";
import DisplayPanel from "../components/displayPanel";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { userLoginObserver } from "../services/firebase";
import { dispatch } from "../store";
import { loginSuccess, loginFailure } from "../actions";

class Main extends React.Component {
  componentDidMount() {
    const callback = function(user) {
      if (user) {
        dispatch(loginSuccess(user));
      } else {
        dispatch(loginFailure());
      }
    };

    // create observe user login info
    userLoginObserver(callback);
  }
  render() {
    return (
      <Container className="App">
        <SideMenu items={this.props.menuItems} location={this.props.location} />
        <DisplayPanel
          isOnline={this.props.isOnline}
          isAuthenticated={this.props.isAuthenticated}
        />
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    divingHistory: state.scenes.divingHistory,
    menuItems: state.components.menu,
    isAuthenticated: state.userInfo.isAuthenticated,
    isOnline: state.connectionStatus.isOnline
  };
}

export default withRouter(connect(mapStateToProps)(Main));
