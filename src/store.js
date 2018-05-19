import { createStore } from "redux";
import reducers from "./reducer";
import { menuItems, divingHistory } from "./data/mockData";

const defaultState = {
  components: {
    menu: menuItems
  },
  scenes: {
    divingHistory
  }
};

const store = createStore(reducers, defaultState);

export default store;
