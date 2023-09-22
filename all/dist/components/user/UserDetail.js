"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var UserDetail = function UserDetail(_ref) {
  var user = _ref.user,
    onEdit = _ref.onEdit,
    onDelete = _ref.onDelete,
    onChangeRole = _ref.onChangeRole;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isEditing = _useState2[0],
    setIsEditing = _useState2[1];
  var _useState3 = (0, _react.useState)(_objectSpread({}, user)),
    _useState4 = _slicedToArray(_useState3, 2),
    editedUser = _useState4[0],
    setEditedUser = _useState4[1];
  var handleEditClick = function handleEditClick() {
    setIsEditing(true);
  };
  var handleSaveClick = function handleSaveClick() {
    // Aquí puedes agregar lógica para guardar los cambios en el usuario
    // Puedes utilizar una función prop que se encargue de actualizar los datos en Firebase

    // Por ejemplo, supongamos que tienes una función prop llamada onSave
    // que actualiza los datos del usuario en Firebase
    onSave(editedUser);
    setIsEditing(false);
  };
  var handleDeleteClick = function handleDeleteClick() {
    // Aquí puedes agregar lógica para borrar el usuario
    // Puedes utilizar una función prop que se encargue de eliminar el usuario de Firebase

    // Por ejemplo, supongamos que tienes una función prop llamada onDelete
    // que elimina el usuario de Firebase
    onDelete(user.id);
  };
  var handleRoleChange = function handleRoleChange() {
    // Aquí puedes agregar lógica para cambiar el rol del usuario
    // Puedes utilizar una función prop que se encargue de actualizar el rol en Firebase

    // Por ejemplo, supongamos que tienes una función prop llamada onChangeRole
    // que cambia el rol del usuario en Firebase
    onChangeRole(user.id, editedUser.role);
  };
  var handleInputChange = function handleInputChange(e) {
    var _e$target = e.target,
      name = _e$target.name,
      value = _e$target.value;
    setEditedUser(_objectSpread(_objectSpread({}, editedUser), {}, _defineProperty({}, name, value)));
  };
  return /*#__PURE__*/_react["default"].createElement("div", null, isEditing ? /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    name: "name",
    value: editedUser.name,
    onChange: handleInputChange
  }), /*#__PURE__*/_react["default"].createElement("input", {
    type: "email",
    name: "email",
    value: editedUser.email,
    onChange: handleInputChange
  }), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    name: "role",
    value: editedUser.role,
    onChange: handleInputChange
  }), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handleSaveClick
  }, "Guardar")) : /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement("strong", null, "Nombre:"), " ", user.name), /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement("strong", null, "Email:"), " ", user.email), /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement("strong", null, "Rol:"), " ", user.role), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handleEditClick
  }, "Editar"), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handleDeleteClick
  }, "Borrar"), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handleRoleChange
  }, "Cambiar Rol")));
};
var _default = UserDetail;
exports["default"] = _default;