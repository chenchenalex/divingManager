import React from "react";
import TextField from "material-ui/TextField";
import Button from "material-ui/Button";

const StyledRegisterForm = ({ formConfig, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <TextField
        name="firstName"
        fullWidth
        label={formConfig.firstName.label}
        required={formConfig.firstName.required}
        margin="normal"
      />
      <TextField
        name="lastName"
        fullWidth
        label={formConfig.lastName.label}
        required={formConfig.lastName.required}
        margin="normal"
      />
      <TextField
        name="Email"
        fullWidth
        label={formConfig.email.label}
        required={formConfig.email.required}
        margin="normal"
      />
      <TextField
        name="password"
        type="password"
        fullWidth
        label={formConfig.password.label}
        required={formConfig.password.required}
        margin="normal"
      />
      <TextField
        name="passwordConfirm"
        type="password"
        fullWidth
        label={formConfig.passwordConfirm.label}
        required={formConfig.passwordConfirm.required}
        margin="normal"
      />

      <div className="m-top__md">
        <Button
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

export default StyledRegisterForm;
