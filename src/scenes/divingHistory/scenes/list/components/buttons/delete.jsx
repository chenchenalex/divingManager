import React from "react";
import Button from "material-ui/Button";

const DeleteButton = ({ onDelete }) => (
  <Button variant="raised" onClick={onDelete}>
    Delete
  </Button>
);

export default DeleteButton;
