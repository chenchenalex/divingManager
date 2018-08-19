import React from "react";
import { Link } from "react-router-dom";
import { LOGIN } from "src/data/routes";
import PropTypes from "prop-types";
import { MenuItem } from "../style";

const MenuItemComponent = ({
  isActive,
  isDisabled,
  children,
  url,
  icon: Icon
}) => (
  <MenuItem isActive={isActive}>
    {Icon ? <Icon color="white" size={20} /> : ""}
    {isDisabled ? (
      <Link to={LOGIN}> {children}</Link>
    ) : (
      <Link to={url}>{children}</Link>
    )}
  </MenuItem>
);

MenuItemComponent.propTypes = {
  isActive: PropTypes.bool.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  children: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  icon: PropTypes.func.isRequired
};

export default MenuItemComponent;
