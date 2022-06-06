import { FIND_MODEL, SET_PRODUCTS, GET_VALUES } from "../constants";

export const getModel = (model) => ({ type: FIND_MODEL, payload: model });
export const setProducts = (products) => ({
  type: SET_PRODUCTS,
  payload: products,
});
export const getValuesAction = (values) => ({
  type: GET_VALUES,
  payload: values,
});
