import React from "react";
import { connect } from "react-redux";
import DiveTable from "./diveTable";
import DivingListContainer from "./style";
import AddButton from "./addNew";

class divingListComponent extends React.Component {
  addNewDive = ({ name, location, date }) => {
    this.setState((state, prop) => {
      return [...state, { name, location, date }];
    });
  };

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
    divingHistory: state.divingHistory
  };
}

export default connect(mapStateToProps)(divingListComponent);
