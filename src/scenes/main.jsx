import React from "react";
import Container from "./style";
import SideMenu from "../components/menu";
import DisplayPanel from "../components/displayPanel";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { userLoginObserver } from "../services/firebase";
import { dispatch } from "../store";
import { loginSuccess } from "../actions";

class Main extends React.Component {
  componentDidMount() {
    const callback = function(user) {
      if (user) {
        dispatch(loginSuccess(user));
      } else {
        console.log("user not logged in!");
      }
    };

    // create observe user login info
    userLoginObserver(callback);
  }
  render() {
    return (
      <Container className="App">
        <SideMenu items={this.props.menuItems} location={this.props.location} />
        <DisplayPanel userInfo={this.props.userInfo} />
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    divingHistory: state.scenes.divingHistory,
    menuItems: state.components.menu,
    userInfo: state.userInfo
  };
}

export default withRouter(connect(mapStateToProps)(Main));
