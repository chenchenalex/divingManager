import { combineReducers } from "redux";
import scenes from "./scenes/reducer";
import components from "./components/reducer";
import { connectionReducer, loginReducer } from "./services/reducer";

export default combineReducers({
  scenes,
  components,
  userInfo: loginReducer,
  connectionStatus: connectionReducer
});
