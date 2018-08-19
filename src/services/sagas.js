import { call, put, takeEvery, all } from "redux-saga/effects";
import { getData, logout } from "src/services/firebase";
import {
  USER_FETCH_DATA_ASYNC,
  USER_FETCH_DATA_SUCCESS,
  USER_FETCH_DATA_FAILURE,
  USER_LOGOUT,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_FAILURE
} from "src/actions/actionTypes";

export function* userFetchDataSaga(action) {
  try {
    const payload = yield call(
      getData,
      action.payload.userId,
      action.payload.section
    );

    yield put({ type: USER_FETCH_DATA_SUCCESS, payload });
  } catch (e) {
    yield put({ type: USER_FETCH_DATA_FAILURE, payload: e });
  }
}

export function* watchUserFetchDataAsync() {
  yield takeEvery(USER_FETCH_DATA_ASYNC, userFetchDataSaga);
}

export function* userLogoutSaga() {
  try {
    yield call(logout);
    yield put({ type: USER_LOGOUT_SUCCESS, payload: {} });
  } catch (e) {
    // logout failure
    yield put({ type: USER_LOGOUT_FAILURE, payload: e });
  }
}

export function* watchUserLogoutAsync() {
  yield takeEvery(USER_LOGOUT, userLogoutSaga);
}

export default function* rootSaga() {
  yield all([watchUserFetchDataAsync(), watchUserLogoutAsync()]);
}
