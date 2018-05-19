import { combineReducers } from "redux";
import { ADD_DIVE, EDIT_DIVE, DELETE_DIVE } from "src/actions/actionTypes";
import { genUID } from "src/data/utils";

export function diveById(state = {}, action) {
  switch (action.type) {
    case ADD_DIVE:
      const newID = genUID();
      const newDiveData = { ...action.data, id: newID };

      return {
        ...state,
        [newID]: newDiveData
      };
    case EDIT_DIVE:
      return {
        ...state,
        [action.data.id]: action.data
      };
    case DELETE_DIVE:
      return Object.keys(state).reduce(
        function(result, key) {
          if (action.data.includes(key)) {
            delete result[key];
          }
          return result;
        },
        { ...state }
      );
    default:
      return state;
  }
}

export default combineReducers({ diveById });
