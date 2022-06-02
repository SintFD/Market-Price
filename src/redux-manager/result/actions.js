import { FIND_MODEL } from "../constants";

export const getModel = (model) => ({ type: FIND_MODEL, payload: model });