/**
 * @license MIT
 * @fileoverview Manage all routes
 * @copyright Melwyn 2024 All rights reserved
 * @author Melwyn <m.works.gd@gmail.com>
 */

"use strict";

import { updateWeather, error404 } from "./app.js";
const defaultLocation = "#/current-location"; // Default location

const currentLocation = function () {
  window.navigator.geolocation.getCurrentPosition(
    (res) => {
      const { latitude, longitude } = res.coords;
      updateWeather(`lat=${latitude}`, `lon=${longitude}`);
    },
    (err) => {
      window.location.hash = defaultLocation;
    }
  );
};

/**
 * @param {string} query - The search query
 */
const searchedLocation = (query) => updateWeather(...query.split("&"));

const route = new Map([
  ["/current-location", currentLocation],
  ["/weather", searchedLocation],
]);

const checkHash = function () {
  const requestURL = window.location.hash.slice(1);
  const [path, query] = requestURL.includes("?") ? requestURL.split("?") : [requestURL];

  if (route.has(path)) {
    route.get(path)(query);
  } else {
    error404();
  }
};

window.addEventListener("hashchange", checkHash);

window.addEventListener("load", function () {
  if (!window.location.hash) {
    window.location.hash = defaultLocation;
  } else {
    checkHash();
  }
});