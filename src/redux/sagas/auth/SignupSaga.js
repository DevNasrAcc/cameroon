import { call, put } from "redux-saga/effects";
import { toast } from "react-toastify";
import { API_ENDPOINTS } from "../../../constants/Network";
import { RestClient } from "../../../network/RestClient";
import history from "../../../history";
import { LOADING_END } from "../../../constants/Routes";
import { setItem } from "../../../localStorage/LocalStorage";

export function* signupSaga({ payload }) {
  try {
    const response = yield call(() =>
      RestClient.post(API_ENDPOINTS.signup, payload)
    );
    const { data } = response;
    yield put({ type: LOADING_END, payload: false });
    if (data.response == "OK" || data.accountStatus) {
      toast.success("Registered Successfully", {
        position: toast.POSITION.TOP_CENTER,
      });
      let fullName = data.firstName + " " + data.lastName;
      setItem("userid", data._id);
      setItem("userfullname", fullName);
      setItem("useremail", data.email.address);
      setItem("username", data.userName);
      yield call(history.push, "/app/my-projects");
    } else if (data.response) {
      toast.error(data.response, {
        position: toast.POSITION.TOP_CENTER,
      });
    } else if (data.length > 0 && data[0]) {
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
