"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signUp = exports.signOutSuccess = exports.signOut = exports.signInWithGoogle = exports.signInWithGithub = exports.signInWithFacebook = exports.signInSuccess = exports.signIn = exports.setAuthPersistence = exports.resetPassword = exports.onAuthStateSuccess = exports.onAuthStateFail = exports.onAuthStateChanged = void 0;
var type = _interopRequireWildcard(require("@/constants/constants"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var signIn = function signIn(email, password) {
  return {
    type: type.SIGNIN,
    payload: {
      email: email,
      password: password
    }
  };
};
exports.signIn = signIn;
var signInWithGoogle = function signInWithGoogle() {
  return {
    type: type.SIGNIN_WITH_GOOGLE
  };
};
exports.signInWithGoogle = signInWithGoogle;
var signInWithFacebook = function signInWithFacebook() {
  return {
    type: type.SIGNIN_WITH_FACEBOOK
  };
};
exports.signInWithFacebook = signInWithFacebook;
var signInWithGithub = function signInWithGithub() {
  return {
    type: type.SIGNIN_WITH_GITHUB
  };
};
exports.signInWithGithub = signInWithGithub;
var signUp = function signUp(user) {
  return {
    type: type.SIGNUP,
    payload: user
  };
};
exports.signUp = signUp;
var signInSuccess = function signInSuccess(auth) {
  return {
    type: type.SIGNIN_SUCCESS,
    payload: auth
  };
};
exports.signInSuccess = signInSuccess;
var setAuthPersistence = function setAuthPersistence() {
  return {
    type: type.SET_AUTH_PERSISTENCE
  };
};
exports.setAuthPersistence = setAuthPersistence;
var signOut = function signOut() {
  return {
    type: type.SIGNOUT
  };
};
exports.signOut = signOut;
var signOutSuccess = function signOutSuccess() {
  return {
    type: type.SIGNOUT_SUCCESS
  };
};
exports.signOutSuccess = signOutSuccess;
var onAuthStateChanged = function onAuthStateChanged() {
  return {
    type: type.ON_AUTHSTATE_CHANGED
  };
};
exports.onAuthStateChanged = onAuthStateChanged;
var onAuthStateSuccess = function onAuthStateSuccess(user) {
  return {
    type: type.ON_AUTHSTATE_SUCCESS,
    payload: user
  };
};
exports.onAuthStateSuccess = onAuthStateSuccess;
var onAuthStateFail = function onAuthStateFail(error) {
  return {
    type: type.ON_AUTHSTATE_FAIL,
    payload: error
  };
};
exports.onAuthStateFail = onAuthStateFail;
var resetPassword = function resetPassword(email) {
  return {
    type: type.RESET_PASSWORD,
    payload: email
  };
};
exports.resetPassword = resetPassword;