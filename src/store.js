import { createStore } from "redux";
import reducers from "./reducer";
import { menuItems, divingHistory } from "./data/mockData";
import { getDataFromStorage, setDataToStorage } from "./services/localStorage";

let savedDivingHistory;
const hasLocalStorage = typeof window.localStorage !== "undefined";

if (hasLocalStorage) {
  savedDivingHistory = getDataFromStorage()
    ? getDataFromStorage().divingHistory
    : null;
}

const defaultState = {
  components: {
    menu: menuItems
  },
  scenes: {
    divingHistory: savedDivingHistory || divingHistory
  }
};

const store = createStore(reducers, defaultState);

store.subscribe(() => {
  if (hasLocalStorage) {
    setDataToStorage({
      divingHistory: store.getState().scenes.divingHistory
    });
  }
});

export default store;
