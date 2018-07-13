import { USER_LOGIN, USER_LOGIN_SUCCESS } from "src/actions/actionTypes";

export const loginAction = (username, password) => {
  return {
    type: USER_LOGIN,
    payload: { username, password }
  };
};

export const loginSuccess = () => {
  return {
    type: USER_LOGIN_SUCCESS,
    payload: {}
  };
};
