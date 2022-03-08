import { call, put } from "redux-saga/effects";
import { toast } from "react-toastify";
import { API_ENDPOINTS } from "../../../constants/Network";
import { RestClient } from "../../../network/RestClient";
import history from "../../../history";
import { LOADING_END } from "../../../constants/Routes";
import { getItem } from "../../../localStorage/LocalStorage";

export function* editPersonalInfoSaga({ payload }) {
  try {
    payload["userId"] = getItem("userid");
    const response = yield call(() =>
      RestClient.post(API_ENDPOINTS.personalInfo, payload)
    );
    const { data } = response;
    yield put({ type: LOADING_END, payload: false });
    if (data.response == "OK") {
      // RestClient.setHeader('Authorization', data.data.token);
      toast.success("Profile Updated", {
        position: toast.POSITION.TOP_CENTER,
      });
      //   setItem('@auth', JSON.stringify(data.data.token));
      yield call(history.push, "/app/my-profile");
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
