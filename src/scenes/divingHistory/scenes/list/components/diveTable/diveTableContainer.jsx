import React from "react";
import { connect } from "react-redux";
import DiveTable from "./diveTable";
import DivingListContainer from "../../style";
import AddButton from "../buttons/addNew";
import { getDives } from "src/data/utils";

class divingListComponent extends React.Component {
  render() {
    return (
      <DivingListContainer className="diving-list">
        <AddButton />
        <DiveTable savedData={this.props.divingHistory} />
      </DivingListContainer>
    );
  }
}

function mapStateToProps(state) {
  return {
    divingHistory: getDives(state.scenes.divingHistory)
  };
}

export default connect(mapStateToProps)(divingListComponent);
