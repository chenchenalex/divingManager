import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import Container from "./style";
import SideMenu from "../components/menu";
import DisplayPanel from "../components/displayPanel";
import { userLoginObserver } from "../services/firebase";
import { dispatch } from "../store";
import { loginSuccess, loginFailure } from "../actions";

class Main extends React.Component {
  componentDidMount() {
    const callback = user => {
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
        <SideMenu
          items={this.props.menuItems}
          location={this.props.location}
          isAuthenticated={this.props.isAuthenticated}
        />
        <DisplayPanel
          isOnline={this.props.isOnline}
          isAuthenticated={this.props.isAuthenticated}
        />
      </Container>
    );
  }
}

Main.propTypes = {
  menuItems: PropTypes.array.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  isOnline: PropTypes.bool.isRequired,
  location: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    menuItems: state.components.menu,
    isAuthenticated: state.userInfo.isAuthenticated,
    isOnline: state.connectionStatus.isOnline
  };
}

export default withRouter(connect(mapStateToProps)(Main));
