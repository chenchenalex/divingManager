import menuReducer from "./reducer";

it("should render the menu state", function() {
  const action = {};
  expect(menuReducer([], action)).toEqual([]);
});
