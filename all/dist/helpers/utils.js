"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.displayMoney = exports.displayDate = exports.displayActionMessage = exports.calculateTotal = void 0;
/* eslint-disable no-nested-ternary */
var displayDate = function displayDate(timestamp) {
  var date = new Date(timestamp);
  var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();

  // return day + ' ' + monthNames[monthIndex] + ' ' + year;
  return "".concat(monthNames[monthIndex], " ").concat(day, ", ").concat(year);
};
exports.displayDate = displayDate;
var displayMoney = function displayMoney(n) {
  var format = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  // or use toLocaleString()
  return format.format(n);
};
exports.displayMoney = displayMoney;
var calculateTotal = function calculateTotal(arr) {
  if (!arr || (arr === null || arr === void 0 ? void 0 : arr.length) === 0) return 0;
  var total = arr.reduce(function (acc, val) {
    return acc + val;
  }, 0);
  return total.toFixed(2);
};
exports.calculateTotal = calculateTotal;
var displayActionMessage = function displayActionMessage(msg) {
  var status = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'info';
  var existingToast = document.querySelector('.toast');

  // Mevcut bir 'toast' öğesi varsa, onu kaldır
  if (existingToast) {
    document.body.removeChild(existingToast);
  }
  var div = document.createElement('div');
  var span = document.createElement('span');
  div.className = "toast ".concat(status === 'info' ? 'toast-info' : status === 'success' ? 'toast-success' : 'toast-error');
  span.className = 'toast-msg';
  span.textContent = msg;
  div.appendChild(span);
  document.body.appendChild(div);
  setTimeout(function () {
    try {
      document.body.removeChild(div);
    } catch (e) {
      console.log(e);
    }
  }, 3000);
};
exports.displayActionMessage = displayActionMessage;