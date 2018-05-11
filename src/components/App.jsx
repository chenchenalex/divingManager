import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import { menuItems } from "../data/mockData";
import Container from "./style";

import SideMenu from "./menu";
import DisplayPanel from "./displayPanel";

class App extends Component {
  state = {
    menuItems
  };

  render() {
    return (
      <Router>
        <MuiThemeProvider>
          <Container className="App">
            <SideMenu items={this.state.menuItems} />
            <DisplayPanel />
          </Container>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
