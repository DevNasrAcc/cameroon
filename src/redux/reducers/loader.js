import { LOADING_END, LOADING_START } from "../../constants/Routes";

const LOADING = {
  loading: false,
};

export default (state = LOADING, action) => {
  switch (action.type) {
    case LOADING_START:
      return { ...state, loading: true };
    case LOADING_END:
      return { ...state, loading: false };
    default:
      return state;
  }
};
