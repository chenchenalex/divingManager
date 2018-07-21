import TextField from "material-ui/TextField";
import Button from "material-ui/Button";
import { Link } from "react-router-dom";
import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

export const LoginForm = ({
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
        <Link to={`account/register`}>
          <strong>Sign up</strong>
        </Link>
      </p>

      {isloading ? (
        <CircularProgress />
      ) : (
        <Button variant="raised" color="secondary" type="submit">
          Login
        </Button>
      )}
    </div>
  </form>
);
