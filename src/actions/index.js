import * as actionTypes from "./actionTypes";

export const loginSuccess = userInfo => {
  return {
    type: actionTypes.USER_LOGIN_SUCCESS,
    payload: userInfo
  };
};

export const userLogOut = () => {
  return {
    type: actionTypes.USER_LOGOUT,
    payload: {}
  };
};
