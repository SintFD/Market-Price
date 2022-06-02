import { all, call } from "redux-saga/effects";
import filterSaga from "./Filter/saga"


function* rootSaga() {
  yield all([call(filterSaga)]);
}

export default rootSaga;
