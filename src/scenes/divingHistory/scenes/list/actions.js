import { DELETE_DIVE } from "src/actions/actionTypes";

const deleteActionCreator = (itemsToBeDeleted = []) => ({
  type: DELETE_DIVE,
  payload: itemsToBeDeleted
});

export default deleteActionCreator;
