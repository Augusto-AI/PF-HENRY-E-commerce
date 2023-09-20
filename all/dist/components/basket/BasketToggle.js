"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var BasketToggle = function BasketToggle(_ref) {
  var children = _ref.children;
  var onClickToggle = function onClickToggle() {
    if (document.body.classList.contains('is-basket-open')) {
      document.body.classList.remove('is-basket-open');
    } else {
      document.body.classList.add('is-basket-open');
    }
  };
  document.addEventListener('click', function (e) {
    var closest = e.target.closest('.basket');
    var toggle = e.target.closest('.basket-toggle');
    var closeToggle = e.target.closest('.basket-item-remove');
    if (!closest && document.body.classList.contains('is-basket-open') && !toggle && !closeToggle) {
      document.body.classList.remove('is-basket-open');
    }
  });
  return children({
    onClickToggle: onClickToggle
  });
};
BasketToggle.propTypes = {
  children: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].node), _propTypes["default"].func, _propTypes["default"].node]).isRequired
};
var _default = BasketToggle;
exports["default"] = _default;