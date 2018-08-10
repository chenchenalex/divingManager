import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

const AddNewDiving = () => (
  <Link to="/list/add">
    <Button variant="fab" color="primary" aria-label="add">
      <AddIcon />
    </Button>
  </Link>
);

export default AddNewDiving;
