export const INITIAL_FORM_DATA = {
  name: "",
  country: "",
  date: "2018-01-01",
  depth: "",
  oxygen: ""
};

export const FORM_CONFIG = {
  name: {
    required: true,
    invalid: false,
    label: "Name",
    helperText: "Please provide name here"
  },
  country: {
    required: true,
    invalid: false,
    label: "Country",
    helperText: "Please select a country"
  },
  date: {
    required: true,
    invalid: false,
    label: "Date",
    helperText: "Date is missing"
  },
  depth: {
    required: true,
    invalid: false,
    label: "Depth",
    helperText: "Depth is missing"
  },
  oxygen: {
    required: false,
    invalid: false,
    label: "Oxygen left",
    helperText: "Oxygen amount is not provided"
  },
  feedback: {
    multiline: true,
    rowsMax: "6",
    required: false,
    invalid: false,
    label: "How do you feel?",
    helperText: "No feedback?"
  }
};
