import React from "react";
import MainMenu, { MenuItem } from "./style";
import { Link, Redirect } from "react-router-dom";
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
          this.props.items.map(({ name, url, id, loginRequired }) => {
            const isDisabled = !this.props.isAuthenticated && loginRequired;

            return (
              <MenuItem key={id} isActive={this.state.pathname === url}>
                {isDisabled ? (
                  <Link to={LOGIN}> {name}</Link>
                ) : (
                  <Link to={url}>{name}</Link>
                )}
              </MenuItem>
            );
          })}
      </MainMenu>
    );
  }
}

Menu.propTypes = {
  items: PropTypes.array.isRequired,
  location: PropTypes.object
};

export default Menu;
