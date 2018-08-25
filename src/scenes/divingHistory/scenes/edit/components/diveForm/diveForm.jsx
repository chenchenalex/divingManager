import React from "react";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { dispatch } from "src/store";
import Loader from "src/components/loader";
import { LOCATION_LIST } from "src/data/mockData";
import { INITIAL_FORM_DATA, FORM_CONFIG } from "src/data/config";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { getCurrentGeoLocation } from "src/data/utils";
import DiveFormElements from "./diveFormElements";
import { FormActions } from "../../style";
import userFetchDataAsync from "../../../../actions";
import GMapWrapper from "./gmapWrapper";

// import action
import { addNewDive, editDive } from "../../actions";

const classes = {
  container: "divingform-container flex left",
  formElements: "form-elements",
  gmap: "gmap",
  formControl: "form-control",
  label: "form-label",
  input: "text-input",
  button: "form-button"
};

export class DivingForm extends React.Component {
  constructor(props) {
    super(props);

    if (props.match.params.id) {
      const {
        divingHistory: { diveById }
      } = props;

      const savedForm = diveById[props.match.params.id];

      if (savedForm === null || typeof savedForm === "undefined") {
        this.state = {};
      } else {
        this.state = {
          locationSuggestions: [],
          isTouched: false,
          formData: { ...savedForm },
          editingFormData: { ...savedForm }
        };
      }
    } else {
      this.state = {
        locationSuggestions: [],
        isTouched: false,
        formData: { ...INITIAL_FORM_DATA },
        editingFormData: { ...INITIAL_FORM_DATA }
      };
    }
  }

  componentDidMount() {
    if (!this.props.match.params.id) return;

    if (this.state.formData) {
      this.onMount();

      this.validateForm();
    } else {
      // Dive requested not found, request database
      dispatch(userFetchDataAsync(this.props.userInfo.uid));
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.divingHistory !== prevProps.divingHistory) {
      const diveId = this.props.match.params.id;
      const fetchedFormData = this.props.divingHistory.diveById[diveId];

      /* IF user manually refresh the page */
      if (typeof fetchedFormData !== "undefined") {
        this.onPageRefresh(fetchedFormData);
      } else {
        this.props.history.push("/404");
      }
    }
  }

  onMount = () => {
    this.setState(state => ({
      ...state,
      editingFormData: this.state.formData
    }));
  };

  onPageRefresh = fetchedFormData => {
    this.setState({
      locationSuggestions: [],
      isTouched: false,
      formData: { ...fetchedFormData },
      editingFormData: { ...fetchedFormData }
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

    dispatch(actionCreator);

    this.props.history.push("/list");
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

  onGmapDragEnd = (...args) => {
    const { lat, lng } = args[0].latLng;

    this.setState(prevState => ({
      ...prevState,
      editingFormData: {
        ...prevState.editingFormData,
        gmapLocation: { lat: lat(), lng: lng() }
      }
    }));
  };

  getInputPropsFromConfig = ({ label, required, invalid, helperText }) => ({
    placeholder: helperText,
    value: this.state.editingFormData && this.state.editingFormData.country,
    onChange: this.handleChange("country"),
    onBlur: this.handleBlur("country"),
    type: "search",
    invalid,
    helperText,
    label,
    required
  });

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

  getSuggestionValue = suggestion => suggestion.name;

  setCurrentLocation = () => {
    getCurrentGeoLocation().then(positionObj => {
      this.setState(prevState => ({
        ...prevState,
        editingFormData: {
          ...prevState.editingFormData,
          gmapLocation: positionObj
        }
      }));

      this.validateForm();
    });
  };

  validateForm = () => {
    const formInvalid = Object.keys(this.formConfig).some(key => {
      const isRequired = this.formConfig[key].required;

      const isEmpty = this.state.editingFormData[key] === "";

      const isInvalid = this.formConfig[key].invalid;

      return isRequired && (isEmpty || isInvalid);
    });

    this.setState(prevState => ({
      ...prevState,
      formValid: !formInvalid
    }));
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

  handleChange = name => (event, { newValue } = {}) => {
    const newVal = newValue || event.target.value || "";

    this.setState(prevState => {
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

  resetAllForms = () => {
    Object.keys(this.formConfig).forEach(fieldKey => {
      this.formConfig[fieldKey].invalid = false;
    });

    this.setState(
      prevState => ({
        editingFormData: { ...prevState.formData },
        isTouched: false
      }),
      this.validateForm
    );
  };

  handleBlur = name => () => {
    const val = this.state.editingFormData[name];
    this.formConfig[name].invalid = this.checkFormFieldInValidity(name, val);

    this.validateForm();
  };

  formConfig = JSON.parse(JSON.stringify(FORM_CONFIG)); // deep copy config

  render() {
    const { locationSuggestions, editingFormData, isTouched } = this.state;

    const locationInputProps = this.getInputPropsFromConfig(
      this.formConfig.country
    );

    return this.state.editingFormData ? (
      <div className={classes.container}>
        <div className={classes.formElements}>
          <FormActions>
            <Button
              className={classes.button}
              variant="raised"
              disabled={!this.state.formValid}
              color="primary"
              onClick={this.onFormSubmit}
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
        </div>
        <div className={classes.gmap}>
          <GMapWrapper
            markerPos={
              this.state.editingFormData.gmapLocation ||
              this.setCurrentLocation()
            }
            onDragEnd={this.onGmapDragEnd}
          />
        </div>
      </div>
    ) : (
      <Loader />
    );
  }
}

DivingForm.propTypes = {
  divingHistory: PropTypes.object.isRequired,
  userInfo: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    divingHistory: state.scenes.divingHistory,
    userInfo: state.userInfo
  };
}

export default connect(mapStateToProps)(DivingForm);
