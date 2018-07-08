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

const theme = createMuiTheme({
  palette: {
    primary: teal,
    error: red
  }
});

class Account extends React.Component {
  state = {
    username: "",
    password: "",
    errorMessage: ""
  };

  formConfig = JSON.parse(JSON.stringify(LOGIN_FORM_CONFIG));

  onFormSubmit = () => {
    const { username, password } = this.state;

    this.setState({
      errorMessage: "",
      loading: true
    });

    firebase
      .auth()
      .signInWithEmailAndPassword(username, password)
      .then(res => {
        console.log(res);

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
    const name = e.target.name;

    this.setState({
      [name]: e.target.value
    });
  };

  render() {
    return (
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

export default Account;
