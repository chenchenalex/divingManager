import * as actionTypes from "./actionTypes";

export const loginSuccess = userInfo => ({
  type: actionTypes.USER_LOGIN_SUCCESS,
  payload: userInfo
});

export const updateProfileSuccess = userInfo => ({
  type: actionTypes.UPDATE_PROFILE_SUCCESS,
  payload: userInfo
});

export const loginFailure = () => ({
  type: actionTypes.USER_LOGIN_FAILURE,
  payload: {}
});

export const userLogOut = () => ({
  type: actionTypes.USER_LOGOUT,
  payload: {}
});
