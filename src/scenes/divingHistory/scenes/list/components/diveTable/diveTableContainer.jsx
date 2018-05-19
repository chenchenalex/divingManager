import React from "react";
import store from "src/store";
import { deleteActionCreator } from "../../actions";
import { connect } from "react-redux";

// components
import DiveTable from "./diveTable";
import DivingListContainer from "../../style";
import AddButton from "../buttons/addNew";
import DeleteButton from "../buttons/delete";

// utils
import { getDives } from "src/data/utils";

class divingListComponent extends React.Component {
  state = {
    selected: []
  };

  onSelectAll = event => {
    const isChecked = event.target.checked;

    if (isChecked) {
      this.setState(state => ({
        selected: this.props.divingHistory.map(dive => dive.id)
      }));
    } else {
      this.setState(state => ({
        selected: []
      }));
    }
  };

  onSelect = event => {
    const isChecked = event.target.checked;
    const id = parseInt(event.target.value, 10);

    if (isChecked) {
      this.setState(state => {
        return {
          selected: [...state.selected, id]
        };
      });
    } else {
      this.setState(state => {
        return {
          selected: [...state.selected.filter(selectedId => selectedId !== id)]
        };
      });
    }
  };

  onDelete = () => {
    store.dispatch(deleteActionCreator(this.state.selected));
  };

  render() {
    return (
      <DivingListContainer className="diving-list">
        <AddButton />
        <DeleteButton onDelete={this.onDelete} />
        <DiveTable
          state={this.state}
          tableData={this.props.divingHistory}
          onSelect={this.onSelect}
          onSelectAll={this.onSelectAll}
        />
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
