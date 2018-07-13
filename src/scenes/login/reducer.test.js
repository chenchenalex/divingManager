import loginReducer from "./reducer";
import { USER_LOGIN_SUCCESS } from "src/actions/actionTypes";

describe("loginReducer test", () => {
  it("should set authenticated property to true if user login succeeded", () => {
    const state = {
      test: 1
    };

    const action = {
      type: USER_LOGIN_SUCCESS,
      payload: 2
    };

    const result = loginReducer(state, action);

    expect(result).toEqual({ test: 1, isAuthenticated: true });
  });
});
