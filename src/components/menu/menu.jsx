import React from "react";
import MainMenu, { MenuItem } from "./style";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { LOGIN } from "src/data/routes";

class Menu extends React.PureComponent {
  state = {
    pathname: "/"
  };

  componentDidUpdate() {
    this.setState({
      pathname: this.props.location.pathname
    });
  }

  render() {
    return (
      <MainMenu>
        {this.props.items &&
          this.props.items.map(
            ({ name, url, id, loginRequired, iconClass }) => {
              const isDisabled = !this.props.isAuthenticated && loginRequired;
              /* TODO: find a better approach to import icons */
              const Icon = require("react-icons/lib/fa")[iconClass];

              return (
                <MenuItem key={id} isActive={this.state.pathname === url}>
                  {Icon ? <Icon color="white" size={20} /> : ""}

                  {isDisabled ? (
                    <Link to={LOGIN}> {name}</Link>
                  ) : (
                    <Link to={url}>{name}</Link>
                  )}
                </MenuItem>
              );
            }
          )}
      </MainMenu>
    );
  }
}

Menu.propTypes = {
  items: PropTypes.array.isRequired,
  location: PropTypes.object
};

export default Menu;
