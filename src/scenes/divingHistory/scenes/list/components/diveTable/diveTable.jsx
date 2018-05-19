import React from "react";
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "material-ui/Table";
import Checkbox from "material-ui/Checkbox";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const DivingTable = ({ state, tableData, onSelect, onSelectAll }) => {
  const checkSelected = ({ id }) => {
    return state.selected.includes(id);
  };

  return (
    <Table className="testing">
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
          <TableCell>Name</TableCell>
          <TableCell>Location</TableCell>
          <TableCell>Date</TableCell>
        </TableRow>
      </TableHead>
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
              <TableCell>{dive.location}</TableCell>
              <TableCell>{dive.date}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

DivingTable.proptypes = {
  state: PropTypes.object.isRequired,
  tableData: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
  onSelectAll: PropTypes.func.isRequired
};

export default DivingTable;
