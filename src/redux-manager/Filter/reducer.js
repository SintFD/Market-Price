import { GET_PHONES, GET_VALUES,SET_PRODUCTS } from "../constants";

const initialValues = {
  products: [],
};

const filterReducer = (state = initialValues, action) => {
  switch (action.type) {
    case GET_VALUES:
      return { ...state, products: action.payload };
    case GET_PHONES:
      return { ...state, products: action.payload };
    case SET_PRODUCTS:
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

export default filterReducer;
