import React from "react";
import RegisterContainer from "./style";
import RegisterForm from "./components/registerForm";
import { REGISTER_FORM_CONFIG } from "src/data/config";

class Register extends React.Component {
  formConfig = JSON.parse(JSON.stringify(REGISTER_FORM_CONFIG));

  render() {
    return (
      <RegisterContainer>
        <div className="content">
          <h1>REGISTER</h1>
          <RegisterForm formConfig={this.formConfig} />
          <div className="mask" />
        </div>
      </RegisterContainer>
    );
  }
}

export default Register;
