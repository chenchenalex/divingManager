import React from "react";
import Container from "./style";
import SideMenu from "../components/menu";
import DisplayPanel from "../components/displayPanel";

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
    divingHistory: state.scenes.divingHistory,
    menuItems: state.components.menu
  };
}

export default withRouter(connect(mapStateToProps)(Main));
