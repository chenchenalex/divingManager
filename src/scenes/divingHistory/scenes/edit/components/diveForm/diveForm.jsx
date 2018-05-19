import React from "react";
import Button from "material-ui/Button";
import { connect } from "react-redux";
import store from "src/store";

import { Link } from "react-router-dom";
import DiveFormElements from "./diveformElements";
import { INITIAL_FORM_DATA } from "src/data/contants";

// import action
import { addNewDive, editDive } from "../../actions";

const classes = {
  container: "divingform-container",
  formControl: "form-control",
  label: "form-label",
  input: "text-input",
  button: "form-button"
};

export class DivingForm extends React.Component {
  formConfig = {
    name: {
      required: true,
      invalid: false,
      helperText: "Please provide name here"
    },
    location: {
      required: true,
      invalid: false,
      helperText: "Please select a location"
    },
    date: {
      required: true,
      invalid: false,
      helperText: "Date is missing"
    }
  };

  componentWillMount() {
    if (this.props.match.params.id) {
      // Edit existing dive
      const {
        divingHistory: { diveById }
      } = this.props;

      this.savedForm = diveById[this.props.match.params.id];

      this.setState(state => {
        return {
          formData: this.savedForm,
          editingFormData: this.savedForm
        };
      });
    } else {
      // Add new dive
      this.setState(state => {
        return {
          formData: { ...INITIAL_FORM_DATA },
          editingFormData: { ...INITIAL_FORM_DATA }
        };
      });
    }
  }

  componentDidMount() {
    if (!this.props.match.params.id) return;

    if (this.state.editingFormData) {
      this.validateForm();
    } else {
      // Dive requested not found
      this.props.history.push("/404");
    }
  }

  handleChange = name => event => {
    const newValue = event.target.value;

    // This is how to deep clone an object
    this.setState(function(prevState) {
      const newState = {
        ...prevState,
        editingFormData: {
          ...prevState.editingFormData,
          [name]: newValue
        }
      };

      return newState;
    });
  };

  handleBlur = name => event => {
    this.checkFormFieldValidity(name, this.state.editingFormData[name]);

    this.validateForm();
  };

  resetAllForms = () => {
    Object.keys(this.formConfig).forEach(fieldKey => {
      this.formConfig[fieldKey].invalid = false;
    });

    this.setState(function(prevState) {
      return { editingFormData: { ...prevState.formData }, formValid: true };
    });
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

  checkFormFieldValidity = (fieldKey, val) => {
    // don't check values that's not configured
    if (!this.formConfig[fieldKey]) return;

    if (this.formConfig[fieldKey].required && (val === "" || val === null)) {
      this.formConfig[fieldKey].invalid = true;
    } else {
      this.formConfig[fieldKey].invalid = false;
    }
  };

  validateForm = () => {
    let formValid = Object.keys(this.formConfig).every(key => {
      const isRequiredAndNotEmpty =
        this.formConfig[key].required && this.state.editingFormData[key] !== "";
      const isInvalid = this.formConfig[key].invalid;

      return !isInvalid && isRequiredAndNotEmpty;
    });

    this.setState(prevState => {
      return {
        ...prevState,
        formValid
      };
    });
  };

  render() {
    return (
      <div className={classes.container}>
        <DiveFormElements
          classes={classes}
          handleChange={this.handleChange}
          handleBlur={this.handleBlur}
          formData={this.state.editingFormData}
          formConfig={this.formConfig}
        />

        <div className="form-actions">
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
            <Button variant="raised" color="secondary">
              Back
            </Button>
          </Link>
          <Button variant="raised" onClick={this.resetAllForms}>
            Reset
          </Button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    divingHistory: state.scenes.divingHistory
  };
}

export default connect(mapStateToProps)(DivingForm);
