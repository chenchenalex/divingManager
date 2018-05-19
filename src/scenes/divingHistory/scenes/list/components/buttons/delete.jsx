import React from "react";
import Button from "material-ui/Button";

const DeleteButton = ({ onDelete, state }) => (
  <Button
    variant="raised"
    onClick={onDelete}
    disabled={state.selected.length === 0}
  >
    Delete
  </Button>
);

export default DeleteButton;
