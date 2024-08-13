/**
 * @license MIT
 * @fileoverview All api related stuff like api_key, api request etc.
 * @copyright Melwyn 2024 All rights reserved
 * @autor Melwyn <m.works.gd@gmail.com>
 */

'use strict';

const api_key = "21c154714f7bb52a2180fe9a997b1c51";

/**
 * Fetch data from server
 * @param {string} URL API url
 * @param {Function} callback callback
 */
export const fetchdata = function (URL, callback) {
    fetch(`${URL}&appid=${api_key}`)
        .then(res => {
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            return res.json();
        })
        .then(data => callback(data))
        .catch(error => {
            console.error("Failed to fetch data:", error);
            throw error;
        });
}

export const url = {
    currentWeather(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&units=metric`;
    },
    forecast(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/forecast?${lat}&${lon}&units=metric`;
    },
    airPollution(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}`;
    },
    reverseGeo(lat, lon) {
        return `https://api.openweathermap.org/geo/1.0/reverse?${lat}&${lon}&limit=5`;
    },
    /**
     * @param {string} query search query
     */
    geo(query) {
        return `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5`;
    }
}