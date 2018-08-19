import React from "react";
import PropTypes from "prop-types";
import StyledNotification from "./style";

const Notification = ({ variant, fullWidth, children }) => (
  <StyledNotification variant={variant} fullWidth={fullWidth}>
    {children}
  </StyledNotification>
);

Notification.propTypes = {
  variant: PropTypes.string.isRequired,
  fullWidth: PropTypes.bool,
  children: PropTypes.any.isRequired
};

Notification.defaultProps = {
  fullWidth: false
};

export default Notification;
