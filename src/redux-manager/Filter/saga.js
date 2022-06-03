import { takeEvery, put, call, select } from "redux-saga/effects";
import { SEND_FILTER_VALUE } from "../constants";
import { getPhonesAction } from "./action";
import { ProductsInfo } from "../REST";

export default function* watcherCart() {
  yield takeEvery(SEND_FILTER_VALUE, workerCart);
}

function* workerCart(action) {
  try {
    const data = yield call(ProductsInfo, action.payload);
    console.log(data)
    // yield put(getPhonesAction(data));
  } catch (err) {
    console.error("ERROR", err);
  }
}
