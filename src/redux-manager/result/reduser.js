import { FIND_MODEL } from "../constants";

const initialValues = {
  models: [],
};

const modelReduser = (state = initialValues, action) => {
  switch (action.type) {
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

export default modelReduser;
