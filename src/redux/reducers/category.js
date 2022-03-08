import { FETCH_CATEGORIES, POPULATE_CATEGORIES } from "../../constants/Routes";

const initialState = {
  categories: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return { ...state };
    case POPULATE_CATEGORIES:
      return { ...state, categories: action.payload };
    default:
      return state;
  }
};
