import React from "react";
import RegisterContainer from "./style";
import RegisterForm from "./components/registerFormElements";
import { REGISTER_FORM_CONFIG } from "src/data/config";
import {
  userRegister,
  updateUserProfie,
  sendEmailVerification
} from "src/services/firebase";
import { dispatch } from "src/store";
import { updateProfileSuccess } from "src/actions";
import { ACCOUNT } from "src/data/routes";

class Register extends React.Component {
  formConfig = JSON.parse(JSON.stringify(REGISTER_FORM_CONFIG));

  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirm: "",
    formInvalid: true,
    formInvalidMessage: "",
    isLoading: false
  };

  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit = e => {
    e.preventDefault();
    this.setState({
      isLoading: true
    });

    userRegister(this.state)
      .then(() => updateUserProfie(this.state))
      .then(() => {
        const { firstName, lastName } = this.state;

        dispatch(
          updateProfileSuccess({ displayName: `${firstName} ${lastName}` })
        );

        this.setState({
          isLoading: false
        });

        this.props.history.push(ACCOUNT);
      })
      .then(() => sendEmailVerification())
      .catch(e => {
        this.setState({
          formInvalid: true,
          formInvalidMessage: e.message,
          isLoading: false
        });
      });
  };

  onChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  };

  validateForm = () => {
    let formInvalid = Object.keys(this.formConfig).some(key => {
      const isRequired = this.formConfig[key].required;

      const isEmpty = this.state[key] === "";

      const isInvalid = this.formConfig[key].invalid;

      return isRequired && (isEmpty || isInvalid);
    });

    this.setState({
      formInvalid
    });
  };

  onBlur = name => {
    const self = this;

    return () => {
      switch (name) {
        case "passwordConfirm":
          self.formConfig.passwordConfirm.unTouched = false;
          if (self.state.passwordConfirm !== self.state.password) {
            self.formConfig.passwordConfirm.invalid = true;
          } else {
            self.formConfig.passwordConfirm.invalid = false;
          }
          break;

        case "password":
          if (
            !self.formConfig.passwordConfirm.unTouched &&
            self.state.passwordConfirm !== self.state.password
          ) {
            self.formConfig.passwordConfirm.invalid = true;
          } else {
            self.formConfig.passwordConfirm.invalid = false;
          }
          break;

        case "email":
          const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          self.formConfig.email.invalid = !regex.test(self.state.email);
          break;

        default:
          /* By Default, required and empty field will be invalid */
          if (self.formConfig[name].required && self.state[name] === "") {
            self.formConfig[name].invalid = true;
          } else {
            self.formConfig[name].invalid = false;
          }
      }

      this.setState({
        formInvalidMessage: ""
      });

      this.validateForm();
    };
  };

  render() {
    return (
      <RegisterContainer>
        <div className="content">
          <h1>REGISTER</h1>
          <RegisterForm
            formConfig={this.formConfig}
            onSubmit={this.onSubmit}
            onChange={this.onChange}
            onBlur={this.onBlur}
            state={this.state || {}}
          />
          <div className="mask" />
        </div>
      </RegisterContainer>
    );
  }
}

export default Register;