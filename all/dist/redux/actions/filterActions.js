"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setTextFilter = exports.setMinPriceFilter = exports.setMaxPriceFilter = exports.setBrandFilter = exports.resetFilter = exports.removeSelectedRecent = exports.clearRecentSearch = exports.applyFilter = void 0;
var _constants = require("@/constants/constants");
var setTextFilter = function setTextFilter(keyword) {
  return {
    type: _constants.SET_TEXT_FILTER,
    payload: keyword
  };
};
exports.setTextFilter = setTextFilter;
var setBrandFilter = function setBrandFilter(brand) {
  return {
    type: _constants.SET_BRAND_FILTER,
    payload: brand
  };
};
exports.setBrandFilter = setBrandFilter;
var setMinPriceFilter = function setMinPriceFilter(min) {
  return {
    type: _constants.SET_MIN_PRICE_FILTER,
    payload: min
  };
};
exports.setMinPriceFilter = setMinPriceFilter;
var setMaxPriceFilter = function setMaxPriceFilter(max) {
  return {
    type: _constants.SET_MAX_PRICE_FILTER,
    payload: max
  };
};
exports.setMaxPriceFilter = setMaxPriceFilter;
var resetFilter = function resetFilter() {
  return {
    type: _constants.RESET_FILTER
  };
};
exports.resetFilter = resetFilter;
var clearRecentSearch = function clearRecentSearch() {
  return {
    type: _constants.CLEAR_RECENT_SEARCH
  };
};
exports.clearRecentSearch = clearRecentSearch;
var removeSelectedRecent = function removeSelectedRecent(keyword) {
  return {
    type: _constants.REMOVE_SELECTED_RECENT,
    payload: keyword
  };
};
exports.removeSelectedRecent = removeSelectedRecent;
var applyFilter = function applyFilter(filters) {
  return {
    type: _constants.APPLY_FILTER,
    payload: filters
  };
};
exports.applyFilter = applyFilter;