import React, { Fragment } from "react";
import store from "src/store";
import { deleteActionCreator } from "../../actions";
import { userFetchDataAsync } from "../../../../actions";
import { connect } from "react-redux";

// components
import DiveTable from "./diveTable";
import { DivingContainer } from "../../style";
import AddButton from "../buttons/addNew";
import DeleteButton from "../buttons/delete";
import bgImg from "src/assets/images/dive_bg1.jpg";
import ImageBanner from "src/components/imageBanner";
import TablePagination from "@material-ui/core/TablePagination";

// utils
import { getDives } from "src/data/utils";

const { dispatch } = store;
export class DivingListComponent extends React.Component {
  state = {
    selected: [],
    page: 0,
    rowsPerPage: 5
  };

  componentDidMount() {
    if (
      !this.props.connectionStatus.isSynchronized &&
      this.props.userInfo.isAuthenticated
    ) {
      // To prevent multiple fetching on Mounting
      const { userInfo } = this.props;
      dispatch(userFetchDataAsync(userInfo.uid));
    }
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

    this.setState(() => {
      return {
        selected: []
      };
    });
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  render() {
    const { rowsPerPage, page } = this.state;
    const { connectionStatus } = this.props;

    const tableDataByPage = this.props.divingHistory.slice(
      page * rowsPerPage,
      page * rowsPerPage + rowsPerPage
    );

    const emptyRows =
      rowsPerPage -
      Math.min(
        rowsPerPage,
        this.props.divingHistory.length - page * rowsPerPage
      );

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
            tableData={tableDataByPage}
            isLoadComplete={connectionStatus.isSynchronized}
            onSelect={this.onSelect}
            emptyRows={emptyRows}
            onSelectAll={this.onSelectAll}
          />
        </DivingContainer>

        {tableDataByPage.length > 0 && (
          <TablePagination
            component="div"
            count={this.props.divingHistory.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={this.handleChangePage}
            backIconButtonProps={{
              "aria-label": "Previous Page"
            }}
            nextIconButtonProps={{
              "aria-label": "Next Page"
            }}
            onChangeRowsPerPage={this.handleChangeRowsPerPage}
          />
        )}
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    divingHistory: getDives(state.scenes.divingHistory),
    userInfo: state.userInfo,
    connectionStatus: state.connectionStatus
  };
}

export default connect(mapStateToProps)(DivingListComponent);
