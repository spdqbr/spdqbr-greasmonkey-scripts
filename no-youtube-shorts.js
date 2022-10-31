// ==UserScript==
// @name         No shorts
// @namespace    http://tampermonkey.net/
// @homepage     https://github.com/spdqbr/spdqbr-greasmonkey-scripts
// @updateURL    https://raw.githubusercontent.com/spdqbr/spdqbr-greasmonkey-scripts/stable/no-youtube-shorts.js
// @downloadURL  https://raw.githubusercontent.com/spdqbr/spdqbr-greasmonkey-scripts/stable/no-youtube-shorts.js
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
