import React, { Component } from "react";

import "./App.css";

import { menuItems } from "../../data/mockData";

import SideMenu from "../menu/menuContainer";
import DisplayPanel from "../displayPanel/displayPanelContainer";
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  state = {
    menuItems
  };

  render() {
    return (
      <Router>
        <div className="App">
          <SideMenu items={this.state.menuItems} />
          <DisplayPanel />
        </div>
      </Router>
    );
  }
}

export default App;
