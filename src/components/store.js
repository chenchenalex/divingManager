import { createStore } from "redux";
import reducers from "../reducers";
import { menuItems, divingHistory } from "../data/mockData";

const defaultState = {
  divingHistory,
  menuItems
};

const store = createStore(reducers, defaultState);

export default store;
