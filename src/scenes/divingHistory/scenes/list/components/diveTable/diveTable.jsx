import React from "react";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Checkbox from "@material-ui/core/Checkbox";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { tableColumnData } from "src/data/mockData";
import { DiveTable } from "../../style";

const loaderStyle = {
  fontSize: "24px",
  textAlign: "center",
  color: "var(--DM-grey-400)"
};

const DivingTable = ({
  state,
  tableData,
  onSelect,
  isLoadComplete,
  onSelectAll,
  emptyRows
}) => {
  const checkSelected = ({ id }) => state.selected.includes(id);

  const placeHolderText = isLoadComplete ? "Empty" : "Fetching data...";
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
          {tableColumnData.map(column => (
            <TableCell key={column.id}>{column.label}</TableCell>
          ))}
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
              {placeHolderText}
            </TableCell>
          </TableRow>
        </TableBody>
      )}
    </DiveTable>
  );
};

DivingTable.propTypes = {
  state: PropTypes.object.isRequired,
  tableData: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
  isLoadComplete: PropTypes.bool.isRequired,
  onSelectAll: PropTypes.func.isRequired,
  emptyRows: PropTypes.number
};

DivingTable.defaultProps = {
  emptyRows: 0
};

export default DivingTable;
