import { call } from "redux-saga/effects";
import { getData } from "src/services/firebase";
import userFetchDataAsync from "src/scenes/divingHistory/actions";
import { userFetchDataSaga } from "./sagas";

describe("sagas unit tests", () => {
  it("test userFetchDataAsync saga", () => {
    const action = userFetchDataAsync("alex");

    const gen = userFetchDataSaga(action);

    expect(gen.next().value).toEqual(call(getData, "alex", ""));
  });
});
