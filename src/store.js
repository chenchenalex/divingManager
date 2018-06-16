import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./services/sagas";
import reducers from "./reducer";
import { menuItems } from "./data/mockData";
import { writeData } from "./services/firebase";

const sagaMiddleware = createSagaMiddleware();

const defaultState = {
  components: {
    menu: menuItems
  },
  scenes: {
    divingHistory: {
      diveById: {}
    }
  }
};

const store = createStore(
  reducers,
  defaultState,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

store.subscribe(() => {
  const storeState = store.getState();

  if (storeState !== defaultState) {
    writeData({
      userId: "alex",
      data: store.getState()
    });
  }
});

export default store;
