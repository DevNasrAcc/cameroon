import { call, put } from "redux-saga/effects";
import { toast } from "react-toastify";
import { API_ENDPOINTS } from "../../../constants/Network";
import { RestClient } from "../../../network/RestClient";
import {
  LOADING_END,
  POPULATE_USER_ACCOUNT_INFO,
} from "../../../constants/Routes";
import { getItem } from "../../../localStorage/LocalStorage";

export function* sendAccountStatusInfoSaga({ payload }) {
  try {
    payload["userId"] = getItem("userid");
    const response = yield call(() =>
      RestClient.post(API_ENDPOINTS.updateAccountStatus, payload)
    );
    const { data } = response;
    yield put({ type: LOADING_END, payload: false });
    if (data) {
      yield put({ type: LOADING_END, payload: false });
      yield put({ type: POPULATE_USER_ACCOUNT_INFO, payload: data });
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
