import { userFetchDataSaga } from "./sagas";
import { call } from "redux-saga/effects";
import { getData } from "src/services/firebase";
import { userFetchDataAsync } from "src/scenes/divingHistory/scenes/list/actions";

describe("sagas unit tests", () => {
  it("test userFetchDataAsync saga", () => {
    const action = userFetchDataAsync("alex");

    const gen = userFetchDataSaga(action);

    expect(gen.next().value).toEqual(
      call(getData, "alex", "scenes/divingHistory")
    );
  });
});
