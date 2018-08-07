import React from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import { dispatch } from "src/store";
import { userLogOut } from "src/actions";
import StyledAccount from "./style-account";
import { sendEmailVerification } from "src/services/firebase";

export class Account extends React.Component {
  onSignOut = () => {
    dispatch(userLogOut());
  };

  onConfirmEmail = () => {
    sendEmailVerification();
  };

  render() {
    return (
      <StyledAccount>
        <header>
          {this.props.userInfo.isAuthenticated && (
            <h1>Welcome back! {this.props.userInfo.displayName}</h1>
          )}

          <Button
            variant="raised"
            color="primary"
            aria-label="add"
            onClick={this.onSignOut}
          >
            Log out
          </Button>
        </header>

        <table>
          <tbody>
            <tr>
              <td>Email:</td>
              <td>{this.props.userInfo.email}</td>
            </tr>
            <tr>
              <td>Email verified: </td>
              <td>&nbsp;{this.props.userInfo.emailVerified.toString()}</td>
              {!this.props.userInfo.emailVerified && (
                <td>
                  <Button onClick={this.onConfirmEmail}>Verify</Button>
                </td>
              )}
            </tr>
          </tbody>
        </table>
      </StyledAccount>
    );
  }
}

function mapStateToProps(state) {
  return {
    userInfo: state.userInfo
  };
}

export default connect(mapStateToProps)(Account);
