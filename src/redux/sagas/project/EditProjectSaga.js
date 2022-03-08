import { call, put } from "redux-saga/effects";
import { toast } from "react-toastify";
import { API_ENDPOINTS } from "../../../constants/Network";
import { RestClient } from "../../../network/RestClient";
import history from "../../../history";
import { LOADING_END } from "../../../constants/Routes";

export function* editProjectSaga({ payload }) {
  try {
    const response = yield call(() =>
      RestClient.post(API_ENDPOINTS.editProject, payload)
    );
    const { data } = response;
    if (data) {
      toast.success("Project Updated", {
        position: toast.POSITION.TOP_CENTER,
      });
      yield call(history.push, `/app/view-project/${data._id}`);
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
