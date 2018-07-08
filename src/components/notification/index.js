import React from "react";
import StyledNotification from "./style";

export const Notification = ({ variant, fullWidth, children }) => (
  <StyledNotification variant={variant} fullWidth={fullWidth}>
    {children}
  </StyledNotification>
);
