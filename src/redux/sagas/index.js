import { takeLatest, all } from "redux-saga/effects";
import {
  SIGNIN,
  SIGNUP,
  EXPLORE_PROJECTS,
  SIGNOUT,
  FETCH_MY_PROJECTS,
  FORGOT_PASSWORD,
  CREATE_PROJECT,
  EDIT_ADDITIONAL_INFO,
  EDIT_PERSONAL_INFO,
  FETCH_CATEGORIES,
  FETCH_USER_PROFILE,
  FETCH_SAVED_PROJECTS,
  FETCH_LIKED_PROJECTS,
  FETCH_PROJECT_DETAIL,
  FETCH_USER_ACCOUNT_INFO,
  SEND_SUBSCRIPTION_INFO,
  SEND_ACCOUNT_STATUS_INFO,
  LIKE_PROJECT,
  SAVE_PROJECT,
  FETCH_PROJECT_ENUMS,
  UPLOAD_PROJECT_PHOTO,
  EDIT_UPLOAD_PROJECT_PHOTO,
  EDIT_PROJECT,
  DELETE_PROJECT, FETCH_RECOMMENDED_PROJECTS, SHARE_PROJECT,
} from "../../constants/Routes";

import { signupSaga } from "./auth/SignupSaga";
import { signinSaga } from "./auth/SigninSaga";
import { signoutSaga } from "./auth/SignoutSaga";
import { forgotpasswordSaga } from "./auth/ForgotPasswordSaga";
import { categoriesSaga } from "./category/RetrieveCategoriesSaga";
import { projectEnumsSaga } from "./general/ProjectEnumsSaga";
import { exploreProjectsSaga } from "./project/ExploreProjectsSaga";
import { myProjectsSaga } from "./project/MyProjectsSaga";
import { savedProjectsSaga } from "./project/SavedProjectsSaga";
import { likedProjectsSaga } from "./project/LikedProjectsSaga";
import { recommendedProjectsSaga } from "./project/RecommendedProjectsSaga";
import { createProjectSaga } from "./project/CreateProjectSaga";
import { editProjectSaga } from "./project/EditProjectSaga";
import { deleteProjectSaga } from "./project/DeleteProjectSaga";
import { projectDetailSaga } from "./project/ProjectDetailSaga";
import { likeProjectSaga } from "./project/LikeProjectSaga";
import { saveProjectSaga } from "./project/SaveProjectSaga";
import { shareProjectSaga } from "./project/ShareProjectSaga";
import { editPersonalInfoSaga } from "./user/EditPersonalInfoSaga";
import { editAdditionalInfoSaga } from "./user/EditAdditionalInfoSaga";
import { userProfileSaga } from "./user/UserProfileSaga";
import { userAccountInfoSaga } from "./user/UserAccountInfoSaga";
import { sendSubscriptionInfoSaga } from "./user/SendSubscriptionInfoSaga";
import { sendAccountStatusInfoSaga } from "./user/SendAccountStatusInfoSaga";
import { uploadProjectPhotoSaga } from "./file/UploadProjectPhotoSaga";
import { editUploadProjectPhotoSaga } from "./file/EditUploadProjectPhotoSaga";

function* actionWatcher() {
  yield takeLatest(SIGNUP, signupSaga);
  yield takeLatest(SIGNIN, signinSaga);
  yield takeLatest(FORGOT_PASSWORD, forgotpasswordSaga);
  yield takeLatest(CREATE_PROJECT, createProjectSaga);
  yield takeLatest(EDIT_PROJECT, editProjectSaga);
  yield takeLatest(DELETE_PROJECT, deleteProjectSaga);
  yield takeLatest(EDIT_PERSONAL_INFO, editPersonalInfoSaga);
  yield takeLatest(EDIT_ADDITIONAL_INFO, editAdditionalInfoSaga);
  yield takeLatest(SIGNOUT, signoutSaga);
  yield takeLatest(EXPLORE_PROJECTS, exploreProjectsSaga);
  yield takeLatest(FETCH_MY_PROJECTS, myProjectsSaga);
  yield takeLatest(FETCH_SAVED_PROJECTS, savedProjectsSaga);
  yield takeLatest(FETCH_LIKED_PROJECTS, likedProjectsSaga);
  yield takeLatest(FETCH_RECOMMENDED_PROJECTS, recommendedProjectsSaga);
  yield takeLatest(FETCH_PROJECT_DETAIL, projectDetailSaga);
  yield takeLatest(LIKE_PROJECT, likeProjectSaga);
  yield takeLatest(SAVE_PROJECT, saveProjectSaga);
  yield takeLatest(SHARE_PROJECT, shareProjectSaga);
  yield takeLatest(FETCH_CATEGORIES, categoriesSaga);
  yield takeLatest(FETCH_USER_PROFILE, userProfileSaga);
  yield takeLatest(FETCH_USER_ACCOUNT_INFO, userAccountInfoSaga);
  yield takeLatest(SEND_SUBSCRIPTION_INFO, sendSubscriptionInfoSaga);
  yield takeLatest(SEND_ACCOUNT_STATUS_INFO, sendAccountStatusInfoSaga);
  yield takeLatest(FETCH_PROJECT_ENUMS, projectEnumsSaga);
  yield takeLatest(UPLOAD_PROJECT_PHOTO, uploadProjectPhotoSaga);
  yield takeLatest(EDIT_UPLOAD_PROJECT_PHOTO, editUploadProjectPhotoSaga);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
