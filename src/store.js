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
  },
  loginState: {
    isAuthenticated: false
  },
  connectionStatus: {
    isSynchronized: false,
    lastUpdatedServer: undefined,
    lastUpdatedLocal: undefined
  }
};

let prevState = defaultState;

const store = createStore(
  reducers,
  defaultState,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

store.subscribe(() => {
  const storeState = store.getState();
  const {
    isSynchronized,
    lastUpdatedServer,
    lastUpdatedLocal
  } = storeState.connectionStatus;

  if (
    storeState !== prevState &&
    isSynchronized &&
    lastUpdatedLocal > lastUpdatedServer
  ) {
    const { scenes } = store.getState();
    writeData({
      userId: "alex",
      data: {
        scenes: scenes,
        lastUpdatedServer: lastUpdatedLocal
      }
    });

    prevState = store.getState();
  }
});

export default store;

export const { dispatch } = store;
