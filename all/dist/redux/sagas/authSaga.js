"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _constants = require("@/constants/constants");
var _routes = require("@/constants/routes");
var _defaultAvatar = _interopRequireDefault(require("@/images/defaultAvatar.jpg"));
var _defaultBanner = _interopRequireDefault(require("@/images/defaultBanner.jpg"));
var _effects = require("redux-saga/effects");
var _authActions = require("@/redux/actions/authActions");
var _basketActions = require("@/redux/actions/basketActions");
var _checkoutActions = require("@/redux/actions/checkoutActions");
var _filterActions = require("@/redux/actions/filterActions");
var _miscActions = require("@/redux/actions/miscActions");
var _profileActions = require("@/redux/actions/profileActions");
var _AppRouter = require("@/routers/AppRouter");
var _firebase = _interopRequireDefault(require("@/services/firebase"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
var _marked = /*#__PURE__*/_regeneratorRuntime().mark(handleError),
  _marked2 = /*#__PURE__*/_regeneratorRuntime().mark(initRequest);
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function handleError(e) {
  var obj;
  return _regeneratorRuntime().wrap(function handleError$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        obj = {
          success: false,
          type: 'auth',
          isError: true
        };
        _context.next = 3;
        return (0, _effects.put)((0, _miscActions.setAuthenticating)(false));
      case 3:
        _context.t0 = e.code;
        _context.next = _context.t0 === 'auth/network-request-failed' ? 6 : _context.t0 === 'auth/email-already-in-use' ? 9 : _context.t0 === 'auth/wrong-password' ? 12 : _context.t0 === 'auth/user-not-found' ? 15 : _context.t0 === 'auth/reset-password-error' ? 18 : 21;
        break;
      case 6:
        _context.next = 8;
        return (0, _effects.put)((0, _miscActions.setAuthStatus)(_objectSpread(_objectSpread({}, obj), {}, {
          message: 'Network error has occured. Please try again.'
        })));
      case 8:
        return _context.abrupt("break", 24);
      case 9:
        _context.next = 11;
        return (0, _effects.put)((0, _miscActions.setAuthStatus)(_objectSpread(_objectSpread({}, obj), {}, {
          message: 'Email is already in use. Please use another email'
        })));
      case 11:
        return _context.abrupt("break", 24);
      case 12:
        _context.next = 14;
        return (0, _effects.put)((0, _miscActions.setAuthStatus)(_objectSpread(_objectSpread({}, obj), {}, {
          message: 'Incorrect email or password'
        })));
      case 14:
        return _context.abrupt("break", 24);
      case 15:
        _context.next = 17;
        return (0, _effects.put)((0, _miscActions.setAuthStatus)(_objectSpread(_objectSpread({}, obj), {}, {
          message: 'Incorrect email or password'
        })));
      case 17:
        return _context.abrupt("break", 24);
      case 18:
        _context.next = 20;
        return (0, _effects.put)((0, _miscActions.setAuthStatus)(_objectSpread(_objectSpread({}, obj), {}, {
          message: 'Failed to send password reset email. Did you type your email correctly?'
        })));
      case 20:
        return _context.abrupt("break", 24);
      case 21:
        _context.next = 23;
        return (0, _effects.put)((0, _miscActions.setAuthStatus)(_objectSpread(_objectSpread({}, obj), {}, {
          message: e.message
        })));
      case 23:
        return _context.abrupt("break", 24);
      case 24:
      case "end":
        return _context.stop();
    }
  }, _marked);
}
function initRequest() {
  return _regeneratorRuntime().wrap(function initRequest$(_context2) {
    while (1) switch (_context2.prev = _context2.next) {
      case 0:
        _context2.next = 2;
        return (0, _effects.put)((0, _miscActions.setAuthenticating)());
      case 2:
        _context2.next = 4;
        return (0, _effects.put)((0, _miscActions.setAuthStatus)({}));
      case 4:
      case "end":
        return _context2.stop();
    }
  }, _marked2);
}
function authSaga(_ref) {
  var type = _ref.type,
    payload = _ref.payload;
  return /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var ref, fullname, user, snapshot, _user, _user2;
    return _regeneratorRuntime().wrap(function _callee$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.t0 = type;
          _context3.next = _context3.t0 === _constants.SIGNIN ? 3 : _context3.t0 === _constants.SIGNIN_WITH_GOOGLE ? 15 : _context3.t0 === _constants.SIGNIN_WITH_FACEBOOK ? 27 : _context3.t0 === _constants.SIGNIN_WITH_GITHUB ? 39 : _context3.t0 === _constants.SIGNUP ? 51 : _context3.t0 === _constants.SIGNOUT ? 72 : _context3.t0 === _constants.RESET_PASSWORD ? 97 : _context3.t0 === _constants.ON_AUTHSTATE_SUCCESS ? 112 : _context3.t0 === _constants.ON_AUTHSTATE_FAIL ? 140 : _context3.t0 === _constants.SET_AUTH_PERSISTENCE ? 145 : 154;
          break;
        case 3:
          _context3.prev = 3;
          _context3.next = 6;
          return initRequest();
        case 6:
          _context3.next = 8;
          return (0, _effects.call)(_firebase["default"].signIn, payload.email, payload.password);
        case 8:
          _context3.next = 14;
          break;
        case 10:
          _context3.prev = 10;
          _context3.t1 = _context3["catch"](3);
          _context3.next = 14;
          return handleError(_context3.t1);
        case 14:
          return _context3.abrupt("break", 155);
        case 15:
          _context3.prev = 15;
          _context3.next = 18;
          return initRequest();
        case 18:
          _context3.next = 20;
          return (0, _effects.call)(_firebase["default"].signInWithGoogle);
        case 20:
          _context3.next = 26;
          break;
        case 22:
          _context3.prev = 22;
          _context3.t2 = _context3["catch"](15);
          _context3.next = 26;
          return handleError(_context3.t2);
        case 26:
          return _context3.abrupt("break", 155);
        case 27:
          _context3.prev = 27;
          _context3.next = 30;
          return initRequest();
        case 30:
          _context3.next = 32;
          return (0, _effects.call)(_firebase["default"].signInWithFacebook);
        case 32:
          _context3.next = 38;
          break;
        case 34:
          _context3.prev = 34;
          _context3.t3 = _context3["catch"](27);
          _context3.next = 38;
          return handleError(_context3.t3);
        case 38:
          return _context3.abrupt("break", 155);
        case 39:
          _context3.prev = 39;
          _context3.next = 42;
          return initRequest();
        case 42:
          _context3.next = 44;
          return (0, _effects.call)(_firebase["default"].signInWithGithub);
        case 44:
          _context3.next = 50;
          break;
        case 46:
          _context3.prev = 46;
          _context3.t4 = _context3["catch"](39);
          _context3.next = 50;
          return handleError(_context3.t4);
        case 50:
          return _context3.abrupt("break", 155);
        case 51:
          _context3.prev = 51;
          _context3.next = 54;
          return initRequest();
        case 54:
          _context3.next = 56;
          return (0, _effects.call)(_firebase["default"].createAccount, payload.email, payload.password);
        case 56:
          ref = _context3.sent;
          fullname = payload.fullname.split(' ').map(function (name) {
            return name[0].toUpperCase().concat(name.substring(1));
          }).join(' ');
          user = {
            fullname: fullname,
            avatar: _defaultAvatar["default"],
            banner: _defaultBanner["default"],
            email: payload.email,
            address: '',
            basket: [],
            mobile: {
              data: {}
            },
            role: 'USER',
            dateJoined: ref.user.metadata.creationTime || new Date().getTime()
          };
          _context3.next = 61;
          return (0, _effects.call)(_firebase["default"].addUser, ref.user.uid, user);
        case 61:
          _context3.next = 63;
          return (0, _effects.put)((0, _profileActions.setProfile)(user));
        case 63:
          _context3.next = 65;
          return (0, _effects.put)((0, _miscActions.setAuthenticating)(false));
        case 65:
          _context3.next = 71;
          break;
        case 67:
          _context3.prev = 67;
          _context3.t5 = _context3["catch"](51);
          _context3.next = 71;
          return handleError(_context3.t5);
        case 71:
          return _context3.abrupt("break", 155);
        case 72:
          _context3.prev = 72;
          _context3.next = 75;
          return initRequest();
        case 75:
          _context3.next = 77;
          return (0, _effects.call)(_firebase["default"].signOut);
        case 77:
          _context3.next = 79;
          return (0, _effects.put)((0, _basketActions.clearBasket)());
        case 79:
          _context3.next = 81;
          return (0, _effects.put)((0, _profileActions.clearProfile)());
        case 81:
          _context3.next = 83;
          return (0, _effects.put)((0, _filterActions.resetFilter)());
        case 83:
          _context3.next = 85;
          return (0, _effects.put)((0, _checkoutActions.resetCheckout)());
        case 85:
          _context3.next = 87;
          return (0, _effects.put)((0, _authActions.signOutSuccess)());
        case 87:
          _context3.next = 89;
          return (0, _effects.put)((0, _miscActions.setAuthenticating)(false));
        case 89:
          _context3.next = 91;
          return (0, _effects.call)(_AppRouter.history.push, _routes.SIGNIN);
        case 91:
          _context3.next = 96;
          break;
        case 93:
          _context3.prev = 93;
          _context3.t6 = _context3["catch"](72);
          console.log(_context3.t6);
        case 96:
          return _context3.abrupt("break", 155);
        case 97:
          _context3.prev = 97;
          _context3.next = 100;
          return initRequest();
        case 100:
          _context3.next = 102;
          return (0, _effects.call)(_firebase["default"].passwordReset, payload);
        case 102:
          _context3.next = 104;
          return (0, _effects.put)((0, _miscActions.setAuthStatus)({
            success: true,
            type: 'reset',
            message: 'Password reset email has been sent to your provided email.'
          }));
        case 104:
          _context3.next = 106;
          return (0, _effects.put)((0, _miscActions.setAuthenticating)(false));
        case 106:
          _context3.next = 111;
          break;
        case 108:
          _context3.prev = 108;
          _context3.t7 = _context3["catch"](97);
          handleError({
            code: 'auth/reset-password-error'
          });
        case 111:
          return _context3.abrupt("break", 155);
        case 112:
          _context3.next = 114;
          return (0, _effects.call)(_firebase["default"].getUser, payload.uid);
        case 114:
          snapshot = _context3.sent;
          if (!snapshot.data()) {
            _context3.next = 127;
            break;
          }
          // if user exists in database
          _user = snapshot.data();
          _context3.next = 119;
          return (0, _effects.put)((0, _profileActions.setProfile)(_user));
        case 119:
          _context3.next = 121;
          return (0, _effects.put)((0, _basketActions.setBasketItems)(_user.basket));
        case 121:
          _context3.next = 123;
          return (0, _effects.put)((0, _basketActions.setBasketItems)(_user.basket));
        case 123:
          _context3.next = 125;
          return (0, _effects.put)((0, _authActions.signInSuccess)({
            id: payload.uid,
            role: _user.role,
            provider: payload.providerData[0].providerId
          }));
        case 125:
          _context3.next = 135;
          break;
        case 127:
          if (!(payload.providerData[0].providerId !== 'password' && !snapshot.data())) {
            _context3.next = 135;
            break;
          }
          // add the user if auth provider is not password
          _user2 = {
            fullname: payload.displayName ? payload.displayName : 'User',
            avatar: payload.photoURL ? payload.photoURL : _defaultAvatar["default"],
            banner: _defaultBanner["default"],
            email: payload.email,
            address: '',
            basket: [],
            mobile: {
              data: {}
            },
            role: 'USER',
            dateJoined: payload.metadata.creationTime
          };
          _context3.next = 131;
          return (0, _effects.call)(_firebase["default"].addUser, payload.uid, _user2);
        case 131:
          _context3.next = 133;
          return (0, _effects.put)((0, _profileActions.setProfile)(_user2));
        case 133:
          _context3.next = 135;
          return (0, _effects.put)((0, _authActions.signInSuccess)({
            id: payload.uid,
            role: _user2.role,
            provider: payload.providerData[0].providerId
          }));
        case 135:
          _context3.next = 137;
          return (0, _effects.put)((0, _miscActions.setAuthStatus)({
            success: true,
            type: 'auth',
            isError: false,
            message: 'Successfully signed in. Redirecting...'
          }));
        case 137:
          _context3.next = 139;
          return (0, _effects.put)((0, _miscActions.setAuthenticating)(false));
        case 139:
          return _context3.abrupt("break", 155);
        case 140:
          _context3.next = 142;
          return (0, _effects.put)((0, _profileActions.clearProfile)());
        case 142:
          _context3.next = 144;
          return (0, _effects.put)((0, _authActions.signOutSuccess)());
        case 144:
          return _context3.abrupt("break", 155);
        case 145:
          _context3.prev = 145;
          _context3.next = 148;
          return (0, _effects.call)(_firebase["default"].setAuthPersistence);
        case 148:
          _context3.next = 153;
          break;
        case 150:
          _context3.prev = 150;
          _context3.t8 = _context3["catch"](145);
          console.log(_context3.t8);
        case 153:
          return _context3.abrupt("break", 155);
        case 154:
          throw new Error('Unexpected Action Type.');
        case 155:
        case "end":
          return _context3.stop();
      }
    }, _callee, null, [[3, 10], [15, 22], [27, 34], [39, 46], [51, 67], [72, 93], [97, 108], [145, 150]]);
  })();
}
var _default = authSaga;
exports["default"] = _default;