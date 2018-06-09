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
        label="Date"
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
        label="Depth"
        onBlur={handleBlur("depth")}
        onChange={handleChange("depth")}
        margin="normal"
      />
    </DivingForm>
  );
};

formElements.propTypes = {
  classes: PropTypes.object,
  handleChange: PropTypes.func.isRequired,
  formData: PropTypes.object,
  formConfig: PropTypes.object.isRequired,
  locationSuggestions: PropTypes.array.isRequired,
  onSuggestionsFetchRequested: PropTypes.func.isRequired,
  onSuggestionsClearRequested: PropTypes.func.isRequired,
  getSuggestionValue: PropTypes.func.isRequired,
  inputProps: PropTypes.object.isRequired
};

export default formElements;
