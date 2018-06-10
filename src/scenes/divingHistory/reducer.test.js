import { diveById as DivingHistoryReducer } from "./reducer";
import { ADD_DIVE, EDIT_DIVE, DELETE_DIVE } from "src/actions/actionTypes";
import { divingHistory } from "src/data/mockData";

const prevState = divingHistory.diveById;

describe("diving history page reducers", () => {
  it("ADD DIVE: should add a new dive with a new ID", () => {
    const action = {
      type: ADD_DIVE,
      data: {
        name: "new diving spot",
        country: "philipines",
        date: "20181112"
      }
    };

    const state = {
      abc: {
        id: "abc",
        name: "old diving spot 1",
        country: "china",
        date: "20181012"
      }
    };

    const result = DivingHistoryReducer(state, action);
    const newId = Object.keys(result).find(id => id !== "abc");

    expect(newId).toBeDefined();

    const expectedNewDive = { ...action.data, id: newId };

    expect(result[newId]).toEqual(expectedNewDive);
  });

  it("EDIT DIVE: should update an existing dive based on given ID", () => {
    const action1 = {
      type: EDIT_DIVE,
      data: {
        name: "new diving spot",
        country: "philipines",
        date: "20181112",
        id: "test1"
      }
    };

    // valid ID provided, should update state
    const result1 = DivingHistoryReducer(prevState, action1);
    const expected1 = { ...prevState, test1: action1.data };

    expect(result1).toEqual(expected1);
  });

  it("EDIT DIVE: should return original state if no ID provided", () => {
    const action2 = {
      type: EDIT_DIVE,
      data: {}
    };

    // If No Id provided or invalid data, no change to state
    const expected2 = prevState;
    const result2 = DivingHistoryReducer(prevState, action2);

    expect(result2).toEqual(expected2);
  });

  it("DELETE DIVE: should return original state if no data given", () => {
    const action = {
      type: DELETE_DIVE,
      data: []
    };

    const result = DivingHistoryReducer(prevState, action);

    expect(result).toEqual(prevState);
  });

  it("DELETE DIVE: should delete selected dive based on id", () => {
    const action1 = {
      type: DELETE_DIVE,
      data: ["test1"]
    };

    const action2 = {
      type: DELETE_DIVE,
      data: ["test1", "test2", "test3", "test4"]
    };

    const result = DivingHistoryReducer(prevState, action1);
    const { test1, ...rest } = prevState;
    expect(result).toEqual(rest);

    const removeAllResult = DivingHistoryReducer(prevState, action2);

    expect(removeAllResult).toEqual({});
  });
});
