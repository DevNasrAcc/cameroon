import { call, put } from "redux-saga/effects";
import { toast } from "react-toastify";
import { API_ENDPOINTS } from "../../../constants/Network";
import { RestClient } from "../../../network/RestClient";
import history from "../../../history";
import { LOADING_END } from "../../../constants/Routes";

export function* createProjectSaga({ payload }) {
  try {
    const response = yield call(() =>
      RestClient.post(API_ENDPOINTS.createProject, payload)
    );
    const { data } = response;
    yield put({ type: LOADING_END, payload: false });
    if (data) {
      toast.success("Project Created", {
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
