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
  state = { ...INITIAL_FORM_DATA };

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
      this.setState(state => {
        return this.props.divingHistory.find(
          dive => dive.id === parseInt(this.props.match.params.id, 10)
        );
      });
    }
  }

  handleChange = name => event => {
    const newValue = event.target.value;

    this.setState(function(state) {
      return {
        [name]: newValue
      };
    });
  };

  resetAllForms = () => {
    this.setState(function(state) {
      return INITIAL_FORM_DATA;
    });
  };

  onFormSubmit = () => {
    let actionCreator;

    this.setState({
      formValid: true
    });

    // Toggle form input error Text
    Object.entries(this.state).forEach(this.checkFormFieldValidity);

    // Call actions based on form ID
    if (typeof this.state.id === "undefined") {
      actionCreator = addNewDive(this.state);
    } else {
      actionCreator = editDive(this.state);
    }

    store.dispatch(actionCreator);

    this.props.history.push("/list");
  };

  checkFormFieldValidity = (key, val) => {
    if (val === "" || val === null) {
      this.errorText[key].invalid = true;

      this.setState({
        formValid: false
      });
    } else {
      this.errorText[key].invalid = false;
    }
  };

  render() {
    return (
      <div className={classes.container}>
        <div className="form-actions">
          <Button
            className={classes.button}
            variant="raised"
            color="primary"
            onClick={this.onFormSubmit}
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

        <DiveFormElements
          classes={classes}
          handleChange={this.handleChange}
          handleSubmit={this.onFormSubmit}
          formData={this.state}
          errorStatus={this.errorText}
        />
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
