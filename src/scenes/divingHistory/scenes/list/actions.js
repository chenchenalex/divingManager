import { DELETE_DIVE } from "src/actions/actionTypes";

const deleteActionCreator = (itemsToBeDeleted = []) => {
  return {
    type: DELETE_DIVE,
    data: itemsToBeDeleted
  };
};

export { deleteActionCreator };
