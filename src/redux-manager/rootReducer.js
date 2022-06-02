import { combineReducers } from "redux";
import modelReduser from "./result/reduser";
import filterReducer from "./Filter/reducer";

const rootReducer = combineReducers({ filterReducer, modelReduser });

export default rootReducer;
