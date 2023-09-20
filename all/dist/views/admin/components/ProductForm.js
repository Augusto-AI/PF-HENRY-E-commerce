"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _icons = require("@ant-design/icons");
var _common = require("@/components/common");
var _formik = require("@/components/formik");
var _formik2 = require("formik");
var _hooks = require("@/hooks");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var Yup = _interopRequireWildcard(require("yup"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /* eslint-disable jsx-a11y/label-has-associated-control */
// Default brand names that I used. You can use what you want
var brandOptions = [{
  value: 'Salt Maalat',
  label: 'Salt Maalat'
}, {
  value: 'Betsin Maalat',
  label: 'Betsin Maalat'
}, {
  value: 'Black Kibal',
  label: 'Black Kibal'
}];
var FormSchema = Yup.object().shape({
  name: Yup.string().required('Product name is required.').max(60, 'Product name must only be less than 60 characters.'),
  brand: Yup.string().required('Brand name is required.'),
  price: Yup.number().positive('Price is invalid.').integer('Price should be an integer.').required('Price is required.'),
  description: Yup.string().required('Description is required.'),
  maxQuantity: Yup.number().positive('Max quantity is invalid.').integer('Max quantity should be an integer.').required('Max quantity is required.'),
  keywords: Yup.array().of(Yup.string()).min(1, 'Please enter at least 1 keyword for this product.'),
  sizes: Yup.array().of(Yup.number()).min(1, 'Please enter a size for this product.'),
  isFeatured: Yup["boolean"](),
  isRecommended: Yup["boolean"](),
  availableColors: Yup.array().of(Yup.string().required()).min(1, 'Please add a default color for this product.')
});
var ProductForm = function ProductForm(_ref) {
  var product = _ref.product,
    onSubmit = _ref.onSubmit,
    isLoading = _ref.isLoading;
  var initFormikValues = {
    name: (product === null || product === void 0 ? void 0 : product.name) || '',
    brand: (product === null || product === void 0 ? void 0 : product.brand) || '',
    price: (product === null || product === void 0 ? void 0 : product.price) || 0,
    maxQuantity: (product === null || product === void 0 ? void 0 : product.maxQuantity) || 0,
    description: (product === null || product === void 0 ? void 0 : product.description) || '',
    keywords: (product === null || product === void 0 ? void 0 : product.keywords) || [],
    sizes: (product === null || product === void 0 ? void 0 : product.sizes) || [],
    isFeatured: (product === null || product === void 0 ? void 0 : product.isFeatured) || false,
    isRecommended: (product === null || product === void 0 ? void 0 : product.isRecommended) || false,
    availableColors: (product === null || product === void 0 ? void 0 : product.availableColors) || []
  };
  var _useFileHandler = (0, _hooks.useFileHandler)({
      image: {},
      imageCollection: (product === null || product === void 0 ? void 0 : product.imageCollection) || []
    }),
    imageFile = _useFileHandler.imageFile,
    isFileLoading = _useFileHandler.isFileLoading,
    onFileChange = _useFileHandler.onFileChange,
    removeImage = _useFileHandler.removeImage;
  var onSubmitForm = function onSubmitForm(form) {
    if (imageFile.image.file || product.imageUrl) {
      var _imageFile$image;
      onSubmit(_objectSpread(_objectSpread({}, form), {}, {
        quantity: 1,
        // due to firebase function billing policy, let's add lowercase version
        // of name here instead in firebase functions
        name_lower: form.name.toLowerCase(),
        dateAdded: new Date().getTime(),
        image: (imageFile === null || imageFile === void 0 || (_imageFile$image = imageFile.image) === null || _imageFile$image === void 0 ? void 0 : _imageFile$image.file) || product.imageUrl,
        imageCollection: imageFile.imageCollection
      }));
    } else {
      // eslint-disable-next-line no-alert
      alert('Product thumbnail image is required.');
    }
  };
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_formik2.Formik, {
    initialValues: initFormikValues,
    validateOnChange: true,
    validationSchema: FormSchema,
    onSubmit: onSubmitForm
  }, function (_ref2) {
    var values = _ref2.values,
      setValues = _ref2.setValues;
    return /*#__PURE__*/_react["default"].createElement(_formik2.Form, {
      className: "product-form"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "product-form-inputs"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "d-flex"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "product-form-field"
    }, /*#__PURE__*/_react["default"].createElement(_formik2.Field, {
      disabled: isLoading,
      name: "name",
      type: "text",
      label: "* Product Name",
      placeholder: "Gago",
      style: {
        textTransform: 'capitalize'
      },
      component: _formik.CustomInput
    })), "\xA0", /*#__PURE__*/_react["default"].createElement("div", {
      className: "product-form-field"
    }, /*#__PURE__*/_react["default"].createElement(_formik.CustomCreatableSelect, {
      defaultValue: {
        label: values.brand,
        value: values.brand
      },
      name: "brand",
      iid: "brand",
      options: brandOptions,
      disabled: isLoading,
      placeholder: "Select/Create Brand",
      label: "* Brand"
    }))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "product-form-field"
    }, /*#__PURE__*/_react["default"].createElement(_formik2.Field, {
      disabled: isLoading,
      name: "description",
      id: "description",
      rows: 3,
      label: "* Product Description",
      component: _formik.CustomTextarea
    })), /*#__PURE__*/_react["default"].createElement("div", {
      className: "d-flex"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "product-form-field"
    }, /*#__PURE__*/_react["default"].createElement(_formik2.Field, {
      disabled: isLoading,
      name: "price",
      id: "price",
      type: "number",
      label: "* Price",
      component: _formik.CustomInput
    })), "\xA0", /*#__PURE__*/_react["default"].createElement("div", {
      className: "product-form-field"
    }, /*#__PURE__*/_react["default"].createElement(_formik2.Field, {
      disabled: isLoading,
      name: "maxQuantity",
      type: "number",
      id: "maxQuantity",
      label: "* Max Quantity",
      component: _formik.CustomInput
    }))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "d-flex"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "product-form-field"
    }, /*#__PURE__*/_react["default"].createElement(_formik.CustomCreatableSelect, {
      defaultValue: values.keywords.map(function (key) {
        return {
          value: key,
          label: key
        };
      }),
      name: "keywords",
      iid: "keywords",
      isMulti: true,
      disabled: isLoading,
      placeholder: "Create/Select Keywords",
      label: "* Keywords"
    })), "\xA0", /*#__PURE__*/_react["default"].createElement("div", {
      className: "product-form-field"
    }, /*#__PURE__*/_react["default"].createElement(_formik.CustomCreatableSelect, {
      defaultValue: values.keywords.map(function (key) {
        return {
          value: key,
          label: key
        };
      }),
      name: "sizes",
      iid: "sizes",
      type: "number",
      isMulti: true,
      disabled: isLoading,
      placeholder: "Create/Select Sizes",
      label: "* Sizes (Millimeter)"
    }))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "product-form-field"
    }, /*#__PURE__*/_react["default"].createElement(_formik2.FieldArray, {
      name: "availableColors",
      disabled: isLoading,
      component: _formik.CustomColorInput
    })), /*#__PURE__*/_react["default"].createElement("div", {
      className: "product-form-field"
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "d-block padding-s"
    }, "Image Collection"), !isFileLoading && /*#__PURE__*/_react["default"].createElement("label", {
      htmlFor: "product-input-file-collection"
    }, /*#__PURE__*/_react["default"].createElement("input", {
      disabled: isLoading,
      hidden: true,
      id: "product-input-file-collection",
      multiple: true,
      onChange: function onChange(e) {
        return onFileChange(e, {
          name: 'imageCollection',
          type: 'multiple'
        });
      },
      readOnly: isLoading,
      type: "file"
    }), "Choose Images")), /*#__PURE__*/_react["default"].createElement("div", {
      className: "product-form-collection"
    }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, imageFile.imageCollection.length >= 1 && imageFile.imageCollection.map(function (image) {
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "product-form-collection-image",
        key: image.id
      }, /*#__PURE__*/_react["default"].createElement(_common.ImageLoader, {
        alt: "",
        src: image.url
      }), /*#__PURE__*/_react["default"].createElement("button", {
        className: "product-form-delete-image",
        onClick: function onClick() {
          return removeImage({
            id: image.id,
            name: 'imageCollection'
          });
        },
        title: "Delete Image",
        type: "button"
      }, /*#__PURE__*/_react["default"].createElement("i", {
        className: "fa fa-times-circle"
      })));
    }))), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("div", {
      className: "d-flex"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "product-form-field"
    }, /*#__PURE__*/_react["default"].createElement("input", {
      checked: values.isFeatured,
      className: "",
      id: "featured",
      onChange: function onChange(e) {
        return setValues(_objectSpread(_objectSpread({}, values), {}, {
          isFeatured: e.target.checked
        }));
      },
      type: "checkbox"
    }), /*#__PURE__*/_react["default"].createElement("label", {
      htmlFor: "featured"
    }, /*#__PURE__*/_react["default"].createElement("h5", {
      className: "d-flex-grow-1 margin-0"
    }, "\xA0 Add to Featured \xA0"))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "product-form-field"
    }, /*#__PURE__*/_react["default"].createElement("input", {
      checked: values.isRecommended,
      className: "",
      id: "recommended",
      onChange: function onChange(e) {
        return setValues(_objectSpread(_objectSpread({}, values), {}, {
          isRecommended: e.target.checked
        }));
      },
      type: "checkbox"
    }), /*#__PURE__*/_react["default"].createElement("label", {
      htmlFor: "recommended"
    }, /*#__PURE__*/_react["default"].createElement("h5", {
      className: "d-flex-grow-1 margin-0"
    }, "\xA0 Add to Recommended \xA0")))), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("div", {
      className: "product-form-field product-form-submit"
    }, /*#__PURE__*/_react["default"].createElement("button", {
      className: "button",
      disabled: isLoading,
      type: "submit"
    }, isLoading ? /*#__PURE__*/_react["default"].createElement(_icons.LoadingOutlined, null) : /*#__PURE__*/_react["default"].createElement(_icons.CheckOutlined, null), "\xA0", isLoading ? 'Saving Product' : 'Save Product'))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "product-form-file"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "product-form-field"
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "d-block padding-s"
    }, "* Thumbnail"), !isFileLoading && /*#__PURE__*/_react["default"].createElement("label", {
      htmlFor: "product-input-file"
    }, /*#__PURE__*/_react["default"].createElement("input", {
      disabled: isLoading,
      hidden: true,
      id: "product-input-file",
      onChange: function onChange(e) {
        return onFileChange(e, {
          name: 'image',
          type: 'single'
        });
      },
      readOnly: isLoading,
      type: "file"
    }), "Choose Image")), /*#__PURE__*/_react["default"].createElement("div", {
      className: "product-form-image-wrapper"
    }, (imageFile.image.url || product.image) && /*#__PURE__*/_react["default"].createElement(_common.ImageLoader, {
      alt: "",
      className: "product-form-image-preview",
      src: imageFile.image.url || product.image
    }))));
  }));
};
ProductForm.propTypes = {
  product: _propTypes["default"].shape({
    name: _propTypes["default"].string,
    brand: _propTypes["default"].string,
    price: _propTypes["default"].number,
    maxQuantity: _propTypes["default"].number,
    description: _propTypes["default"].string,
    keywords: _propTypes["default"].arrayOf(_propTypes["default"].string),
    imageCollection: _propTypes["default"].arrayOf(_propTypes["default"].object),
    sizes: _propTypes["default"].arrayOf(_propTypes["default"].string),
    image: _propTypes["default"].string,
    imageUrl: _propTypes["default"].string,
    isFeatured: _propTypes["default"].bool,
    isRecommended: _propTypes["default"].bool,
    availableColors: _propTypes["default"].arrayOf(_propTypes["default"].string)
  }).isRequired,
  onSubmit: _propTypes["default"].func.isRequired,
  isLoading: _propTypes["default"].bool.isRequired
};
var _default = ProductForm;
exports["default"] = _default;