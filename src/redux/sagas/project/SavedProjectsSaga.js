import { call, put } from "redux-saga/effects";
import { toast } from "react-toastify";
import { API_ENDPOINTS } from "../../../constants/Network";
import { RestClient } from "../../../network/RestClient";
import {
  LOADING_END,
  POPULATE_SAVED_PROJECTS,
} from "../../../constants/Routes";
import { getItem } from "../../../localStorage/LocalStorage";

export function* savedProjectsSaga() {
  try {
    const params = { userId: getItem("userid") };
    const response = yield call(() =>
      RestClient.get(API_ENDPOINTS.savedProjects, params)
    );
    const { data } = response;
    yield put({ type: LOADING_END, payload: false });
    if (data) {
      // RestClient.setHeader('Authorization', data.data.token);
      yield put({ type: LOADING_END, payload: false });
      yield put({ type: POPULATE_SAVED_PROJECTS, payload: data });
    } else {
      yield put({ type: LOADING_END, payload: false });
      toast.error("Validation", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  } catch (error) {
    yield put({ type: LOADING_END, payload: false });
    toast.error("Error", {
      position: toast.POSITION.TOP_CENTER,
    });
  }
}
