"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _redux = require("redux");
var _reduxPersist = require("redux-persist");
var _storage = _interopRequireDefault(require("redux-persist/lib/storage"));
var _reduxSaga = _interopRequireDefault(require("redux-saga"));
var _reducers = _interopRequireDefault(require("../reducers"));
var _rootSaga = _interopRequireDefault(require("../sagas/rootSaga"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var sagaMiddleware = (0, _reduxSaga["default"])();
var composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _redux.compose;
var authPersistConfig = {
  key: 'root',
  storage: _storage["default"],
  whitelist: ['auth', 'profile', 'basket', 'checkout']
};
var _default = function _default() {
  var store = (0, _redux.createStore)((0, _reduxPersist.persistCombineReducers)(authPersistConfig, _reducers["default"]), composeEnhancer((0, _redux.applyMiddleware)(sagaMiddleware)));
  var persistor = (0, _reduxPersist.persistStore)(store);
  sagaMiddleware.run(_rootSaga["default"]);
  return {
    store: store,
    persistor: persistor
  };
};
exports["default"] = _default;