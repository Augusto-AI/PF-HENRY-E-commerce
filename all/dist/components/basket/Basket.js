"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _app = _interopRequireDefault(require("firebase/app"));
var _basket = require("@/components/basket");
var _common = require("@/components/common");
var _routes = require("@/constants/routes");
var _utils = require("@/helpers/utils");
var _hooks = require("@/hooks");
var _react = _interopRequireWildcard(require("react"));
var _reactRedux = require("react-redux");
var _reactRouterDom = require("react-router-dom");
var _basketActions = require("@/redux/actions/basketActions");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/* eslint-disable max-len */

var Basket = function Basket() {
  var _useModal = (0, _hooks.useModal)(),
    isOpenModal = _useModal.isOpenModal,
    onOpenModal = _useModal.onOpenModal,
    onCloseModal = _useModal.onCloseModal;
  var _useSelector = (0, _reactRedux.useSelector)(function (state) {
      return {
        basket: state.basket,
        user: state.auth
      };
    }),
    basket = _useSelector.basket,
    user = _useSelector.user;
  var history = (0, _reactRouterDom.useHistory)();
  var _useLocation = (0, _reactRouterDom.useLocation)(),
    pathname = _useLocation.pathname;
  var dispatch = (0, _reactRedux.useDispatch)();
  var didMount = (0, _hooks.useDidMount)();
  (0, _react.useEffect)(function () {
    if (didMount && _app["default"].auth.currentUser && basket.length !== 0) {
      _app["default"].saveBasketItems(basket, _app["default"].auth.currentUser.uid).then(function () {
        console.log("Item saved to basket");
      })["catch"](function (e) {
        console.log(e);
      });
    }
  }, [basket.length]);
  var onCheckOut = function onCheckOut() {
    if (basket.length !== 0 && user) {
      document.body.classList.remove("is-basket-open");
      history.push(_routes.CHECKOUT_STEP_1);
    } else {
      onOpenModal();
    }
  };
  var onSignInClick = function onSignInClick() {
    onCloseModal();
    document.body.classList.remove("basket-open");
    history.push(_routes.CHECKOUT_STEP_1);
  };
  var onClearBasket = function onClearBasket() {
    if (basket.length !== 0) {
      dispatch((0, _basketActions.clearBasket)());
    }
  };
  return user && user.role === "ADMIN" ? null : /*#__PURE__*/_react["default"].createElement(_common.Boundary, null, /*#__PURE__*/_react["default"].createElement(_common.Modal, {
    isOpen: isOpenModal,
    onRequestClose: onCloseModal
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-center"
  }, "You must log in to continue paying"), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("div", {
    className: "d-flex-center"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "button button-border button-border-gray button-small",
    onClick: onCloseModal,
    type: "button"
  }, "Keep buying"), "\xA0", /*#__PURE__*/_react["default"].createElement("button", {
    className: "button button-small",
    onClick: onSignInClick,
    type: "button"
  }, "Sign in to for pay"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "basket"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "basket-list"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "basket-header"
  }, /*#__PURE__*/_react["default"].createElement("h3", {
    className: "basket-header-title"
  }, "My Basket \xA0", /*#__PURE__*/_react["default"].createElement("span", null, "(", " ".concat(basket.length, " ").concat(basket.length > 1 ? "items" : "item"), ")")), /*#__PURE__*/_react["default"].createElement(_basket.BasketToggle, null, function (_ref) {
    var onClickToggle = _ref.onClickToggle;
    return /*#__PURE__*/_react["default"].createElement("span", {
      className: "basket-toggle button button-border button-border-gray button-small",
      onClick: onClickToggle,
      role: "presentation"
    }, "Close");
  }), /*#__PURE__*/_react["default"].createElement("button", {
    className: "basket-clear button button-border button-border-gray button-small",
    disabled: basket.length === 0,
    onClick: onClearBasket,
    type: "button"
  }, /*#__PURE__*/_react["default"].createElement("span", null, "Empty Basket"))), basket.length <= 0 && /*#__PURE__*/_react["default"].createElement("div", {
    className: "basket-empty"
  }, /*#__PURE__*/_react["default"].createElement("h5", {
    className: "basket-empty-msg"
  }, "Su canasta est\xE1 vacia")), basket.map(function (product, i) {
    return /*#__PURE__*/_react["default"].createElement(_basket.BasketItem
    // eslint-disable-next-line react/no-array-index-key
    , {
      key: "".concat(product.id, "_").concat(i),
      product: product,
      basket: basket,
      dispatch: dispatch
    });
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "basket-checkout"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "basket-total"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "basket-total-title"
  }, "Subtotal :"), /*#__PURE__*/_react["default"].createElement("h2", {
    className: "basket-total-amount"
  }, (0, _utils.displayMoney)((0, _utils.calculateTotal)(basket.map(function (product) {
    return product.price * product.quantity;
  }))))), /*#__PURE__*/_react["default"].createElement("button", {
    className: "basket-checkout-button button",
    disabled: basket.length === 0 || pathname === "/checkout",
    onClick: onCheckOut,
    type: "button"
  }, "Terminar"))));
};
var _default = Basket;
exports["default"] = _default;