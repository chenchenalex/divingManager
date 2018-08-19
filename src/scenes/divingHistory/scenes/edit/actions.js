import { ADD_DIVE, EDIT_DIVE } from "src/actions/actionTypes";

export const addNewDive = formData => ({
  type: ADD_DIVE,
  payload: formData
});

export const editDive = formData => ({
  type: EDIT_DIVE,
  payload: formData
});
