import { combineReducers } from "redux";
import {
  ADD_DIVE,
  EDIT_DIVE,
  DELETE_DIVE,
  USER_FETCH_DATA_SUCCESS
} from "src/actions/actionTypes";
import { v4 } from "uuid";

export function diveById(state = {}, action) {
  switch (action.type) {
    case USER_FETCH_DATA_SUCCESS:
      return {
        ...state,
        ...action.data.diveById
      };

    case ADD_DIVE:
      const newID = v4();
      const newDiveData = { ...action.data, id: newID };

      return {
        ...state,
        [newID]: newDiveData
      };

    case EDIT_DIVE:
      if (
        typeof action.data === "undefined" ||
        typeof action.data.id === "undefined"
      )
        return state;

      return {
        ...state,
        [action.data.id]: action.data
      };
    case DELETE_DIVE:
      if (typeof action.data === "undefined" || !Array.isArray(action.data))
        return state;

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
