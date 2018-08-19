import {
  USER_FETCH_DATA_SUCCESS,
  USER_FETCH_DATA_FAILURE,
  ADD_DIVE,
  EDIT_DIVE,
  DELETE_DIVE,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGOUT_SUCCESS,
  UPDATE_PROFILE_SUCCESS
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
          ...state,
          isSynchronized: true,
          isOnline: true,
          lastUpdatedServer: action.payload.lastUpdatedServer
        };
      }
      return {
        ...state,
        isSynchronized: true,
        isOnline: true,
        lastUpdatedServer: Date.now()
      };

    case USER_FETCH_DATA_FAILURE:
      return {
        ...state,
        isSynchronized: false,
        isOnline: false,
        lastUpdatedServer: state.lastUpdatedServer
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        isOnline: true
      };
    case USER_LOGIN_FAILURE:
      return {
        ...state,
        isOnline: true
      };
    case USER_LOGOUT_SUCCESS:
      return {
        ...state,
        isSynchronized: false
      };
    default:
      return state;
  }
};

export function loginReducer(state = {}, action) {
  switch (action.type) {
    case USER_LOGIN_SUCCESS: {
      const {
        email,
        displayName,
        photoUrl,
        emailVerified,
        uid
      } = action.payload;

      return {
        ...state,
        isAuthenticated: true,
        displayName,
        email,
        photoUrl,
        emailVerified,
        uid
      };
    }

    case USER_LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        displayName: null,
        email: null,
        photoUrl: null,
        emailVerified: false,
        uid: null
      };
    case UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}
