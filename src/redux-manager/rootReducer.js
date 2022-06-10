import { combineReducers } from "redux";
import resultReduser from "./result/reduser";
import filterReducer from "./Filter/reducer";

const rootReducer = combineReducers({ filterReducer, resultReduser });

export default rootReducer;
