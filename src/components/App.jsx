import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Provider } from "react-redux";

import appStore from "./store";
import Main from "./main";

class App extends Component {
  render() {
    return (
      <Provider store={appStore}>
        <Router>
          <MuiThemeProvider>
            <Main />
          </MuiThemeProvider>
        </Router>
      </Provider>
    );
  }
}

export default App;
