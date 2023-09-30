import { takeLatest, put, call, all } from "redux-saga/effects";
import {
  GET_ORDERS,
  CANCEL_ORDER,
  EDIT_ORDER,
  ADD_ORDER,
} from "@/constants/constants";
import { setLoading, setRequestStatus } from "@/redux/actions/miscActions";
import { displayActionMessage } from "@/helpers/utils";
import firebase from "@/services/firebase";
import {
  getOrdersSuccess,
  cancelOrderSuccess,
  editOrderSuccess,
  addOrderSuccess,
} from "../actions/orderActions";

function* initRequest() {
  yield put(setLoading(true));
  yield put(setRequestStatus(null));
}

function* handleError(e) {
  yield put(setLoading(false));
  yield put(
    setRequestStatus(e?.message || "Failed to perform order operation")
  );
  console.log("ERROR: ", e);
}

function* handleAction(message, status) {
  yield call(displayActionMessage, message, status);
}

function* getOrders() {
  try {
    yield initRequest();
    const result = yield call(firebase.getOrders); // Implement this function in Firebase to fetch orders data
    const ordersData = result.map((order) => ({
      id: order.id,
      ...order.data(),
    }));
    yield put(getOrdersSuccess(ordersData));
    yield put(setRequestStatus(""));
    yield put(setLoading(false));
  } catch (e) {
    yield handleError(e);
  }
}

function* cancelOrder({ type, payload }) {
  if (type === CANCEL_ORDER) {
    try {
      yield initRequest();
      yield call(firebase.cancelOrder, payload); // Implement this function in Firebase to cancel an order
      yield put(cancelOrderSuccess(payload));
      yield handleAction("Order successfully canceled", "success");
      yield put(setLoading(false));
    } catch (e) {
      yield handleError(e);
      yield handleAction(`Failed to cancel order: ${e?.message}`, "error");
    }
  }
}

function* editOrder({ type, payload }) {
  if (type === EDIT_ORDER) {
    try {
      yield initRequest();

      // Perform validation or other logic if needed

      yield call(firebase.editOrder, payload); // Implement this function in Firebase to edit an order
      yield put(editOrderSuccess(payload));
      yield handleAction("Order successfully edited", "success");
      yield put(setLoading(false));
    } catch (e) {
      yield handleError(e);
      yield handleAction(`Failed to edit order: ${e?.message}`, "error");
    }
  }
}

function* addOrder({ type, payload }) {
  if (type === ADD_ORDER) {
    try {
      yield initRequest();

      // Perform validation or other logic if needed

      yield call(firebase.addOrder, payload); // Implement this function in Firebase to add an order
      yield put(addOrderSuccess(payload));
      yield handleAction("Order successfully added", "success");
      yield put(setLoading(false));
    } catch (e) {
      yield handleError(e);
      yield handleAction(`Failed to add order: ${e?.message}`, "error");
    }
  }
}

export default function* orderSaga() {
  yield all([
    takeLatest(GET_ORDERS, getOrders),
    takeLatest(CANCEL_ORDER, cancelOrder),
    takeLatest(EDIT_ORDER, editOrder),
    takeLatest(ADD_ORDER, addOrder),
  ]);
}
