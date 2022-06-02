import { combineReducers } from "redux";
import filterReducer from "./Filter/reducer"

const rootReducer = combineReducers({filterReducer});

export default rootReducer;
