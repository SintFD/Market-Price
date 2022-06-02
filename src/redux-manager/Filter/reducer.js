import { GET_PHONES } from "../constants";

const initialValues = {
  phones: [],
};

const filterReducer = (state = initialValues, action) => {
  switch (action.type) {
    case GET_PHONES:
      return { ...state, phones: action.payload };
    default:
      return state;
  }
};

export default filterReducer;
