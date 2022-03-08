import {
  EXPLORE_PROJECTS,
  FETCH_LIKED_PROJECTS,
  FETCH_MY_PROJECTS,
  FETCH_PROJECT_DETAIL, FETCH_RECOMMENDED_PROJECTS,
  FETCH_SAVED_PROJECTS,
  POPULATE_EXPLORE_PROJECTS,
  POPULATE_LIKED_PROJECTS,
  POPULATE_MY_PROJECTS,
  POPULATE_PROJECT_DETAIL, POPULATE_RECOMMENDED_PROJECTS,
  POPULATE_SAVED_PROJECTS,
} from "../../constants/Routes";

const initialState = {
  explore: [],
  myProjects: [],
  savedProjects: [],
  likedProjects: [],
  recommendedProjects: [],
  projectDetail: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case EXPLORE_PROJECTS:
      return { ...state };
    case POPULATE_EXPLORE_PROJECTS:
      return { ...state, explore: action.payload };

    case FETCH_MY_PROJECTS:
      return { ...state };
    case POPULATE_MY_PROJECTS:
      return { ...state, myProjects: action.payload };

    case FETCH_SAVED_PROJECTS:
      return { ...state };
    case POPULATE_SAVED_PROJECTS:
      return { ...state, savedProjects: action.payload };

    case FETCH_LIKED_PROJECTS:
      return { ...state };
    case POPULATE_LIKED_PROJECTS:
      return { ...state, likedProjects: action.payload };

    case FETCH_RECOMMENDED_PROJECTS:
      return { ...state };
    case POPULATE_RECOMMENDED_PROJECTS:
      return { ...state, recommendedProjects: action.payload };

    case FETCH_PROJECT_DETAIL:
      return { ...state };
    case POPULATE_PROJECT_DETAIL:
      return { ...state, projectDetail: action.payload };
    default:
      return state;
  }
};
