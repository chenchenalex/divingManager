import {
  USER_FETCH_DATA_SUCCESS,
  USER_FETCH_DATA_FAILURE,
  ADD_DIVE,
  EDIT_DIVE,
  DELETE_DIVE,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT_SUCCESS
} from "../actions/actionTypes";

export const connectionReducer = (state = {}, action) => {
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
      if (action.payload !== null) {
        return {
          isSynchronized: true,
          lastUpdatedServer: action.payload.lastUpdatedServer
        };
      } else {
        return {
          isSynchronized: true,
          lastUpdatedServer: Date.now()
        };
      }

    case USER_FETCH_DATA_FAILURE:
      return {
        isSynchronized: false,
        lastUpdatedServer: state.lastUpdatedServer
      };
    default:
      return state;
  }
};

export function loginReducer(state = {}, action) {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      const { email, name, photoUrl, emailVerified, uid } = action.payload;

      return {
        ...state,
        isAuthenticated: true,
        name,
        email,
        photoUrl,
        emailVerified,
        uid
      };
    case USER_LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        name: null,
        email: null,
        photoUrl: null,
        emailVerified: null,
        uid: null
      };
    default:
      return state;
  }
}
