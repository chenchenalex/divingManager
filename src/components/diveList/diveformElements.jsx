import React from "react";
import TextField from "material-ui/TextField";
import PropTypes from "prop-types";
import { DivingForm } from "./style";

const formElements = ({
  classes,
  handleChange,
  formData,
  handleSubmit,
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
        required={formConfig.name.required}
        value={formData && formData.name}
        onChange={handleChange("name")}
        margin="normal"
      />
      <TextField
        fullWidth
        id="location"
        type="search"
        required={formConfig.location.required}
        error={formConfig.location.invalid}
        value={formData && formData.location}
        className={classes.formControl}
        label="Location"
        onChange={handleChange("location")}
        margin="normal"
      />

      <TextField
        fullWidth
        id="date"
        required={formConfig.date.required}
        type="date"
        error={formConfig.date.invalid}
        value={formData && formData.date}
        label="Date"
        onChange={handleChange("date")}
        margin="normal"
      />
    </DivingForm>
  );
};

formElements.propTypes = {
  classes: PropTypes.object,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  formData: PropTypes.object,
  formConfig: PropTypes.object.isRequired
};

export default formElements;
