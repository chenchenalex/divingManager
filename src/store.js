import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./services/sagas";
import reducers from "./reducer";
import { menuItems } from "./data/mockData";
import { writeData } from "./services/firebase";

const sagaMiddleware = createSagaMiddleware();
/* eslint no-underscore-dangle: 0 */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware)
  // other store enhancers if any
);

const defaultState = {
  components: {
    menu: menuItems
  },
  scenes: {
    divingHistory: {
      diveById: {}
    }
  },
  userInfo: {
    isAuthenticated: false
  },
  connectionStatus: {
    isOnline: false,
    isSynchronized: false,
    lastUpdatedServer: undefined,
    lastUpdatedLocal: undefined
  }
};

let prevState = defaultState;

const store = createStore(reducers, defaultState, enhancer);

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
    const {
      scenes,
      userInfo: { uid }
    } = store.getState();
    writeData({
      userId: uid,
      data: {
        scenes,
        lastUpdatedServer: lastUpdatedLocal
      }
    });

    prevState = store.getState();
  }
});

export default store;

export const { dispatch } = store;
