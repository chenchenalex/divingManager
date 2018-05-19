import { ADD_DIVE, EDIT_DIVE } from "src/actions/actionTypes";

export const addNewDive = formData => {
  return {
    type: ADD_DIVE,
    data: formData
  };
};

export const editDive = formData => {
  return {
    type: EDIT_DIVE,
    data: formData
  };
};