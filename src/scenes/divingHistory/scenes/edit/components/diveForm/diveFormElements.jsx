import React from "react";
import TextField from "material-ui/TextField";
import PropTypes from "prop-types";
import { DivingForm } from "../../style";
import LocationAutosuggest from "./locationSuggestion";

const formElements = ({
  classes,
  handleChange,
  handleBlur,
  formData,
  formConfig,
  locationSuggestions,
  onSuggestionsFetchRequested,
  onSuggestionsClearRequested,
  getSuggestionValue,
  inputProps
}) => {
  return (
    <DivingForm>
      <TextField
        fullWidth
        className={classes && classes.formControl}
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

      <LocationAutosuggest
        suggestions={locationSuggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        inputProps={inputProps}
      />

      <TextField
        fullWidth
        id="date"
        helperText={formConfig.date.invalid && formConfig.date.helperText}
        required={formConfig.date.required}
        type="date"
        error={formConfig.date.invalid}
        value={formData && formData.date}
        label={formConfig.date.label}
        onBlur={handleBlur("date")}
        onChange={handleChange("date")}
        margin="normal"
      />

      <TextField
        fullWidth
        id="depth"
        helperText={formConfig.depth.invalid && formConfig.depth.helperText}
        required={formConfig.depth.required}
        type="number"
        value={formData && formData.depth}
        error={formConfig.depth.invalid}
        label={formConfig.depth.label}
        onBlur={handleBlur("depth")}
        onChange={handleChange("depth")}
        margin="normal"
      />

      <TextField
        fullWidth
        id="oxygen"
        helperText={formConfig.oxygen.invalid && formConfig.oxygen.helperText}
        required={formConfig.oxygen.required}
        type="number"
        value={formData && formData.oxygen}
        error={formConfig.oxygen.invalid}
        label={formConfig.oxygen.label}
        onBlur={handleBlur("oxygen")}
        onChange={handleChange("oxygen")}
        margin="normal"
      />

      <TextField
        fullWidth
        id="feedback"
        helperText={
          formConfig.feedback.invalid && formConfig.feedback.helperText
        }
        required={formConfig.feedback.required}
        multiline={formConfig.feedback.multiline}
        rows={formConfig.feedback.rowsMax}
        value={formData && formData.feedback}
        error={formConfig.feedback.invalid}
        label={formConfig.feedback.label}
        onBlur={handleBlur("feedback")}
        onChange={handleChange("feedback")}
        margin="normal"
      />
    </DivingForm>
  );
};

formElements.propTypes = {
  classes: PropTypes.object,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  formData: PropTypes.object,
  formConfig: PropTypes.object.isRequired,
  locationSuggestions: PropTypes.array.isRequired,
  onSuggestionsFetchRequested: PropTypes.func.isRequired,
  onSuggestionsClearRequested: PropTypes.func.isRequired,
  getSuggestionValue: PropTypes.func.isRequired,
  inputProps: PropTypes.object.isRequired
};

export default formElements;
