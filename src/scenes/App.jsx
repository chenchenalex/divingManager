import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import appStore from "../store";
import Main from "./main";

class App extends Component {
  render() {
    return (
      <Provider store={appStore}>
        <Router>
          <Main />
        </Router>
      </Provider>
    );
  }
}

export default App;
