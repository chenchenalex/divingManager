import React, { Component } from "react";
import "./menu.css";

class Menu extends Component {
  render() {
    return (
      <ul className="main-menu">
        <li>{this.props.a}</li>
        <li>first element</li>
        <li>first element</li>
        <li>first element</li>
      </ul>
    );
  }
}

export default Menu;
