"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateProfileSuccess = exports.updateProfile = exports.updateEmail = exports.setProfile = exports.clearProfile = void 0;
var _constants = require("@/constants/constants");
var clearProfile = function clearProfile() {
  return {
    type: _constants.CLEAR_PROFILE
  };
};
exports.clearProfile = clearProfile;
var setProfile = function setProfile(user) {
  return {
    type: _constants.SET_PROFILE,
    payload: user
  };
};
exports.setProfile = setProfile;
var updateEmail = function updateEmail(password, newEmail) {
  return {
    type: _constants.UPDATE_EMAIL,
    payload: {
      password: password,
      newEmail: newEmail
    }
  };
};
exports.updateEmail = updateEmail;
var updateProfile = function updateProfile(newProfile) {
  return {
    type: _constants.UPDATE_PROFILE,
    payload: {
      updates: newProfile.updates,
      files: newProfile.files,
      credentials: newProfile.credentials
    }
  };
};
exports.updateProfile = updateProfile;
var updateProfileSuccess = function updateProfileSuccess(updates) {
  return {
    type: _constants.UPDATE_PROFILE_SUCCESS,
    payload: updates
  };
};
exports.updateProfileSuccess = updateProfileSuccess;