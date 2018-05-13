import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";
import { Provider } from "react-redux";

import appStore from "./store";
import Main from "./main";

const theme = createMuiTheme();
class App extends Component {
  render() {
    return (
      <Provider store={appStore}>
        <Router>
          <MuiThemeProvider theme={theme}>
            <Main />
          </MuiThemeProvider>
        </Router>
      </Provider>
    );
  }
}

export default App;
