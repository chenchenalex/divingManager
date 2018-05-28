export const INITIAL_FORM_DATA = {
  name: "",
  location: "",
  date: "2018-01-01",
  depth: 0
};

export const FORM_CONFIG = {
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
  },
  depth: {
    required: false,
    invalid: false,
    helperText: "Depth is missing"
  }
};
