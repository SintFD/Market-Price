import { SEND_FILTER_VALUE, GET_PHONES } from "../constants";

export const takeFilterValue = (filterValue) => ({
  type: SEND_FILTER_VALUE,
  payload: filterValue,
});

export const getPhonesAction = (phones) => ({
  type: GET_PHONES,
  payload: phones,
});
