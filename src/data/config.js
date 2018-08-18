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
    helperText: "Date is invalid or missing"
  },
  diveBuddy: {
    required: false,
    invalid: false,
    label: "Dive Buddy",
    helperText: "Dive buddy is missing"
  },
  rating: {
    required: true,
    invalid: false,
    label: "Rating",
    helperText: "Rating is missing",
    options: [1, 2, 3, 4, 5]
  },
  depth: {
    required: true,
    invalid: false,
    label: "Depth",
    helperText: "Depth is invalid or missing"
  },
  oxygen: {
    required: false,
    invalid: false,
    label: "Oxygen left",
    helperText: "Oxygen amount invalid or missing"
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

export const LOGIN_FORM_CONFIG = {
  username: {
    required: true,
    invalid: false,
    label: "Email",
    helperText: "Please provide valid email address"
  },

  password: {
    required: true,
    invalid: false,
    label: "Password",
    helperText: "Please provide password"
  }
};

export const REGISTER_FORM_CONFIG = {
  firstName: {
    required: true,
    invalid: false,
    label: "First Name",
    helperText: "Please provide your first name"
  },
  lastName: {
    required: false,
    invalid: false,
    label: "Last Name",
    helperText: "Please provide your last name"
  },
  email: {
    required: true,
    invalid: false,
    label: "Email",
    helperText: "Please provide email address"
  },
  password: {
    required: true,
    invalid: false,
    label: "Password",
    helperText: "Please provide password"
  },
  passwordConfirm: {
    required: true,
    invalid: false,
    unTouched: true,
    label: "Confirm password",
    helperText: "Passwords don't match"
  }
};
