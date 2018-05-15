import { ADD_DIVE, EDIT_DIVE } from "../actions/actionTypes";

export default function formReducers(state = {}, action) {
  switch (action.type) {
    case ADD_DIVE:
      const { diveById } = state;
      const newID = Object.keys(diveById).length;
      const newDiveData = { ...action.data, id: newID };

      return {
        ...state,
        diveById: {
          ...diveById,
          [newID]: newDiveData
        }
      };
    case EDIT_DIVE:
      return {
        ...state,
        diveById: {
          ...state.diveById,
          [action.data.id]: action.data
        }
      };
    default:
      return state;
  }
}
