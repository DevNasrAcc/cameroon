import { call, put } from "redux-saga/effects";
import { toast } from "react-toastify";
import { API_ENDPOINTS } from "../../../constants/Network";
import { RestClientFile } from "../../../network/RestClient";
import { CREATE_PROJECT, LOADING_END } from "../../../constants/Routes";

export function* uploadProjectPhotoSaga({ payload }) {
  try {
    let formData = new FormData();
    formData.append("files", payload.details.pictureSource);

    const response = yield call(() =>
      RestClientFile.post(API_ENDPOINTS.uploadProjectPhoto, formData)
    );
    const { data } = response;
    if (data) {
      delete payload.details.pictureSource;
      delete payload.details.picture;

      payload.details.photos = [data];

      yield put({ type: CREATE_PROJECT, payload: payload });
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
