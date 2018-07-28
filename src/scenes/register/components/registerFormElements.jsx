import React from "react";
import TextField from "material-ui/TextField";
import Button from "material-ui/Button";
import PropTypes from "prop-types";

const StyledRegisterForm = ({
  formConfig,
  onSubmit,
  onChange,
  onBlur,
  state
}) => {
  return (
    <form onSubmit={onSubmit}>
      <TextField
        name="firstName"
        fullWidth
        error={formConfig.firstName.invalid}
        helperText={
          formConfig.firstName.invalid && formConfig.firstName.helperText
        }
        onBlur={onBlur("firstName")}
        onChange={onChange}
        label={formConfig.firstName.label}
        required={formConfig.firstName.required}
        margin="normal"
      />
      <TextField
        name="lastName"
        fullWidth
        onBlur={onBlur("lastName")}
        onChange={onChange}
        label={formConfig.lastName.label}
        required={formConfig.lastName.required}
        margin="normal"
      />
      <TextField
        name="email"
        type="email"
        fullWidth
        error={formConfig.email.invalid}
        helperText={formConfig.email.invalid && formConfig.email.helperText}
        onBlur={onBlur("email")}
        onChange={onChange}
        label={formConfig.email.label}
        required={formConfig.email.required}
        margin="normal"
      />
      <TextField
        name="password"
        type="password"
        fullWidth
        onBlur={onBlur("password")}
        onChange={onChange}
        label={formConfig.password.label}
        required={formConfig.password.required}
        margin="normal"
      />
      <TextField
        name="passwordConfirm"
        type="password"
        helperText={
          formConfig.passwordConfirm.invalid &&
          formConfig.passwordConfirm.helperText
        }
        error={formConfig.passwordConfirm.invalid}
        fullWidth
        disabled={
          typeof state.password === "undefined" || state.password === ""
        }
        onBlur={onBlur("passwordConfirm")}
        onChange={onChange}
        label={formConfig.passwordConfirm.label}
        required={formConfig.passwordConfirm.required}
        margin="normal"
      />

      <div className="m-top__md">
        <Button
          disabled={state.formInvalid}
          variant="raised"
          color="secondary"
          type="submit"
          className="m-top-md"
        >
          Submit
        </Button>
      </div>
    </form>
  );
};

StyledRegisterForm.propTypes = {
  formConfig: PropTypes.object.isRequired,
  state: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired
};

export default StyledRegisterForm;
