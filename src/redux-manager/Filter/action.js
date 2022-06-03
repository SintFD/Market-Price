import { SEND_FILTER_VALUE, GET_PHONES, GET_VALUES } from "../constants";

export const takeFilterValue = (filterValue) => ({
  type: SEND_FILTER_VALUE,
  payload: filterValue,
});

export const getPhonesAction = (phones) => ({
  type: GET_PHONES,
  payload: phones,
});
export const getValuesAction = (values) => ({
  type: GET_VALUES,
  payload: values,
});
