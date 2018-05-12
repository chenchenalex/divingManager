import React from "react";
import DivingTable from "./divingTable";
import DivingListContainer from "./style";
import { divingHistory } from "../../data/mockData";
import AddButton from "./addNew";

class divingListComponent extends React.Component {
  state = [...divingHistory];

  addNewDive = ({ name, location, date }) => {
    this.setState((state, prop) => {
      return [...state, { name, location, date }];
    });
  };

  render() {
    return (
      <DivingListContainer className="diving-list">
        <AddButton />
        <DivingTable savedData={this.state} />
      </DivingListContainer>
    );
  }
}

export default divingListComponent;
