import {
  FETCH_USER_ACCOUNT_INFO,
  FETCH_USER_PROFILE,
  POPULATE_USER_ACCOUNT_INFO,
  POPULATE_USER_PROFILE,
} from "../../constants/Routes";

const initialState = {
  profile: null,
  accountInfo: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_PROFILE:
      return { ...state };
    case POPULATE_USER_PROFILE:
      return { ...state, profile: action.payload };

    case FETCH_USER_ACCOUNT_INFO:
      return { ...state };
    case POPULATE_USER_ACCOUNT_INFO:
      return { ...state, accountInfo: action.payload };
    default:
      return state;
  }
};
