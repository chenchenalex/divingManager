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
      if (action.payload !== null) {
        const diveByIdData = action.payload.scenes.divingHistory.diveById;

        return {
          ...state,
          ...diveByIdData
        };
      } else {
        return state;
      }

    case ADD_DIVE:
      const newID = v4();
      const newDiveData = { ...action.payload, id: newID };

      return {
        ...state,
        [newID]: newDiveData
      };

    case EDIT_DIVE:
      if (
        typeof action.payload === "undefined" ||
        typeof action.payload.id === "undefined"
      )
        return state;

      return {
        ...state,
        [action.payload.id]: action.payload
      };
    case DELETE_DIVE:
      if (
        typeof action.payload === "undefined" ||
        !Array.isArray(action.payload)
      )
        return state;

      return Object.keys(state).reduce(
        function(result, key) {
          if (action.payload.includes(key)) {
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
