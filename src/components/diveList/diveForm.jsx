import React from "react";
import Button from "material-ui/Button";
import { connect } from "react-redux";
import store from "../store";

import { Link } from "react-router-dom";
import DiveFormElements from "./diveformElements";
import { INITIAL_FORM_DATA } from "../../data/contants";

// import action
import { addNewDive, editDive } from "../../actions/diveFormActions";

const classes = {
  container: "divingform-container",
  formControl: "form-control",
  label: "form-label",
  input: "text-input",
  button: "form-button"
};

export class DivingForm extends React.Component {
  state = { formData: { ...INITIAL_FORM_DATA } };

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

  savedForm = {};

  componentWillMount() {
    if (this.props.match.params.id) {
      this.savedForm = this.props.divingHistory.find(
        dive => dive.id === parseInt(this.props.match.params.id, 10)
      );

      this.setState(state => {
        return {
          formData: this.savedForm
        };
      });

      this.validateForm();
    }
  }

  handleChange = name => event => {
    const newValue = event.target.value;

    // This is how to deep clone an object
    this.setState(function(prevState) {
      const newState = {
        ...prevState,
        formData: {
          ...prevState.formData,
          [name]: newValue
        }
      };

      return newState;
    });
  };

  handleBlur = name => event => {
    this.checkFormFieldValidity(name, this.state.formData[name]);

    this.validateForm();
  };

  resetAllForms = () => {
    this.setState(function() {
      return { formData: { ...INITIAL_FORM_DATA } };
    });
  };

  onFormSubmit = () => {
    let actionCreator;

    if (!this.state.formValid) return;

    // Call actions based on form ID
    if (typeof this.state.formData.id === "undefined") {
      actionCreator = addNewDive(this.state.formData);
    } else {
      actionCreator = editDive(this.state.formData);
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
    let formValid = !Object.keys(this.formConfig).some(key => {
      return this.formConfig[key].invalid;
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
          formData={this.state.formData}
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
    divingHistory: state.divingHistory
  };
}

export default connect(mapStateToProps)(DivingForm);
