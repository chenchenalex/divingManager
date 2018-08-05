import { LoginPage } from "./login";
import React from "react";
import renderer from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";
import { shallow } from "enzyme";
import { userLogin } from "src/services/firebase";
import { loginSuccess } from "src/actions";

// Jest mock all implementation of firease
jest.mock("src/services/firebase");
jest.mock("src/actions");

beforeEach(() => {
  userLogin.mockClear();
  loginSuccess.mockClear();
});

describe("login page unit tests", () => {
  const userInfo = { isAuthenticated: false };
  const location = {
    from: "/jest"
  };
  const component = shallow(
    <LoginPage userInfo={userInfo} location={location} />
  );

  it("onSubmit(): should submit username and password", async () => {
    const instance = component.instance();

    instance.state = {
      username: "alex",
      password: "123"
    };

    userLogin.mockImplementation(() => {
      return Promise.resolve();
    });

    await instance.onFormSubmit({ preventDefault: jest.fn() });

    expect(userLogin).toHaveBeenCalledWith({
      username: "alex",
      password: "123"
    });
  });

  it("Snapshot: Login page", () => {
    const wrapper = renderer.create(
      <MemoryRouter>
        <LoginPage userInfo={userInfo} location={location} />
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
