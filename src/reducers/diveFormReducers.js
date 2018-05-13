import { ADD_DIVE, EDIT_DIVE } from "../actions/actionTypes";

export default function formReducers(state = [], action) {
  switch (action.type) {
    case ADD_DIVE:
      const newDiveData = { ...action.data, id: state.length };
      return [...state, newDiveData];
    case EDIT_DIVE:
      return [...state.filter(dive => dive.id !== action.data.id), action.data];
    default:
      return state;
  }
}
