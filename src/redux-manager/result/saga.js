import { takeEvery, put, call, select } from "redux-saga/effects";
import { FIND_MODEL } from "../constants";
import { setProducts } from "./actions";
import { searchProducts } from "../REST";

export default function* watcherCart() {
  yield takeEvery(FIND_MODEL, workerCart);
}

function* workerCart(action) {
  try {
    const data = yield call(searchProducts, action.payload);
    yield put(setProducts(data));
  } catch (err) {
    console.error("ERROR", err);
  }
}
