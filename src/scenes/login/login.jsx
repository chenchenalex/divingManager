import React from "react";
import { AccountContainer } from "./style";
import { LoginForm } from "./components/loginForm";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import teal from "@material-ui/core/colors/teal";
import red from "@material-ui/core/colors/red";
import firebase from "firebase/app";
import "firebase/auth";
import { LOGIN_FORM_CONFIG } from "src/data/config";
import { Notification } from "src/components/notification";
import { loginSuccess } from "src/actions";
import { dispatch } from "src/store";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { ACCOUNT } from "src/data/routes";

const theme = createMuiTheme({
  palette: {
    primary: teal,
    error: red
  }
});

export class LoginPage extends React.Component {
  state = {
    username: "",
    password: "",
    errorMessage: ""
  };

  formConfig = JSON.parse(JSON.stringify(LOGIN_FORM_CONFIG));

  componentDidMount() {
    console.log(firebase.auth().currentUser);
  }

  onFormSubmit = e => {
    e.preventDefault();

    const { username, password } = this.state;

    this.setState({
      errorMessage: "",
      loading: true
    });

    /* TODO: move this to firebase.js */
    firebase
      .auth()
      .signInWithEmailAndPassword(username, password)
      .then(res => {
        this.setState({
          loading: false
        });

        dispatch(loginSuccess());
      })
      .catch(({ message }) => {
        this.setState({
          errorMessage: message,
          loading: false
        });
      });
  };

  onChange = e => {
    const name = e.target.name;

    this.setState({
      [name]: e.target.value
    });
  };

  render() {
    return this.props.loginState.isAuthenticated ? (
      <Redirect to={{ pathname: ACCOUNT }} />
    ) : (
      <AccountContainer>
        <div className="content">
          <div className="notifcation-area">
            {this.state.errorMessage !== "" && (
              <Notification variant="error">
                {this.state.errorMessage}
              </Notification>
            )}
          </div>

          <h1>LOGIN</h1>

          <MuiThemeProvider theme={theme}>
            <LoginForm
              formConfig={this.formConfig}
              onSubmit={this.onFormSubmit}
              onChange={this.onChange}
              data={this.state}
            />
          </MuiThemeProvider>
        </div>
        <div className="mask" />
      </AccountContainer>
    );
  }
}

function mapStateToProps(state) {
  return {
    loginState: state.loginState
  };
}

export default connect(mapStateToProps)(LoginPage);
