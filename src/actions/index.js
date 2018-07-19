import * as actionTypes from "./actionTypes";

export const loginSuccess = userInfo => {
  return {
    type: actionTypes.USER_LOGIN_SUCCESS,
    payload: userInfo
  };
};

export const loginFailure = () => {
  return {
    type: actionTypes.USER_LOGIN_FAILURE,
    payload: {}
  };
};

export const userLogOut = () => {
  return {
    type: actionTypes.USER_LOGOUT,
    payload: {}
  };
};
