import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";

const DMButton = ({ btnType, isLoading, children, ...props }) => {
  let WrappedButton;

  switch (btnType) {
    case "secondary":
      WrappedButton = (
        <Button variant="raised" color="secondary" {...props}>
          {children}
        </Button>
      );

      break;
    default:
      WrappedButton = (
        <Button variant="raised" color="secondary" {...props}>
          {children}
        </Button>
      );
  }

  return isLoading ? <CircularProgress /> : WrappedButton;
};

DMButton.propTypes = {
  btnType: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  children: PropTypes.any.isRequired
};

export default DMButton;
