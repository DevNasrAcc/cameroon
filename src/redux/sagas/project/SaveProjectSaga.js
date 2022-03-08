import { call, put } from "redux-saga/effects";
import { toast } from "react-toastify";
import { API_ENDPOINTS } from "../../../constants/Network";
import { RestClient } from "../../../network/RestClient";
import { LOADING_END } from "../../../constants/Routes";
import { getItem } from "../../../localStorage/LocalStorage";

export function* saveProjectSaga({ payload }) {
  try {
    payload["userId"] = getItem("userid");
    const response = yield call(() =>
      RestClient.post(API_ENDPOINTS.saveProject, payload)
    );
    const { data } = response;
    yield put({ type: LOADING_END, payload: false });
    if (data.response === "OK") {
      toast.success("Project saved/unsaved successfully", {
        position: toast.POSITION.TOP_CENTER,
      });
    } else if (data.response) {
      toast.error(data.response, {
        position: toast.POSITION.TOP_CENTER,
      });
    } else if (data.length > 0 && data[0]) {
      yield put({ type: LOADING_END, payload: false });
      toast.error(data[0], {
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
