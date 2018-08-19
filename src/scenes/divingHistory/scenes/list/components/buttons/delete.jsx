import React from "react";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import PropTypes from "prop-types";

const DeleteButton = ({ onDelete, state }) => (
  <Button
    variant="fab"
    aria-label="delete"
    onClick={onDelete}
    disabled={state.selected.length === 0}
  >
    <DeleteIcon />
  </Button>
);

DeleteButton.propTypes = {
  onDelete: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired
};

export default DeleteButton;
