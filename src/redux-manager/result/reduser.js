import { FIND_MODEL ,GET_VALUES} from "../constants";

const initialValues = {
  models: [],
};

const resultReduser = (state = initialValues, action) => {
  switch (action.type) {
    case GET_VALUES:
      return { ...state, models: action.payload };
    // case FIND_MODEL:
    //   return { ...state, models: action.payload };
    // case DELETE_MOVIE:
    //   return {
    //     ...state,
    //     models: state.models.filter((film) => film.id !== action.payload),
    //   };

    default:
      return state;
  }
};

export default resultReduser;
