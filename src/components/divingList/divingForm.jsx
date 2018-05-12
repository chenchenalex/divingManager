import React from "react";
import Button from "material-ui/Button";
import TextField from "material-ui/TextField";
import { DivingForm } from "./style";
import { Link } from "react-router-dom";

const classes = {
  container: "divingform-container",
  formControl: "form-control",
  label: "form-label",
  input: "text-input",
  button: "form-button"
};

class divingForm extends React.Component {
  state = {
    name: "",
    location: "",
    date: "0000-00-00"
  };

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
      return {
        name: "",
        location: "",
        date: "0000-00-00"
      };
    });
  };

  render() {
    return (
      <div className={classes.container}>
        <div>
          <Link to="/list">
            <Button variant="raised" color="primary">
              Back
            </Button>
          </Link>
          <Button variant="raised" onClick={this.resetAllForms}>
            Reset
          </Button>
        </div>

        <DivingForm>
          <TextField
            fullWidth
            className={classes.formControl}
            id="name"
            label="Name"
            value={this.state.name}
            onChange={this.handleChange("name")}
            margin="normal"
          />
          <TextField
            fullWidth
            id="location"
            type="search"
            value={this.state.location}
            className={classes.formControl}
            label="Location"
            onChange={this.handleChange("location")}
            margin="normal"
          />

          <TextField
            fullWidth
            id="date"
            type="date"
            value={this.state.date}
            label="Date"
            onChange={this.handleChange("date")}
            margin="normal"
          />

          <Button className={classes.button}>Save</Button>
        </DivingForm>
      </div>
    );
  }
}

export default divingForm;
