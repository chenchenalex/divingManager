import { loginReducer, connectionReducer } from "./reducer";
import {
  USER_LOGIN_SUCCESS,
  USER_FETCH_DATA_SUCCESS,
  USER_FETCH_DATA_FAILURE,
  USER_LOGOUT_SUCCESS
} from "src/actions/actionTypes";

describe("loginReducer test", () => {
  it("should set authenticated property to true if user login succeeded", () => {
    const state = {
      isAuthenticated: false
    };

    const action = {
      type: USER_LOGIN_SUCCESS,
      payload: {
        name: "alex",
        email: "test@test.com",
        uid: "123123123",
        photoUrl: "https://google.com",
        emailVerified: true
      }
    };

    const result = loginReducer(state, action);

    expect(result).toEqual({
      name: "alex",
      email: "test@test.com",
      uid: "123123123",
      photoUrl: "https://google.com",
      emailVerified: true,
      isAuthenticated: true
    });
  });

  it("should update state when user log out", () => {
    const state = {
      isAuthenticated: true,
      name: "alex",
      email: "test@test.com",
      uid: "123123123",
      photoUrl: "https://google.com",
      emailVerified: true
    };

    const action = {
      type: USER_LOGOUT_SUCCESS,
      payload: {}
    };

    const result = loginReducer(state, action);

    expect(result).toEqual({
      isAuthenticated: false,
      name: null,
      email: null,
      uid: null,
      photoUrl: null,
      emailVerified: false
    });
  });
});

describe("connection reducer test", () => {
  it("should update server update timestamp and synchonized flag if login success", () => {
    const state = {
      isOnline: false,
      isSynchronized: false
    };
    const action = {
      type: USER_FETCH_DATA_SUCCESS,
      payload: {
        lastUpdatedServer: 123123123
      }
    };
    const result = connectionReducer(state, action);

    expect(result).toEqual({
      isOnline: true,
      isSynchronized: true,
      lastUpdatedServer: 123123123
    });
  });

  it("should use the last updated timestamp if login failed", () => {
    const state = {
      isOnline: true,
      isSynchronized: true,
      lastUpdatedServer: 234234234
    };
    const action = {
      type: USER_FETCH_DATA_FAILURE,
      payload: {}
    };
    const result = connectionReducer(state, action);

    expect(result).toEqual({
      isOnline: false,
      isSynchronized: false,
      lastUpdatedServer: 234234234
    });
  });
});
