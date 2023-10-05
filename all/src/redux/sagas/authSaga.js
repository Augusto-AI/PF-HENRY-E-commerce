import {
  ON_AUTHSTATE_FAIL,
  ON_AUTHSTATE_SUCCESS,
  RESET_PASSWORD,
  SET_AUTH_PERSISTENCE,
  SIGNIN,
  SIGNIN_WITH_FACEBOOK,
  SIGNIN_WITH_GITHUB,
  SIGNIN_WITH_GOOGLE,
  SIGNIN_WITH_MICROSOFT,
  SIGNOUT,
  SIGNUP,
} from "@/constants/constants";
import { SIGNIN as ROUTE_SIGNIN } from "@/constants/routes";
import defaultAvatar from "@/images/defaultAvatar.jpg";
import defaultBanner from "@/images/defaultBanner.jpg";
import { call, put } from "redux-saga/effects";
import { signInSuccess, signOutSuccess } from "@/redux/actions/authActions";
import { clearBasket, setBasketItems } from "@/redux/actions/basketActions";
import { resetCheckout } from "@/redux/actions/checkoutActions";
import { resetFilter } from "@/redux/actions/filterActions";
import { setAuthenticating, setAuthStatus } from "@/redux/actions/miscActions";
import { clearProfile, setProfile } from "@/redux/actions/profileActions";
import { history } from "@/routers/AppRouter";
import firebase from "@/services/firebase";

// Handle errors consistently
function* handleError(e) {
  const obj = { success: false, type: "auth", isError: true };
  yield put(setAuthenticating(false));

  let errorMessage = "An unknown error occurred.";

  switch (e.code) {
    case "auth/network-request-failed":
      errorMessage = "Network error has occurred. Please try again.";
      break;
    case "auth/email-already-in-use":
      errorMessage = "Email is already in use. Please use another email.";
      break;
    case "auth/wrong-password":
    case "auth/user-not-found":
      errorMessage = "Incorrect email or password.";
      break;
    case "auth/reset-password-error":
      errorMessage =
        "Failed to send the password reset email. Please check your email address.";
      break;
    // Add more specific error cases as needed
    default:
      errorMessage = e.message || errorMessage;
  }

  yield put(setAuthStatus({ ...obj, message: errorMessage }));
}

// Initialize authentication request
function* initRequest() {
  yield put(setAuthenticating());
  yield put(setAuthStatus({}));
}

// Authentication Saga
function* authSaga({ type, payload }) {
  switch (type) {
    case SIGNIN:
      try {
        yield initRequest();
        const userCredential = yield call(
          firebase.signIn,
          payload.email,
          payload.password
        );
        const user = userCredential.user;

        // Check if the user is disabled
        if (user.disabled) {
          yield call(firebase.signOut); // Sign out the user
          yield put(
            setAuthStatus({
              success: false,
              type: "auth",
              isError: true,
              message: "Sorry! Account suspended",
            })
          );
        } else {
          // The user is not disabled, proceed with normal login logic
          // ...
        }
      } catch (e) {
        yield handleError(e);
      }
      break;
    case SIGNIN_WITH_FACEBOOK:
      try {
        yield initRequest();
        yield call(firebase.signInWithFacebook);
      } catch (e) {
        yield handleError(e);
      }
      break;
    case SIGNIN_WITH_GITHUB:
      try {
        yield initRequest();
        yield call(firebase.signInWithGithub);
      } catch (e) {
        yield handleError(e);
      }
      break;
    case SIGNIN_WITH_MICROSOFT:
      try {
        yield initRequest();
        // Call the appropriate Firebase method for signing in with Microsoft
        yield call(firebase.signInWithMicrosoft);
      } catch (e) {
        yield handleError(e);
      }
      break;
    case SIGNUP:
      try {
        yield initRequest();

        const ref = yield call(
          firebase.createAccount,
          payload.email,
          payload.password
        );
        const fullname = payload.fullname
          .split(" ")
          .map((name) => name[0].toUpperCase() + name.substring(1))
          .join(" ");
        const user = {
          fullname,
          avatar: defaultAvatar,
          banner: defaultBanner,
          email: payload.email,
          address: "",
          basket: [],
          mobile: { data: {} },
          role: "USER",
          dateJoined: ref.user.metadata.creationTime || new Date().getTime(),
        };

        yield call(firebase.addUser, ref.user.uid, user);
        yield put(setProfile(user));
        yield put(setAuthenticating(false));
      } catch (e) {
        yield handleError(e);
      }
      break;
    case SIGNOUT:
      try {
        yield initRequest();
        yield call(firebase.signOut);
        yield put(clearBasket());
        yield put(clearProfile());
        yield put(resetFilter());
        yield put(resetCheckout());
        yield put(signOutSuccess());
        yield put(setAuthenticating(false));
        yield call(history.push, ROUTE_SIGNIN);
      } catch (e) {
        console.error(e);
      }
      break;
    case RESET_PASSWORD:
      try {
        yield initRequest();
        yield call(firebase.passwordReset, payload);
        yield put(
          setAuthStatus({
            success: true,
            type: "reset",
            message:
              "Password reset email has been sent to your provided email.",
          })
        );
        yield put(setAuthenticating(false));
      } catch (e) {
        handleError({ code: "auth/reset-password-error" });
      }
      break;
    case ON_AUTHSTATE_SUCCESS:
      const snapshot = yield call(firebase.getUser, payload.uid);

      if (snapshot.data()) {
        const user = snapshot.data();

        if (user.disabled) {
          // Check if the user is disabled
          yield call(firebase.signOut); // Sign out the user
          yield put(
            setAuthStatus({
              success: false,
              type: "auth",
              isError: true,
              message: "Sorry! Your account is suspended.",
            })
          );
          yield put(signOutSuccess()); // Clear the user data
          return; // Exit the function to prevent further execution
        }

        // Rest of the code to handle an active user
        yield put(setProfile(user));
        yield put(setBasketItems(user.basket));
        yield put(
          signInSuccess({
            id: payload.uid,
            role: user.role,
            provider: payload.providerData[0].providerId,
          })
        );
        yield put(
          setAuthStatus({
            success: true,
            type: "auth",
            isError: false,
            message: "Successfully signed in. Redirecting...",
          })
        );
      } else if (
        payload.providerData[0].providerId !== "password" &&
        !snapshot.data()
      ) {
        const user = {
          fullname: payload.displayName ? payload.displayName : "User",
          avatar: payload.photoURL ? payload.photoURL : defaultAvatar,
          banner: defaultBanner,
          email: payload.email,
          address: "",
          basket: [],
          mobile: { data: {} },
          role: "USER",
          dateJoined: payload.metadata.creationTime,
        };
        yield call(firebase.addUser, payload.uid, user);
        yield put(setProfile(user));
        yield put(
          signInSuccess({
            id: payload.uid,
            role: user.role,
            provider: payload.providerData[0].providerId,
          })
        );
        yield put(
          setAuthStatus({
            success: true,
            type: "auth",
            isError: false,
            message: "Successfully signed in. Redirecting...",
          })
        );
      }
      yield put(setAuthenticating(false));
      break;

    case ON_AUTHSTATE_FAIL:
      yield put(clearProfile());
      yield put(signOutSuccess());
      break;
    case SET_AUTH_PERSISTENCE:
      try {
        yield call(firebase.setAuthPersistence);
      } catch (e) {
        console.error(e);
      }
      break;
    default:
      throw new Error("Unexpected Action Type.");
  }
}

export default authSaga;
