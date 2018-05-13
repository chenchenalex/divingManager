import React from "react";
import Container from "./style";
import SideMenu from "./menu";
import DisplayPanel from "./displayPanel";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

function Main({ divingHistory, menuItems }) {
  return (
    <Container className="App">
      <SideMenu items={menuItems} />
      <DisplayPanel />
    </Container>
  );
}

function mapStateToProps(state) {
  return {
    divingHistory: state.divingHistory,
    menuItems: state.menuItems
  };
}

export default withRouter(connect(mapStateToProps)(Main));
