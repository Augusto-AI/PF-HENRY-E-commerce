"use strict";

var _workboxPrecaching = require("workbox-precaching");
var _workboxRouting = require("workbox-routing");
var _workboxStrategies = require("workbox-strategies");
var _workboxExpiration = require("workbox-expiration");
var _workboxCore = require("workbox-core");
(0, _workboxPrecaching.precacheAndRoute)(self.__WB_MANIFEST);
var currentCacheNames = Object.assign({
  precacheTemp: _workboxCore.cacheNames.precache + "-temp"
}, _workboxCore.cacheNames);
currentCacheNames.fonts = "googlefonts";
(0, _workboxRouting.registerRoute)(/https:\/\/fonts.(?:googleapis|gstatic).com\/(.*)/, new _workboxStrategies.CacheFirst({
  cacheName: currentCacheNames.fonts,
  plugins: [new _workboxExpiration.ExpirationPlugin({
    maxEntries: 30
  })]
}), "GET");

// clean up old SW caches
self.addEventListener("activate", function (event) {
  event.waitUntil(caches.keys().then(function (cacheNames) {
    var validCacheSet = new Set(Object.values(currentCacheNames));
    return Promise.all(cacheNames.filter(function (cacheName) {
      return !validCacheSet.has(cacheName);
    }).map(function (cacheName) {
      console.log("deleting cache", cacheName);
      return caches["delete"](cacheName);
    }));
  }));
});