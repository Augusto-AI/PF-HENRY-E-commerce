"use strict";

var _common = require("@/components/common");
require("normalize.css/normalize.css");
var _react = _interopRequireDefault(require("react"));
var _reactDom = require("react-dom");
require("react-phone-input-2/lib/style.css");
var _authActions = require("@/redux/actions/authActions");
var _store = _interopRequireDefault(require("@/redux/store/store"));
require("@/styles/style.scss");
var _webfontloader = _interopRequireDefault(require("webfontloader"));
var _App = _interopRequireDefault(require("./App"));
var _firebase = _interopRequireDefault(require("@/services/firebase"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_webfontloader["default"].load({
  google: {
    families: ['Tajawal']
  }
});
var _configureStore = (0, _store["default"])(),
  store = _configureStore.store,
  persistor = _configureStore.persistor;
var root = document.getElementById('app');

// Render the preloader on initial load
(0, _reactDom.render)( /*#__PURE__*/_react["default"].createElement(_common.Preloader, null), root);
_firebase["default"].auth.onAuthStateChanged(function (user) {
  if (user) {
    store.dispatch((0, _authActions.onAuthStateSuccess)(user));
  } else {
    store.dispatch((0, _authActions.onAuthStateFail)('Failed to authenticate'));
  }
  // then render the app after checking the auth state
  (0, _reactDom.render)( /*#__PURE__*/_react["default"].createElement(_App["default"], {
    store: store,
    persistor: persistor
  }), root);
});
if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('/sw.js').then(function (registration) {
      console.log('SW registered: ', registration);
    })["catch"](function (registrationError) {
      console.log('SW registration failed: ', registrationError);
    });
  });
}