import { DELETE_DIVE } from "src/actions/actionTypes";

export const deleteActionCreator = (itemsToBeDeleted = []) => {
  return {
    type: DELETE_DIVE,
    payload: itemsToBeDeleted
  };
};
