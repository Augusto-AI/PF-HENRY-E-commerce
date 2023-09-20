"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _constants = require("@/constants/constants");
var _routes = require("@/constants/routes");
var _utils = require("@/helpers/utils");
var _effects = require("redux-saga/effects");
var _miscActions = require("@/redux/actions/miscActions");
var _AppRouter = require("@/routers/AppRouter");
var _firebase = _interopRequireDefault(require("@/services/firebase"));
var _productActions = require("../actions/productActions");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
var _marked = /*#__PURE__*/_regeneratorRuntime().mark(initRequest),
  _marked2 = /*#__PURE__*/_regeneratorRuntime().mark(handleError),
  _marked3 = /*#__PURE__*/_regeneratorRuntime().mark(handleAction);
/* eslint-disable indent */
function initRequest() {
  return _regeneratorRuntime().wrap(function initRequest$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        _context.next = 2;
        return (0, _effects.put)((0, _miscActions.setLoading)(true));
      case 2:
        _context.next = 4;
        return (0, _effects.put)((0, _miscActions.setRequestStatus)(null));
      case 4:
      case "end":
        return _context.stop();
    }
  }, _marked);
}
function handleError(e) {
  return _regeneratorRuntime().wrap(function handleError$(_context2) {
    while (1) switch (_context2.prev = _context2.next) {
      case 0:
        _context2.next = 2;
        return (0, _effects.put)((0, _miscActions.setLoading)(false));
      case 2:
        _context2.next = 4;
        return (0, _effects.put)((0, _miscActions.setRequestStatus)((e === null || e === void 0 ? void 0 : e.message) || 'Failed to fetch products'));
      case 4:
        console.log('ERROR: ', e);
      case 5:
      case "end":
        return _context2.stop();
    }
  }, _marked2);
}
function handleAction(location, message, status) {
  return _regeneratorRuntime().wrap(function handleAction$(_context3) {
    while (1) switch (_context3.prev = _context3.next) {
      case 0:
        if (!location) {
          _context3.next = 3;
          break;
        }
        _context3.next = 3;
        return (0, _effects.call)(_AppRouter.history.push, location);
      case 3:
        _context3.next = 5;
        return (0, _effects.call)(_utils.displayActionMessage, message, status);
      case 5:
      case "end":
        return _context3.stop();
    }
  }, _marked3);
}
function productSaga(_ref) {
  var type = _ref.type,
    payload = _ref.payload;
  return /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var state, result, imageCollection, key, downloadURL, image, images, imageKeys, imageUrls, product, _payload$updates, _image, _imageCollection, newUpdates, url, existingUploads, newUploads, _imageKeys, _imageUrls, _images, _state, _result;
    return _regeneratorRuntime().wrap(function _callee$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.t0 = type;
          _context4.next = _context4.t0 === _constants.GET_PRODUCTS ? 3 : _context4.t0 === _constants.ADD_PRODUCT ? 30 : _context4.t0 === _constants.EDIT_PRODUCT ? 68 : _context4.t0 === _constants.REMOVE_PRODUCT ? 118 : _context4.t0 === _constants.SEARCH_PRODUCT ? 138 : 169;
          break;
        case 3:
          _context4.prev = 3;
          _context4.next = 6;
          return initRequest();
        case 6:
          _context4.next = 8;
          return (0, _effects.select)();
        case 8:
          state = _context4.sent;
          _context4.next = 11;
          return (0, _effects.call)(_firebase["default"].getProducts, payload);
        case 11:
          result = _context4.sent;
          if (!(result.products.length === 0)) {
            _context4.next = 16;
            break;
          }
          handleError('No items found.');
          _context4.next = 20;
          break;
        case 16:
          _context4.next = 18;
          return (0, _effects.put)((0, _productActions.getProductsSuccess)({
            products: result.products,
            lastKey: result.lastKey ? result.lastKey : state.products.lastRefKey,
            total: result.total ? result.total : state.products.total
          }));
        case 18:
          _context4.next = 20;
          return (0, _effects.put)((0, _miscActions.setRequestStatus)(''));
        case 20:
          _context4.next = 22;
          return (0, _effects.put)((0, _miscActions.setLoading)(false));
        case 22:
          _context4.next = 29;
          break;
        case 24:
          _context4.prev = 24;
          _context4.t1 = _context4["catch"](3);
          console.log(_context4.t1);
          _context4.next = 29;
          return handleError(_context4.t1);
        case 29:
          return _context4.abrupt("break", 170);
        case 30:
          _context4.prev = 30;
          _context4.next = 33;
          return initRequest();
        case 33:
          imageCollection = payload.imageCollection;
          _context4.next = 36;
          return (0, _effects.call)(_firebase["default"].generateKey);
        case 36:
          key = _context4.sent;
          _context4.next = 39;
          return (0, _effects.call)(_firebase["default"].storeImage, key, 'products', payload.image);
        case 39:
          downloadURL = _context4.sent;
          image = {
            id: key,
            url: downloadURL
          };
          images = [];
          if (!(imageCollection.length !== 0)) {
            _context4.next = 50;
            break;
          }
          _context4.next = 45;
          return (0, _effects.all)(imageCollection.map(function () {
            return _firebase["default"].generateKey;
          }));
        case 45:
          imageKeys = _context4.sent;
          _context4.next = 48;
          return (0, _effects.all)(imageCollection.map(function (img, i) {
            return _firebase["default"].storeImage(imageKeys[i](), 'products', img.file);
          }));
        case 48:
          imageUrls = _context4.sent;
          images = imageUrls.map(function (url, i) {
            return {
              id: imageKeys[i](),
              url: url
            };
          });
        case 50:
          product = _objectSpread(_objectSpread({}, payload), {}, {
            image: downloadURL,
            imageCollection: [image].concat(_toConsumableArray(images))
          });
          _context4.next = 53;
          return (0, _effects.call)(_firebase["default"].addProduct, key, product);
        case 53:
          _context4.next = 55;
          return (0, _effects.put)((0, _productActions.addProductSuccess)(_objectSpread({
            id: key
          }, product)));
        case 55:
          _context4.next = 57;
          return handleAction(_routes.ADMIN_PRODUCTS, 'Item succesfully added', 'success');
        case 57:
          _context4.next = 59;
          return (0, _effects.put)((0, _miscActions.setLoading)(false));
        case 59:
          _context4.next = 67;
          break;
        case 61:
          _context4.prev = 61;
          _context4.t2 = _context4["catch"](30);
          _context4.next = 65;
          return handleError(_context4.t2);
        case 65:
          _context4.next = 67;
          return handleAction(undefined, "Item failed to add: ".concat(_context4.t2 === null || _context4.t2 === void 0 ? void 0 : _context4.t2.message), 'error');
        case 67:
          return _context4.abrupt("break", 170);
        case 68:
          _context4.prev = 68;
          _context4.next = 71;
          return initRequest();
        case 71:
          _payload$updates = payload.updates, _image = _payload$updates.image, _imageCollection = _payload$updates.imageCollection;
          newUpdates = _objectSpread({}, payload.updates);
          if (!(_image.constructor === File && _typeof(_image) === 'object')) {
            _context4.next = 86;
            break;
          }
          _context4.prev = 74;
          _context4.next = 77;
          return (0, _effects.call)(_firebase["default"].deleteImage, payload.id);
        case 77:
          _context4.next = 82;
          break;
        case 79:
          _context4.prev = 79;
          _context4.t3 = _context4["catch"](74);
          console.error('Failed to delete image ', _context4.t3);
        case 82:
          _context4.next = 84;
          return (0, _effects.call)(_firebase["default"].storeImage, payload.id, 'products', _image);
        case 84:
          url = _context4.sent;
          newUpdates = _objectSpread(_objectSpread({}, newUpdates), {}, {
            image: url
          });
        case 86:
          if (!(_imageCollection.length > 1)) {
            _context4.next = 100;
            break;
          }
          existingUploads = [];
          newUploads = [];
          _imageCollection.forEach(function (img) {
            if (img.file) {
              newUploads.push(img);
            } else {
              existingUploads.push(img);
            }
          });
          _context4.next = 92;
          return (0, _effects.all)(newUploads.map(function () {
            return _firebase["default"].generateKey;
          }));
        case 92:
          _imageKeys = _context4.sent;
          _context4.next = 95;
          return (0, _effects.all)(newUploads.map(function (img, i) {
            return _firebase["default"].storeImage(_imageKeys[i](), 'products', img.file);
          }));
        case 95:
          _imageUrls = _context4.sent;
          _images = _imageUrls.map(function (url, i) {
            return {
              id: _imageKeys[i](),
              url: url
            };
          });
          newUpdates = _objectSpread(_objectSpread({}, newUpdates), {}, {
            imageCollection: [].concat(existingUploads, _toConsumableArray(_images))
          });
          _context4.next = 101;
          break;
        case 100:
          newUpdates = _objectSpread(_objectSpread({}, newUpdates), {}, {
            imageCollection: [{
              id: new Date().getTime(),
              url: newUpdates.image
            }]
          });
          // add image thumbnail to image collection from newUpdates to
          // make sure you're adding the url not the file object.
        case 101:
          _context4.next = 103;
          return (0, _effects.call)(_firebase["default"].editProduct, payload.id, newUpdates);
        case 103:
          _context4.next = 105;
          return (0, _effects.put)((0, _productActions.editProductSuccess)({
            id: payload.id,
            updates: newUpdates
          }));
        case 105:
          _context4.next = 107;
          return handleAction(_routes.ADMIN_PRODUCTS, 'Item succesfully edited', 'success');
        case 107:
          _context4.next = 109;
          return (0, _effects.put)((0, _miscActions.setLoading)(false));
        case 109:
          _context4.next = 117;
          break;
        case 111:
          _context4.prev = 111;
          _context4.t4 = _context4["catch"](68);
          _context4.next = 115;
          return handleError(_context4.t4);
        case 115:
          _context4.next = 117;
          return handleAction(undefined, "Item failed to edit: ".concat(_context4.t4.message), 'error');
        case 117:
          return _context4.abrupt("break", 170);
        case 118:
          _context4.prev = 118;
          _context4.next = 121;
          return initRequest();
        case 121:
          _context4.next = 123;
          return (0, _effects.call)(_firebase["default"].removeProduct, payload);
        case 123:
          _context4.next = 125;
          return (0, _effects.put)((0, _productActions.removeProductSuccess)(payload));
        case 125:
          _context4.next = 127;
          return (0, _effects.put)((0, _miscActions.setLoading)(false));
        case 127:
          _context4.next = 129;
          return handleAction(_routes.ADMIN_PRODUCTS, 'Item succesfully removed', 'success');
        case 129:
          _context4.next = 137;
          break;
        case 131:
          _context4.prev = 131;
          _context4.t5 = _context4["catch"](118);
          _context4.next = 135;
          return handleError(_context4.t5);
        case 135:
          _context4.next = 137;
          return handleAction(undefined, "Item failed to remove: ".concat(_context4.t5.message), 'error');
        case 137:
          return _context4.abrupt("break", 170);
        case 138:
          _context4.prev = 138;
          _context4.next = 141;
          return initRequest();
        case 141:
          _context4.next = 143;
          return (0, _effects.put)((0, _productActions.clearSearchState)());
        case 143:
          _context4.next = 145;
          return (0, _effects.select)();
        case 145:
          _state = _context4.sent;
          _context4.next = 148;
          return (0, _effects.call)(_firebase["default"].searchProducts, payload.searchKey);
        case 148:
          _result = _context4.sent;
          if (!(_result.products.length === 0)) {
            _context4.next = 156;
            break;
          }
          _context4.next = 152;
          return handleError({
            message: 'No product found.'
          });
        case 152:
          _context4.next = 154;
          return (0, _effects.put)((0, _productActions.clearSearchState)());
        case 154:
          _context4.next = 160;
          break;
        case 156:
          _context4.next = 158;
          return (0, _effects.put)((0, _productActions.searchProductSuccess)({
            products: _result.products,
            lastKey: _result.lastKey ? _result.lastKey : _state.products.searchedProducts.lastRefKey,
            total: _result.total ? _result.total : _state.products.searchedProducts.total
          }));
        case 158:
          _context4.next = 160;
          return (0, _effects.put)((0, _miscActions.setRequestStatus)(''));
        case 160:
          _context4.next = 162;
          return (0, _effects.put)((0, _miscActions.setLoading)(false));
        case 162:
          _context4.next = 168;
          break;
        case 164:
          _context4.prev = 164;
          _context4.t6 = _context4["catch"](138);
          _context4.next = 168;
          return handleError(_context4.t6);
        case 168:
          return _context4.abrupt("break", 170);
        case 169:
          throw new Error("Unexpected action type ".concat(type));
        case 170:
        case "end":
          return _context4.stop();
      }
    }, _callee, null, [[3, 24], [30, 61], [68, 111], [74, 79], [118, 131], [138, 164]]);
  })();
}
var _default = productSaga;
exports["default"] = _default;