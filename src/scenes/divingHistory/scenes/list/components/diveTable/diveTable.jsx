import React from "react";
import { TableBody, TableCell, TableHead, TableRow } from "material-ui/Table";
import Checkbox from "material-ui/Checkbox";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { DiveTable } from "../../style";
import { tableColumnData } from "src/data/mockData";

const loaderStyle = {
  fontSize: "24px",
  textAlign: "center"
};

const DivingTable = ({
  state,
  tableData,
  onSelect,
  onSelectAll,
  emptyRows
}) => {
  const checkSelected = ({ id }) => {
    return state.selected.includes(id);
  };

  return (
    <DiveTable>
      <TableHead>
        <TableRow>
          <TableCell>
            <Checkbox
              onChange={onSelectAll}
              indeterminate={
                state.selected.length > 0 &&
                state.selected.length < tableData.length
              }
              checked={
                state.selected.length > 0 &&
                state.selected.length === tableData.length
              }
            />
          </TableCell>
          {tableColumnData.map(column => {
            return <TableCell key={column.id}>{column.label}</TableCell>;
          })}
        </TableRow>
      </TableHead>
      {tableData.length > 0 ? (
        <TableBody>
          {tableData.map(dive => {
            const isSelected = checkSelected(dive);
            return (
              <TableRow
                key={dive.id}
                role="checkbox"
                aria-checked={isSelected}
                tabIndex={-1}
                selected={isSelected}
              >
                <TableCell>
                  <Checkbox
                    onChange={onSelect}
                    value={dive.id}
                    checked={isSelected}
                  />
                </TableCell>
                <TableCell>
                  <Link to={`/list/edit/${dive.id}`}>{dive.name}</Link>
                </TableCell>
                <TableCell>{dive.country}</TableCell>
                <TableCell>{dive.date}</TableCell>
              </TableRow>
            );
          })}
          {emptyRows > 0 && (
            <TableRow style={{ height: 57 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
      ) : (
        <TableBody>
          <TableRow style={{ height: 57 * 5 }}>
            <TableCell colSpan={6} style={loaderStyle}>
              Loading ...
            </TableCell>
          </TableRow>
        </TableBody>
      )}
    </DiveTable>
  );
};

DivingTable.proptypes = {
  state: PropTypes.object.isRequired,
  tableData: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
  onSelectAll: PropTypes.func.isRequired,
  emptyRows: PropTypes.number.isRequired
};

export default DivingTable;
