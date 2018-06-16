import React from "react";
import MainMenu, { MenuItem } from "./style";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class Menu extends React.PureComponent {
  render() {
    let pageUrl = "";
    if (typeof window.location !== "undefined") {
      pageUrl = window.location.pathname.split("/")[1];
    }

    return (
      <MainMenu>
        {this.props.items &&
          this.props.items.map(({ name, url, id }) => (
            <Link key={id} to={url}>
              <MenuItem isActive={pageUrl === url.slice(1)}>{name}</MenuItem>
            </Link>
          ))}
      </MainMenu>
    );
  }
}

Menu.propTypes = {
  items: PropTypes.array.isRequired
};

export default Menu;
