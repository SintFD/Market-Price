import { all, call } from "redux-saga/effects";
import filterSaga from "./Filter/saga"
import resultSaga from "./result/saga"


function* rootSaga() {
  yield all([call(filterSaga),call(resultSaga)]);
}

export default rootSaga;
