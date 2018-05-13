import React from "react";
import TextField from "material-ui/TextField";
import PropTypes from "prop-types";
import { DivingForm } from "./style";

const formElements = ({
  classes,
  handleChange,
  handleBlur,
  formData,
  formConfig
}) => {
  return (
    <DivingForm>
      <TextField
        fullWidth
        className={classes.formControl}
        id="name"
        label="Name"
        error={formConfig.name.invalid}
        helperText={formConfig.name.invalid && formConfig.name.helperText}
        required={formConfig.name.required}
        value={formData && formData.name}
        onBlur={handleBlur("name")}
        onChange={handleChange("name")}
        margin="normal"
      />
      <TextField
        fullWidth
        id="location"
        type="search"
        helperText={
          formConfig.location.invalid && formConfig.location.helperText
        }
        required={formConfig.location.required}
        error={formConfig.location.invalid}
        value={formData && formData.location}
        className={classes.formControl}
        label="Location"
        onBlur={handleBlur("location")}
        onChange={handleChange("location")}
        margin="normal"
      />

      <TextField
        fullWidth
        id="date"
        helperText={formConfig.date.invalid && formConfig.date.helperText}
        required={formConfig.date.required}
        type="date"
        error={formConfig.date.invalid}
        value={formData && formData.date}
        label="Date"
        onBlur={handleBlur("date")}
        onChange={handleChange("date")}
        margin="normal"
      />
    </DivingForm>
  );
};

formElements.propTypes = {
  classes: PropTypes.object,
  handleChange: PropTypes.func.isRequired,
  formData: PropTypes.object,
  formConfig: PropTypes.object.isRequired
};

export default formElements;
