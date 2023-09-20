"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectMin = exports.selectMax = exports.selectFilter = void 0;
/* eslint-disable no-plusplus */
/* eslint-disable no-else-return */
var selectFilter = function selectFilter(products, filter) {
  if (!products || products.length === 0) return [];
  var keyword = filter.keyword.toLowerCase();
  return products.filter(function (product) {
    var isInRange = filter.maxPrice ? product.price >= filter.minPrice && product.price <= filter.maxPrice : true;
    var matchKeyword = product.keywords ? product.keywords.includes(keyword) : true;
    // const matchName = product.name ? product.name.toLowerCase().includes(keyword) : true;
    var matchDescription = product.description ? product.description.toLowerCase().includes(keyword) : true;
    var matchBrand = product.brand ? product.brand.toLowerCase().includes(filter.brand) : true;
    return (matchKeyword || matchDescription) && matchBrand && isInRange;
  }).sort(function (a, b) {
    if (filter.sortBy === 'name-desc') {
      return a.name < b.name ? 1 : -1;
    } else if (filter.sortBy === 'name-asc') {
      return a.name > b.name ? 1 : -1;
    } else if (filter.sortBy === 'price-desc') {
      return a.price < b.price ? 1 : -1;
    }
    return a.price > b.price ? 1 : -1;
  });
};

// Select product with highest price
exports.selectFilter = selectFilter;
var selectMax = function selectMax(products) {
  if (!products || products.length === 0) return 0;
  var high = products[0];
  for (var i = 0; i < products.length; i++) {
    if (products[i].price > high.price) {
      high = products[i];
    }
  }
  return Math.floor(high.price);
};

// Select product with lowest price
exports.selectMax = selectMax;
var selectMin = function selectMin(products) {
  if (!products || products.length === 0) return 0;
  var low = products[0];
  for (var i = 0; i < products.length; i++) {
    if (products[i].price < low.price) {
      low = products[i];
    }
  }
  return Math.floor(low.price);
};
exports.selectMin = selectMin;