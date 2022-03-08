import { call, put } from "redux-saga/effects";
import { toast } from "react-toastify";
import { API_ENDPOINTS } from "../../../constants/Network";
import { RestClientFile } from "../../../network/RestClient";
import { EDIT_PROJECT, LOADING_END } from "../../../constants/Routes";

export function* editUploadProjectPhotoSaga({ payload }) {
  try {
    let formData = new FormData();
    formData.append("file0", payload.pictures.pictureSource0);
    formData.append("file1", payload.pictures.pictureSource1);
    formData.append("file2", payload.pictures.pictureSource2);
    formData.append("file3", payload.pictures.pictureSource3);
    formData.append("file4", payload.pictures.pictureSource4);

    const response = yield call(() =>
      RestClientFile.post(API_ENDPOINTS.uploadMultipleProjectPhoto, formData)
    );
    const { data } = response;
    if (data) {
      payload.details.photos = [];
      payload.details.photos[0] = payload.pictures.pictureSource0
        ? data.file0
        : payload.details.pictures[0];
      payload.details.photos[1] = payload.pictures.pictureSource1
        ? data.file1
        : payload.details.pictures[1];
      payload.details.photos[2] = payload.pictures.pictureSource2
        ? data.file2
        : payload.details.pictures[2];
      payload.details.photos[3] = payload.pictures.pictureSource3
        ? data.file3
        : payload.details.pictures[3];
      payload.details.photos[4] = payload.pictures.pictureSource4
        ? data.file4
        : payload.details.pictures[4];

      payload.details.photos = payload.details.photos.filter((el) => {
        return el;
      });

      // payload.tags = payload.tags?.split(',');

      delete payload.pictures;
      delete payload.details.pictures;

      yield put({ type: EDIT_PROJECT, payload: payload });
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
