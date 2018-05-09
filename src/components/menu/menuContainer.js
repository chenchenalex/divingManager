import React, { Component } from "react";
import MainMenu, { MenuItem } from "./menuContainer.style";
import { Link } from "react-router-dom";
class Menu extends Component {
  render() {
    return (
      <MainMenu>
        {this.props.items.map(({ name, url, id }) => (
          <Link key={id} to={url}>
            <MenuItem>{name}</MenuItem>
          </Link>
        ))}
      </MainMenu>
    );
  }
}

export default Menu;
