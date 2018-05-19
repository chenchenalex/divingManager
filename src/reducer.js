import { combineReducers } from "redux";
import scenes from "./scenes/reducer";
import components from "./components/reducer";

export default combineReducers({ scenes, components });
