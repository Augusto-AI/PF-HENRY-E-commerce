"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("react");
var _uuid = require("uuid");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
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
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; } /* eslint-disable no-alert */
var useFileHandler = function useFileHandler(initState) {
  var _useState = (0, _react.useState)(initState),
    _useState2 = _slicedToArray(_useState, 2),
    imageFile = _useState2[0],
    setImageFile = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isFileLoading = _useState4[0],
    setFileLoading = _useState4[1];
  var removeImage = function removeImage(_ref) {
    var id = _ref.id,
      name = _ref.name;
    var items = imageFile[name].filter(function (item) {
      return item.id !== id;
    });
    setImageFile(_objectSpread(_objectSpread({}, imageFile), {}, _defineProperty({}, name, items)));
  };
  var onFileChange = function onFileChange(event, _ref2) {
    var name = _ref2.name,
      type = _ref2.type;
    var val = event.target.value;
    var img = event.target.files[0];
    var size = img.size / 1024 / 1024;
    var regex = /(\.jpg|\.jpeg|\.png)$/i;
    setFileLoading(true);
    if (!regex.exec(val)) {
      alert('File type must be JPEG or PNG', 'error');
      setFileLoading(false);
    } else if (size > 0.5) {
      alert('File size exceeded 500kb, consider optimizing your image', 'error');
      setFileLoading(false);
    } else if (type === 'multiple') {
      Array.from(event.target.files).forEach(function (file) {
        var reader = new FileReader();
        reader.addEventListener('load', function (e) {
          setImageFile(function (oldFiles) {
            return _objectSpread(_objectSpread({}, oldFiles), {}, _defineProperty({}, name, [].concat(_toConsumableArray(oldFiles[name]), [{
              file: file,
              url: e.target.result,
              id: (0, _uuid.v4)()
            }])));
          });
        });
        reader.readAsDataURL(file);
      });
      setFileLoading(false);
    } else {
      // type is single
      var reader = new FileReader();
      reader.addEventListener('load', function (e) {
        setImageFile(_objectSpread(_objectSpread({}, imageFile), {}, _defineProperty({}, name, {
          file: img,
          url: e.target.result
        })));
        setFileLoading(false);
      });
      reader.readAsDataURL(img);
    }
  };
  return {
    imageFile: imageFile,
    setImageFile: setImageFile,
    isFileLoading: isFileLoading,
    onFileChange: onFileChange,
    removeImage: removeImage
  };
};
var _default = useFileHandler;
exports["default"] = _default;