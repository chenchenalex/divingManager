import React, { Component } from "react";
import "./App.css";
import Menu from "../menu/menuContainer";
import DisplayPanel from "../displayPanel/displayPanelContainer";

class App extends Component {
  state = {
    a: 1
  };

  render() {
    return (
      <div className="App">
        <Menu items="this.state.a" />
        <DisplayPanel />
      </div>
    );
  }
}

export default App;
