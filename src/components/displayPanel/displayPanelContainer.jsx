import React from "react";
import { Route } from "react-router-dom";
import Panel from "./displayPanelContainer.style";

import dashboard from "../dashBoard/dashBoard.jsx";
import divingList from "../divingList/divingList.jsx";

const DisplayPanel = () => (
  <Panel>
    <Route exact path="/" render={() => <h1>Welcome</h1>} />
    <Route path="/dashboard" component={dashboard} />
    <Route path="/list" component={divingList} />
  </Panel>
);

export default DisplayPanel;
