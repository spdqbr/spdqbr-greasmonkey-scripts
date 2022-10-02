// ==UserScript==
// @name         No shorts
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Add scrub bar to Youtube shorts
// @author       spdqbr@gmail.com
// @match        https://www.youtube.com/shorts/*
// @match        https://*.youtube.com/shorts/*
// @match        https://*youtube.com/shorts/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var newUrl = window.location.pathname + "&t=0s"
    location.href = newUrl
})();
