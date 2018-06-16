import { call, put, takeEvery, all } from "redux-saga/effects";
import { getData, writeData } from "src/services/firebase";
import {
  USER_FETCH_DATA_ASYNC,
  USER_FETCH_DATA_SUCCESS
} from "src/actions/actionTypes";

export function* watchUserFetchDataAsync() {
  yield takeEvery(USER_FETCH_DATA_ASYNC, userFetchDataSaga);
}

export function* userFetchDataSaga(action) {
  const data = yield call(getData, action.data.userId, action.data.section);
  yield put({ type: USER_FETCH_DATA_SUCCESS, data });
}

export default function* rootSaga() {
  yield all([watchUserFetchDataAsync()]);
}
