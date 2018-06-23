import React from "react";
import MainMenu, { MenuItem } from "./style";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

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
          this.props.items.map(({ name, url, id }) => (
            <Link key={id} to={url}>
              <MenuItem isActive={this.state.pathname === url}>{name}</MenuItem>
            </Link>
          ))}
      </MainMenu>
    );
  }
}

Menu.propTypes = {
  items: PropTypes.array.isRequired,
  location: PropTypes.object
};

export default Menu;
