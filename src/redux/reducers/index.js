import { combineReducers } from "redux";
import loader from "./loader";
import category from "./category";
import general from "./general";
import project from "./project";
import user from "./user";

export default combineReducers({
  loader,
  category,
  general,
  project,
  user,
});
