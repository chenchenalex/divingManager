import React from "react";
import { Link } from "react-router-dom";
import Button from "material-ui/Button";

const AddNewDiving = () => (
  <Link to="/list/add">
    <Button variant="raised" color="primary">
      New
    </Button>
  </Link>
);

export default AddNewDiving;
