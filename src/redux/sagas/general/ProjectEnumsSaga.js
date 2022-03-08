import { call, put } from "redux-saga/effects";
import { toast } from "react-toastify";
import { API_ENDPOINTS } from "../../../constants/Network";
import { RestClient } from "../../../network/RestClient";
import { LOADING_END, POPULATE_PROJECT_ENUMS } from "../../../constants/Routes";

export function* projectEnumsSaga() {
  try {
    const response = yield call(() =>
      RestClient.get(API_ENDPOINTS.projectEnums)
    );
    const { data } = response;
    yield put({ type: LOADING_END, payload: false });
    if (data) {
      yield put({ type: LOADING_END, payload: false });
      yield put({ type: POPULATE_PROJECT_ENUMS, payload: data });
    } else {
      yield put({ type: LOADING_END, payload: false });
      toast.error("Validation", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  } catch (error) {
    yield put({ type: LOADING_END, payload: false });
    toast.error("Unknown Error", {
      position: toast.POSITION.TOP_CENTER,
    });
  }
}
