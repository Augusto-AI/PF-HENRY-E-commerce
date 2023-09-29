import { ADMIN_USERS } from "@/constants/routes";
import { displayActionMessage } from "@/helpers/utils";
import { takeLatest, put, call, all, select } from "redux-saga/effects";
import { setLoading, setRequestStatus } from "@/redux/actions/miscActions";
import { history } from "@/routers/AppRouter";
import firebase from "@/services/firebase";

//*----------COSNSTANTS

import {
  GET_USER,
  DELETE_USER,
  PROMOTE_TO_ADMIN,
  GET_USERS,
  GET_USER_ORDERS,
  GET_USER_REVIEWS,
  GET_USER_PRODUCTS,
  ADD_USER,
  EDIT_USER,
} from "@/constants/constants";

//**---------------ACTIONS

import {
  deleteUserSuccess,
  promoteToAdminSuccess,
  getUsersSuccess,
} from "../actions/userActions";

//*-----------------FUNCTIONS

function* initRequest() {
  yield put(setLoading(true));
  yield put(setRequestStatus(null));
}
// Función para obtener un usuario específico
function* handleError(e) {
  yield put(setLoading(false));
  yield put(setRequestStatus(e?.message || "Fail to fetch Users"));
  console.error("ERROR: ", e);
}

// Función para manejar acciones y redireccionamiento
function* handleAction(location, message, status) {
  if (location) yield call(history.push, location);
  yield call(displayActionMessage, message, status);
}

// Función para obtener un usuario específico
function* getUser({ type, payload }) {
  if (type === GET_USER) {
    try {
      yield initRequest();
      const state = yield select();

      // Llama a la función de Firebase para obtener un usuario por su ID
      const user = yield call(firebase.getUser, payload.userId);

      if (user) {
        // Procesa el usuario obtenido según sea necesario
        yield put(getUsersSuccess({ user: user }));
      } else {
        yield handleError("Usuario no encontrado.");
      }

      yield put(setLoading(false));
    } catch (e) {
      yield handleError(e);
    }
  }
}

// Función para eliminar un usuario
function* deleteUser({ type, payload }) {
  if (type === DELETE_USER) {
    try {
      yield initRequest();

      // Llama a la función de Firebase para eliminar un usuario por su ID
      const success = yield call(firebase.removeUser, payload.userId);

      if (success) {
        yield put(deleteUserSuccess(payload.userId));
        yield handleAction(
          ADMIN_USERS,
          "Usuario eliminado con éxito",
          "success"
        );
      } else {
        yield handleError("Error al eliminar usuario.");
      }

      yield put(setLoading(false));
    } catch (e) {
      yield handleError(e);
    }
  }
}

// Función para promover a un usuario a administrador
function* promoteToAdmin({ type, payload }) {
  if (type === PROMOTE_TO_ADMIN) {
    try {
      yield initRequest();

      // Llama a la función de Firebase para promover a un usuario a administrador por su ID
      const success = yield call(firebase.promoteUserToAdmin, payload.userId);

      if (success) {
        yield put(promoteToAdminSuccess(payload.userId));
        yield handleAction(
          ADMIN_USERS,
          "Usuario promovido a administrador",
          "success"
        );
      } else {
        yield handleError("Error al promover usuario a administrador.");
      }

      yield put(setLoading(false));
    } catch (e) {
      yield handleError(e);
    }
  }
}

// Agrega más funciones relacionadas con usuarios según sea necesario (por ejemplo, obtener órdenes de usuario, obtener reseñas de usuario, editar usuario, etc.)

// Configura tus watchers para cada acción
export default function* userSaga() {
  yield takeLatest(GET_USER, getUser);
  yield takeLatest(DELETE_USER, deleteUser);
  yield takeLatest(PROMOTE_TO_ADMIN, promoteToAdmin);
  yield takeLatest(GET_USERS, getUser);
  // Agrega más watchers aquí según sea necesario
}
