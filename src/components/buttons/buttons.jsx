import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "material-ui/Button";

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

export default DMButton;
