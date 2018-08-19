import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import React from "react";
import { REGISTER } from "src/data/routes";
import CircularProgress from "@material-ui/core/CircularProgress";
import PropTypes from "prop-types";

const LoginForm = ({
  data: { username, password },
  onSubmit,
  onChange,
  formConfig,
  isloading
}) => (
  <form onSubmit={onSubmit}>
    <TextField
      name="username"
      fullWidth
      label={formConfig.username.label}
      type="email"
      required={formConfig.username.required}
      onChange={onChange}
      value={username}
      margin="normal"
    />
    <TextField
      name="password"
      type="password"
      fullWidth
      label={formConfig.password.label}
      value={password}
      onChange={onChange}
      required={formConfig.password.required}
      margin="normal"
    />

    <div className="form-actions">
      <p className="form-actions__register">
        New User? &nbsp;
        <Link to={REGISTER}>
          <strong>Sign up</strong>
        </Link>
      </p>

      <div className="m-top__md">
        {isloading ? (
          <CircularProgress />
        ) : (
          <Button variant="raised" color="secondary" type="submit">
            Login
          </Button>
        )}
      </div>
    </div>
  </form>
);

LoginForm.propTypes = {
  data: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  formConfig: PropTypes.object.isRequired,
  isloading: PropTypes.bool
};

LoginForm.defaultProps = {
  isloading: false
};

export default LoginForm;
