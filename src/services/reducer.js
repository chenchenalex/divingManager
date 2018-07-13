import {
  USER_FETCH_DATA_SUCCESS,
  USER_FETCH_DATA_FAILURE,
  ADD_DIVE,
  EDIT_DIVE,
  DELETE_DIVE
} from "../actions/actionTypes";

const connectionReducer = (state = {}, action) => {
  /* Update timestamp on any changes locally */
  if (
    action.type === ADD_DIVE ||
    action.type === EDIT_DIVE ||
    action.type === DELETE_DIVE
  ) {
    return {
      ...state,
      lastUpdatedLocal: Date.now()
    };
  }

  switch (action.type) {
    case USER_FETCH_DATA_SUCCESS:
      console.log("get data!");
      return {
        isSynchronized: true,
        lastUpdatedServer: action.data.lastUpdated
      };
    case USER_FETCH_DATA_FAILURE:
      return {
        isSynchronized: false,
        lastUpdatedServer: state.lastUpdatedServer
      };
    default:
      return state;
  }
};

export default connectionReducer;
