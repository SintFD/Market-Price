import { FIND_MODEL ,SET_PRODUCTS} from "../constants";

export const getModel = (model) => ({ type: FIND_MODEL, payload: model });
export const setProducts = (products) => ({ type: SET_PRODUCTS, payload: products });
