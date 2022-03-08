import {
  FETCH_PROJECT_ENUMS,
  POPULATE_PROJECT_ENUMS,
} from "../../constants/Routes";

const initialState = {
  projectEnums: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROJECT_ENUMS:
      return { ...state };
    case POPULATE_PROJECT_ENUMS:
      return { ...state, projectEnums: action.payload };
    default:
      return state;
  }
};
