import { combineReducers } from "redux";
import scenes from "./scenes/reducer";
import components from "./components/reducer";
import loginState from "./scenes/login/reducer";
import connectionStatus from "./services/reducer";

export default combineReducers({
  scenes,
  components,
  loginState,
  connectionStatus
});
