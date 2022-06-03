import { GET_PHONES,GET_VALUES } from "../constants";

const initialValues = {
  phones: [],
};

const filterReducer = (state = initialValues, action) => {
  switch (action.type) {
    case GET_VALUES:
      return { ...state, phones: action.payload };
    case GET_PHONES:
      return { ...state, phones: action.payload };
    default:
      return state;
  }
};

export default filterReducer;
