import React, { Fragment } from "react";
import store from "src/store";
import { deleteActionCreator, userFetchDataAsync } from "../../actions";
import { connect } from "react-redux";

// components
import DiveTable from "./diveTable";
import { DivingContainer } from "../../style";
import AddButton from "../buttons/addNew";
import DeleteButton from "../buttons/delete";
import bgImg from "src/assets/images/dive_bg1.jpg";
import ImageBanner from "src/components/imageBanner";

// utils
import { getDives } from "src/data/utils";

const { dispatch } = store;
export class DivingListComponent extends React.Component {
  state = {
    selected: []
  };

  componentDidMount() {
    dispatch(userFetchDataAsync("alex"));
  }

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
    const id = event.target.value;

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
    dispatch(deleteActionCreator(this.state.selected));

    this.setState(state => {
      return {
        selected: []
      };
    });
  };

  render() {
    return (
      <Fragment>
        <ImageBanner
          imgSrc={bgImg}
          imgAlt="diver hero image"
          title="DIVE HISTORY"
        />
        <DivingContainer className="diving-list">
          <AddButton />
          <DeleteButton onDelete={this.onDelete} state={this.state} />
          <DiveTable
            state={this.state}
            tableData={this.props.divingHistory || []}
            onSelect={this.onSelect}
            onSelectAll={this.onSelectAll}
          />
        </DivingContainer>
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    divingHistory: getDives(state.scenes.divingHistory)
  };
}

export default connect(mapStateToProps)(DivingListComponent);
