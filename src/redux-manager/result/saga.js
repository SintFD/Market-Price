import { takeEvery, put, call, select } from "redux-saga/effects";
import { FIND_MODEL } from "../constants";
// import { getPhonesAction } from "./action";
import { searchProducts } from "../REST";

export default function* watcherCart() {
  yield takeEvery(FIND_MODEL, workerCart);
}

function* workerCart(action) {
  try {
    const data = yield call(searchProducts, action.payload);
    console.log(data,'asdsd')
    // yield put(getPhonesAction(data));
  } catch (err) {
    console.error("ERROR", err);
  }
}
