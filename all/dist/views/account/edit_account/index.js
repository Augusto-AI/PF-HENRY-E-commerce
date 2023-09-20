"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _icons = require("@ant-design/icons");
var _common = require("@/components/common");
var _formik = require("formik");
var _hooks = require("@/hooks");
var _react = _interopRequireWildcard(require("react"));
var _reactRedux = require("react-redux");
var _miscActions = require("@/redux/actions/miscActions");
var _profileActions = require("@/redux/actions/profileActions");
var Yup = _interopRequireWildcard(require("yup"));
var _ConfirmModal = _interopRequireDefault(require("./ConfirmModal"));
var _EditForm = _interopRequireDefault(require("./EditForm"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var FormSchema = Yup.object().shape({
  fullname: Yup.string().min(4, 'Full name should be at least 4 characters.').max(60, 'Full name should be only be 4 characters long.').required('Full name is required'),
  email: Yup.string().email('Email is not valid.').required('Email is required.'),
  address: Yup.string(),
  mobile: Yup.object().shape({
    country: Yup.string(),
    countryCode: Yup.string(),
    dialCode: Yup.string(),
    value: Yup.string()
  })
});
var EditProfile = function EditProfile() {
  (0, _hooks.useDocumentTitle)('Edit Account | Salinaka');
  (0, _hooks.useScrollTop)();
  var modal = (0, _hooks.useModal)();
  var dispatch = (0, _reactRedux.useDispatch)();
  (0, _react.useEffect)(function () {
    return function () {
      dispatch((0, _miscActions.setLoading)(false));
    };
  }, []);
  var _useSelector = (0, _reactRedux.useSelector)(function (state) {
      return {
        profile: state.profile,
        auth: state.auth,
        isLoading: state.app.loading
      };
    }),
    profile = _useSelector.profile,
    auth = _useSelector.auth,
    isLoading = _useSelector.isLoading;
  var initFormikValues = {
    fullname: profile.fullname || '',
    email: profile.email || '',
    address: profile.address || '',
    mobile: profile.mobile || {}
  };
  var _useFileHandler = (0, _hooks.useFileHandler)({
      avatar: {},
      banner: {}
    }),
    imageFile = _useFileHandler.imageFile,
    isFileLoading = _useFileHandler.isFileLoading,
    onFileChange = _useFileHandler.onFileChange;
  var update = function update(form) {
    var credentials = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    dispatch((0, _profileActions.updateProfile)({
      updates: {
        fullname: form.fullname,
        email: form.email,
        address: form.address,
        mobile: form.mobile,
        avatar: profile.avatar,
        banner: profile.banner
      },
      files: {
        bannerFile: imageFile.banner.file,
        avatarFile: imageFile.avatar.file
      },
      credentials: credentials
    }));
  };
  var onConfirmUpdate = function onConfirmUpdate(form, password) {
    if (password) {
      update(form, {
        email: form.email,
        password: password
      });
    }
  };
  var onSubmitUpdate = function onSubmitUpdate(form) {
    // check if data has changed
    var fieldsChanged = Object.keys(form).some(function (key) {
      return profile[key] !== form[key];
    });
    if (fieldsChanged || Boolean(imageFile.banner.file || imageFile.avatar.file)) {
      if (form.email !== profile.email) {
        modal.onOpenModal();
      } else {
        update(form);
      }
    }
  };
  return /*#__PURE__*/_react["default"].createElement(_common.Boundary, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "edit-user"
  }, /*#__PURE__*/_react["default"].createElement("h3", {
    className: "text-center"
  }, "Edit Account Details"), /*#__PURE__*/_react["default"].createElement(_formik.Formik, {
    initialValues: initFormikValues,
    validateOnChange: true,
    validationSchema: FormSchema,
    onSubmit: onSubmitUpdate
  }, function () {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
      className: "user-profile-banner"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "user-profile-banner-wrapper"
    }, /*#__PURE__*/_react["default"].createElement(_common.ImageLoader, {
      alt: "Banner",
      className: "user-profile-banner-img",
      src: imageFile.banner.url || profile.banner
    }), isFileLoading ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "loading-wrapper"
    }, /*#__PURE__*/_react["default"].createElement(_icons.LoadingOutlined, null)) : /*#__PURE__*/_react["default"].createElement("label", {
      className: "edit-button edit-banner-button",
      htmlFor: "edit-banner"
    }, /*#__PURE__*/_react["default"].createElement("input", {
      accept: "image/x-png,image/jpeg",
      disabled: isLoading,
      hidden: true,
      id: "edit-banner",
      onChange: function onChange(e) {
        return onFileChange(e, {
          name: 'banner',
          type: 'single'
        });
      },
      type: "file"
    }), /*#__PURE__*/_react["default"].createElement(_icons.EditOutlined, null))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "user-profile-avatar-wrapper"
    }, /*#__PURE__*/_react["default"].createElement(_common.ImageLoader, {
      alt: "Avatar",
      className: "user-profile-img",
      src: imageFile.avatar.url || profile.avatar
    }), isFileLoading ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "loading-wrapper"
    }, /*#__PURE__*/_react["default"].createElement(_icons.LoadingOutlined, null)) : /*#__PURE__*/_react["default"].createElement("label", {
      className: "edit-button edit-avatar-button",
      htmlFor: "edit-avatar"
    }, /*#__PURE__*/_react["default"].createElement("input", {
      accept: "image/x-png,image/jpeg",
      disabled: isLoading,
      hidden: true,
      id: "edit-avatar",
      onChange: function onChange(e) {
        return onFileChange(e, {
          name: 'avatar',
          type: 'single'
        });
      },
      type: "file"
    }), /*#__PURE__*/_react["default"].createElement(_icons.EditOutlined, null)))), /*#__PURE__*/_react["default"].createElement(_EditForm["default"], {
      authProvider: auth.provider,
      isLoading: isLoading
    }), /*#__PURE__*/_react["default"].createElement(_ConfirmModal["default"], {
      onConfirmUpdate: onConfirmUpdate,
      modal: modal
    }));
  })));
};
var _default = EditProfile;
exports["default"] = _default;