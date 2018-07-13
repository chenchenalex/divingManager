import { USER_LOGIN_SUCCESS } from "src/actions/actionTypes";

export default function login(state = {}, action) {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true
      };
    default:
      return state;
  }
}
