import { combineReducers } from "redux";
import divingHistory from "./diveFormReducers";
import menuItems from "./menuReducers";

export default combineReducers({ divingHistory, menuItems });
