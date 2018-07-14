import { ADD_DIVE, EDIT_DIVE } from "src/actions/actionTypes";

export const addNewDive = formData => {
  return {
    type: ADD_DIVE,
    payload: formData
  };
};

export const editDive = formData => {
  return {
    type: EDIT_DIVE,
    payload: formData
  };
};
