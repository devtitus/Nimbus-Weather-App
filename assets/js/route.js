/**
 * @license MIT
 * @fileoverview Manage all routes
 * @copyright Melwyn 2024 All rights reserved
 * @author Melwyn <m.works.gd@gmail.com>
 */

"use strict";

import { updateWeather, error404 } from "./app.js";
const defaultLocation = "#/weather?Lat=20.5937&lon=78.9629"; //India

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
 *
 * @param {string} query searched entry
 */

const searchedLocation = (query) => updateWeather(...query.split("&"));
//updateWeather ("Lat=51.5073219", "lon=0.1276474")

const route = new Map([
  ["/current-location", currentLocation],
  ["/weather", searchedLocation],
  ["/", () => window.location.hash = "#/current-location"], // Default route for home page
]);

const checkHash = function () {
  const requestURL = window.location.hash.slice(1);

  const [path, query] = requestURL.includes("?")
    ? requestURL.split("?")
    : [requestURL];

  route.get(path) ? route.get(path)(query) : error404();
};

window.addEventListener("hashchange", checkHash);

window.addEventListener("load", function () {
  if (!window.location.hash) {
    window.location.hash = "#/current-location";
  } else {
    checkHash();
  }
});