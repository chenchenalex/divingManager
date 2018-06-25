import React from "react";
import Button from "material-ui/Button";
import { connect } from "react-redux";
import store from "src/store";
import Loader from "src/components/loader";

import { Link } from "react-router-dom";
import DiveFormElements from "./diveFormElements";
import { INITIAL_FORM_DATA, FORM_CONFIG } from "src/data/config";
import { LOCATION_LIST } from "src/data/mockData";
import { FormActions } from "../../style";
import { userFetchDataAsync } from "../../../../actions";

// import action
import { addNewDive, editDive } from "../../actions";

const classes = {
  container: "divingform-container",
  formControl: "form-control",
  label: "form-label",
  input: "text-input",
  button: "form-button"
};

const { dispatch } = store;

export class DivingForm extends React.Component {
  formConfig = JSON.parse(JSON.stringify(FORM_CONFIG)); // deep copy config

  componentDidMount() {
    if (!this.props.match.params.id) return;

    if (this.state.editingFormData) {
      this.validateForm();
    } else {
      // Dive requested not found, request database
      dispatch(userFetchDataAsync("alex"));
      // this.props.history.push("/404");
    }

    console.log("component did mount");
  }

  static getDerivedStateFromProps(props) {
    if (Object.keys(props.divingHistory.diveById).length > 0) {
      // Edit existing Dive
      if (props.match.params.id) {
        const {
          divingHistory: { diveById }
        } = props;

        const savedForm = diveById[props.match.params.id];

        return {
          formData: savedForm,
          editingFormData: savedForm,
          locationSuggestions: [],
          isTouched: false
        };
      } else {
        return {
          formData: { ...INITIAL_FORM_DATA },
          editingFormData: { ...INITIAL_FORM_DATA },
          locationSuggestions: [],
          isTouched: false
        };
      }
    }
    return {};
  }

  initializeState = props => {
    if (props.match.params.id) {
      // Edit existing dive
      const {
        divingHistory: { diveById }
      } = props;

      this.savedForm = diveById[props.match.params.id];

      this.setState(state => {
        return {
          formData: this.savedForm,
          editingFormData: this.savedForm,
          locationSuggestions: [],
          isTouched: false
        };
      });
    } else {
      // Add new dive
      this.setState(state => {
        return {
          formData: { ...INITIAL_FORM_DATA },
          editingFormData: { ...INITIAL_FORM_DATA },
          locationSuggestions: [],
          isTouched: false
        };
      });
    }
  };

  handleChange = name => (event, { newValue } = {}) => {
    // This is how to deep clone an object
    const newVal = newValue || event.target.value || "";

    this.setState(function(prevState) {
      const newState = {
        ...prevState,
        editingFormData: {
          ...prevState.editingFormData,
          [name]: newVal
        },
        isTouched: true
      };

      return newState;
    });
  };

  handleBlur = name => () => {
    const val = this.state.editingFormData[name];
    this.formConfig[name].invalid = this.checkFormFieldInValidity(name, val);

    this.validateForm();
  };

  resetAllForms = () => {
    Object.keys(this.formConfig).forEach(fieldKey => {
      this.formConfig[fieldKey].invalid = false;
    });

    this.setState(function(prevState) {
      return {
        editingFormData: { ...prevState.formData },
        isTouched: false
      };
    }, this.validateForm);
  };

  onFormSubmit = () => {
    let actionCreator;

    if (!this.state.formValid) return;

    // Call actions based on form ID
    if (typeof this.state.editingFormData.id === "undefined") {
      actionCreator = addNewDive(this.state.editingFormData);
    } else {
      actionCreator = editDive(this.state.editingFormData);
    }

    store.dispatch(actionCreator);

    this.props.history.push("/list");
  };

  checkFormFieldInValidity = (fieldKey, val) => {
    // don't check values that's not configured
    if (!this.formConfig[fieldKey]) return true;

    // Check empty values
    if (this.formConfig[fieldKey].required && (val === "" || val === null)) {
      return true;
    }

    // Check specific rules
    switch (fieldKey) {
      case "depth":
        return parseFloat(val) < 0;
      default:
        return false;
    }
  };

  validateForm = () => {
    let formInvalid = Object.keys(this.formConfig).some(key => {
      const isRequired = this.formConfig[key].required;

      const isEmpty = this.state.editingFormData[key] === "";

      const isInvalid = this.formConfig[key].invalid;

      return isRequired && (isEmpty || isInvalid);
    });

    this.setState(prevState => {
      return {
        ...prevState,
        formValid: !formInvalid
      };
    });
  };

  getSuggestions = input => {
    const inputValue = input.trim().toLowerCase();
    const inputLength = inputValue.length;
    let count = 0;

    return inputLength === 0
      ? []
      : LOCATION_LIST.filter(suggestion => {
          const keep =
            count <= 5 &&
            suggestion.name.toLowerCase().slice(0, inputLength) === inputValue;

          if (keep) count += 1;
          return keep;
        });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      locationSuggestions: this.getSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      locationSuggestions: []
    });
  };

  getSuggestionValue = suggestion => {
    return suggestion.name;
  };

  getInputPropsFromConfig = ({ label, required, invalid, helperText }) => {
    return {
      placeholder: helperText,
      value: this.state.editingFormData && this.state.editingFormData.country,
      onChange: this.handleChange("country"),
      onBlur: this.handleBlur("country"),
      type: "search",
      invalid,
      helperText,
      label,
      required
    };
  };

  render() {
    const { locationSuggestions, editingFormData, isTouched } = this.state;

    const locationInputProps = this.getInputPropsFromConfig(
      this.formConfig.country
    );

    return this.state.editingFormData ? (
      <div className={classes.container}>
        <DiveFormElements
          classes={classes}
          locationSuggestions={locationSuggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={this.getSuggestionValue}
          inputProps={locationInputProps}
          handleChange={this.handleChange}
          handleBlur={this.handleBlur}
          formData={editingFormData}
          formConfig={this.formConfig}
        />

        <FormActions>
          <Button
            className={classes.button}
            variant="raised"
            disabled={!this.state.formValid}
            color="primary"
            onClick={this.onFormSubmit.bind(this)}
          >
            Save
          </Button>
          <Link to="/list">
            <Button variant="raised">Back</Button>
          </Link>
          <Button
            variant="raised"
            disabled={!isTouched}
            onClick={this.resetAllForms}
          >
            Reset
          </Button>
        </FormActions>
      </div>
    ) : (
      <Loader />
    );
  }
}

function mapStateToProps(state) {
  return {
    divingHistory: state.scenes.divingHistory
  };
}

export default connect(mapStateToProps)(DivingForm);
