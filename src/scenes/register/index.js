import React from "react";
import RegisterContainer from "./style";
import RegisterForm from "./components/registerForm";
import { REGISTER_FORM_CONFIG } from "src/data/config";

class Register extends React.Component {
  formConfig = JSON.parse(JSON.stringify(REGISTER_FORM_CONFIG));

  onSubmit = e => {
    e.preventDefault();
    console.log("form submitted");
  };

  onChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <RegisterContainer>
        <div className="content">
          <h1>REGISTER</h1>
          <RegisterForm formConfig={this.formConfig} onSubmit={this.onSubmit} />
          <div className="mask" />
        </div>
      </RegisterContainer>
    );
  }
}

export default Register;
