import React from "react";
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "material-ui/Table";

const DivingTable = ({ savedData }) => {
  return (
    <Table className="testing">
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Location</TableCell>
          <TableCell>Date</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {savedData.map(dive => {
          return (
            <TableRow key={dive.id}>
              <TableCell>{dive.name}</TableCell>
              <TableCell>{dive.location}</TableCell>
              <TableCell>{dive.date}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default DivingTable;
