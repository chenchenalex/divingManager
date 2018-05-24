import { diveById as DivingHistoryReducer } from "./reducer";
import { ADD_DIVE, EDIT_DIVE, DELETE_DIVE } from "src/actions/actionTypes";

it("ADD DIVE: should add a new dive with a new ID", function() {
  const action = {
    type: ADD_DIVE,
    data: {
      name: "new diving spot",
      location: "philipines",
      date: "20181112"
    }
  };

  const prevState = {
    abc: {
      id: "abc",
      name: "old diving spot 1",
      location: "china",
      date: "20181012"
    }
  };

  const result = DivingHistoryReducer(prevState, action);
  const newId = Object.keys(result).find(id => id !== "abc");

  expect(newId).toBeDefined();

  const expectedNewDive = { ...action.data, id: newId };

  expect(result[newId]).toEqual(expectedNewDive);
});

it("EDIT DIVE: should update an existing dive based on given ID", function() {
  const action1 = {
    type: EDIT_DIVE,
    data: {
      name: "new diving spot",
      location: "philipines",
      date: "20181112",
      id: "abc"
    }
  };

  const action2 = {
    type: EDIT_DIVE,
    data: {}
  };

  const prevState = {
    abc: {
      id: "abc",
      name: "old diving spot 1",
      location: "china",
      date: "20181012"
    },
    def: {
      id: "def",
      name: "old diving spot 2",
      location: "US",
      date: "20181002"
    }
  };

  // valid ID provided, should update state
  const result1 = DivingHistoryReducer(prevState, action1);
  const expected1 = { ...prevState, abc: action1.data };

  expect(result1).toEqual(expected1);

  // If No Id provided or invalid data, no change to state
  const expected2 = prevState;
  const result2 = DivingHistoryReducer(prevState, action2);

  expect(result2).toEqual(expected2);
});
