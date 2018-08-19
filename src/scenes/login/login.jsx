import React from "react";
import "firebase/auth";
import { LOGIN_FORM_CONFIG } from "src/data/config";
import Notification from "src/components/notification";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { ACCOUNT } from "src/data/routes";
import { userLogin } from "src/services/firebase";
import PropTypes from "prop-types";

import LoginContainer from "./style";
import LoginForm from "./components/loginForm";

export class LoginPage extends React.Component {
  state = {
    username: "",
    password: "",
    errorMessage: ""
  };

  onFormSubmit = e => {
    e.preventDefault();

    const { username, password } = this.state;

    this.setState({
      errorMessage: "",
      loading: true
    });

    return userLogin({ username, password })
      .then(() => {
        this.setState({
          loading: false
        });
      })
      .catch(({ message }) => {
        this.setState({
          errorMessage: message,
          loading: false
        });
      });
  };

  onChange = e => {
    const { name } = e.target;

    this.setState({
      [name]: e.target.value
    });
  };

  formConfig = JSON.parse(JSON.stringify(LOGIN_FORM_CONFIG));

  render() {
    let redirectUrl;
    if (typeof this.props.location.from !== "undefined") {
      redirectUrl = this.props.location.from.pathname;
    } else {
      redirectUrl = ACCOUNT;
    }

    return this.props.userInfo.isAuthenticated ? (
      <Redirect to={{ pathname: redirectUrl }} />
    ) : (
      <LoginContainer>
        <div className="content">
          <div className="notifcation-area">
            {this.state.errorMessage !== "" && (
              <Notification variant="error">
                {this.state.errorMessage}
              </Notification>
            )}
          </div>

          <h1>LOGIN</h1>

          <LoginForm
            formConfig={this.formConfig}
            onSubmit={this.onFormSubmit}
            onChange={this.onChange}
            data={this.state}
            isloading={this.state.loading}
          />

          <div className="mask" />
        </div>
      </LoginContainer>
    );
  }
}

LoginPage.propTypes = {
  location: PropTypes.object.isRequired,
  userInfo: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    userInfo: state.userInfo
  };
}

export default connect(mapStateToProps)(LoginPage);
