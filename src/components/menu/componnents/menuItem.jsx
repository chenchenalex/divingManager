import React from "react";
import { MenuItem } from "../style";
import { Link } from "react-router-dom";
import { LOGIN } from "src/data/routes";

export default ({ isActive, isDisabled, children, url, icon: Icon }) => {
  return (
    <MenuItem isActive={isActive}>
      {Icon ? <Icon color="white" size={20} /> : ""}
      {isDisabled ? (
        <Link to={LOGIN}> {children}</Link>
      ) : (
        <Link to={url}>{children}</Link>
      )}
    </MenuItem>
  );
};
