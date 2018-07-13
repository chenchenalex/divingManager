import React from "react";
import { connect } from "react-redux";

export class Account extends React.Component {
  render() {
    return <div>loggedIn? {"" + this.props.loginState.isAuthenticated}</div>;
  }
}

function mapStateToProps(state) {
  return {
    loginState: state.loginState
  };
}

export default connect(mapStateToProps)(Account);
