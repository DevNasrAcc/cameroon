import { call, put } from "redux-saga/effects";
import { toast } from "react-toastify";
import { API_ENDPOINTS } from "../../../constants/Network";
import { RestClient } from "../../../network/RestClient";
import history from "../../../history";
import { LOADING_END } from "../../../constants/Routes";
import { getItem } from "../../../localStorage/LocalStorage";

export function* signoutSaga() {
  try {
    const dataset = { userId: getItem("userid") };
    const response = yield call(() =>
      RestClient.post(API_ENDPOINTS.signout, dataset)
    );
    const { data } = response;
    yield put({ type: LOADING_END, payload: false });
    if (data) {
      // RestClient.setHeader('Authorization', data.data.token);
      yield put({ type: LOADING_END, payload: false });
      toast.success("Logout Successfully", {
        position: toast.POSITION.TOP_CENTER,
      });
      //   setItem('@auth', JSON.stringify(data.data.token));
      yield call(history.push, "/");
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
