import { takeLatest, put, call, all } from "redux-saga/effects";
import { GET_REVIEWS, DELETE_REVIEW, ADD_REVIEW } from "@/constants/constants";
import { setLoading, setRequestStatus } from "@/redux/actions/miscActions";
import { displayActionMessage } from "@/helpers/utils";
import firebase from "@/services/firebase";
import {
  getReviewsSuccess,
  deleteReviewSuccess,
  addReviewSuccess,
} from "../actions/reviewActions";

function* initRequest() {
  yield put(setLoading(true));
  yield put(setRequestStatus(null));
}

function* handleError(e) {
  yield put(setLoading(false));
  yield put(
    setRequestStatus(e?.message || "Failed to perform review operation")
  );
  console.log("ERROR: ", e);
}

function* handleAction(message, status) {
  yield call(displayActionMessage, message, status);
}

function* getReviews() {
  try {
    yield initRequest();
    const result = yield call(firebase.getReviews); // Implement this function in Firebase to fetch reviews data
    const reviewsData = result.map((review) => ({
      id: review.id,
      ...review.data(),
    }));
    yield put(getReviewsSuccess(reviewsData));
    yield put(setRequestStatus(""));
    yield put(setLoading(false));
  } catch (e) {
    yield handleError(e);
  }
}

function* deleteReview({ type, payload }) {
  if (type === DELETE_REVIEW) {
    try {
      yield initRequest();
      yield call(firebase.deleteReview, payload); // Implement this function in Firebase to delete a review
      yield put(deleteReviewSuccess(payload));
      yield handleAction("Review successfully deleted", "success");
      yield put(setLoading(false));
    } catch (e) {
      yield handleError(e);
      yield handleAction(`Failed to delete review: ${e?.message}`, "error");
    }
  }
}

function* addReview({ type, payload }) {
  if (type === ADD_REVIEW) {
    try {
      yield initRequest();

      // Perform validation or other logic if needed

      yield call(firebase.addReview, payload); // Implement this function in Firebase to add a review
      yield put(addReviewSuccess(payload));
      yield handleAction("Review successfully added", "success");
      yield put(setLoading(false));
    } catch (e) {
      yield handleError(e);
      yield handleAction(`Failed to add review: ${e?.message}`, "error");
    }
  }
}

export default function* reviewSaga() {
  yield all([
    takeLatest(GET_REVIEWS, getReviews),
    takeLatest(DELETE_REVIEW, deleteReview),
    takeLatest(ADD_REVIEW, addReview),
  ]);
}
