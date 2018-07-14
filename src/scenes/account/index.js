import React from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import { dispatch } from "src/store";
import { userLogOut } from "src/actions";

export class Account extends React.Component {
  onSignOut = () => {
    dispatch(userLogOut());
  };

  render() {
    return (
      <div>
        loggedIn? {"" + this.props.userInfo.isAuthenticated}
        <Button
          variant="raised"
          color="primary"
          aria-label="add"
          onClick={this.onSignOut}
        >
          Log out
        </Button>
        {this.props.userInfo.isAuthenticated && (
          <p>
            Welcome back! {this.props.userInfo.email}, id:{" "}
            {this.props.userInfo.uid}
          </p>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userInfo: state.userInfo
  };
}

export default connect(mapStateToProps)(Account);
