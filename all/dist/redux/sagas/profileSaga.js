"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _constants = require("@/constants/constants");
var _routes = require("@/constants/routes");
var _utils = require("@/helpers/utils");
var _effects = require("redux-saga/effects");
var _AppRouter = require("@/routers/AppRouter");
var _firebase = _interopRequireDefault(require("@/services/firebase"));
var _miscActions = require("../actions/miscActions");
var _profileActions = require("../actions/profileActions");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function profileSaga(_ref) {
  var type = _ref.type,
    payload = _ref.payload;
  return /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var state, _payload$credentials, email, password, _payload$files, avatarFile, bannerFile, bannerURL, avatarURL, updates;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.t0 = type;
          _context.next = _context.t0 === _constants.UPDATE_EMAIL ? 3 : _context.t0 === _constants.UPDATE_PROFILE ? 20 : 80;
          break;
        case 3:
          _context.prev = 3;
          _context.next = 6;
          return (0, _effects.put)((0, _miscActions.setLoading)(false));
        case 6:
          _context.next = 8;
          return (0, _effects.call)(_firebase["default"].updateEmail, payload.password, payload.newEmail);
        case 8:
          _context.next = 10;
          return (0, _effects.put)((0, _miscActions.setLoading)(false));
        case 10:
          _context.next = 12;
          return (0, _effects.call)(_AppRouter.history.push, '/profile');
        case 12:
          _context.next = 14;
          return (0, _effects.call)(_utils.displayActionMessage, 'Email Updated Successfully!', 'success');
        case 14:
          _context.next = 19;
          break;
        case 16:
          _context.prev = 16;
          _context.t1 = _context["catch"](3);
          console.log(_context.t1.message);
        case 19:
          return _context.abrupt("break", 81);
        case 20:
          _context.prev = 20;
          _context.next = 23;
          return (0, _effects.select)();
        case 23:
          state = _context.sent;
          _payload$credentials = payload.credentials, email = _payload$credentials.email, password = _payload$credentials.password;
          _payload$files = payload.files, avatarFile = _payload$files.avatarFile, bannerFile = _payload$files.bannerFile;
          _context.next = 28;
          return (0, _effects.put)((0, _miscActions.setLoading)(true));
        case 28:
          if (!(email && password && email !== state.profile.email)) {
            _context.next = 31;
            break;
          }
          _context.next = 31;
          return (0, _effects.call)(_firebase["default"].updateEmail, password, email);
        case 31:
          if (!(avatarFile || bannerFile)) {
            _context.next = 55;
            break;
          }
          if (!bannerFile) {
            _context.next = 38;
            break;
          }
          _context.next = 35;
          return (0, _effects.call)(_firebase["default"].storeImage, state.auth.id, 'banner', bannerFile);
        case 35:
          _context.t2 = _context.sent;
          _context.next = 39;
          break;
        case 38:
          _context.t2 = payload.updates.banner;
        case 39:
          bannerURL = _context.t2;
          if (!avatarFile) {
            _context.next = 46;
            break;
          }
          _context.next = 43;
          return (0, _effects.call)(_firebase["default"].storeImage, state.auth.id, 'avatar', avatarFile);
        case 43:
          _context.t3 = _context.sent;
          _context.next = 47;
          break;
        case 46:
          _context.t3 = payload.updates.avatar;
        case 47:
          avatarURL = _context.t3;
          updates = _objectSpread(_objectSpread({}, payload.updates), {}, {
            avatar: avatarURL,
            banner: bannerURL
          });
          _context.next = 51;
          return (0, _effects.call)(_firebase["default"].updateProfile, state.auth.id, updates);
        case 51:
          _context.next = 53;
          return (0, _effects.put)((0, _profileActions.updateProfileSuccess)(updates));
        case 53:
          _context.next = 59;
          break;
        case 55:
          _context.next = 57;
          return (0, _effects.call)(_firebase["default"].updateProfile, state.auth.id, payload.updates);
        case 57:
          _context.next = 59;
          return (0, _effects.put)((0, _profileActions.updateProfileSuccess)(payload.updates));
        case 59:
          _context.next = 61;
          return (0, _effects.put)((0, _miscActions.setLoading)(false));
        case 61:
          _context.next = 63;
          return (0, _effects.call)(_AppRouter.history.push, _routes.ACCOUNT);
        case 63:
          _context.next = 65;
          return (0, _effects.call)(_utils.displayActionMessage, 'Profile Updated Successfully!', 'success');
        case 65:
          _context.next = 79;
          break;
        case 67:
          _context.prev = 67;
          _context.t4 = _context["catch"](20);
          console.log(_context.t4);
          _context.next = 72;
          return (0, _effects.put)((0, _miscActions.setLoading)(false));
        case 72:
          if (!(_context.t4.code === 'auth/wrong-password')) {
            _context.next = 77;
            break;
          }
          _context.next = 75;
          return (0, _effects.call)(_utils.displayActionMessage, 'Wrong password, profile update failed :(', 'error');
        case 75:
          _context.next = 79;
          break;
        case 77:
          _context.next = 79;
          return (0, _effects.call)(_utils.displayActionMessage, ":( Failed to update profile. ".concat(_context.t4.message ? _context.t4.message : ''), 'error');
        case 79:
          return _context.abrupt("break", 81);
        case 80:
          throw new Error('Unexpected action type.');
        case 81:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[3, 16], [20, 67]]);
  })();
}
var _default = profileSaga;
exports["default"] = _default;