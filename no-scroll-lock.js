// ==UserScript==
// @name         No Scroll Lock
// @namespace    http://tampermonkey.net/
// @version      1.0
// @homepage     https://github.com/spdqbr/spdqbr-greasmonkey-scripts
// @updateURL    https://raw.githubusercontent.com/spdqbr/spdqbr-greasmonkey-scripts/stable/no-scroll-lock.js
// @downloadURL  https://raw.githubusercontent.com/spdqbr/spdqbr-greasmonkey-scripts/stable/no-scroll-lock.js
// @description  Disable Chrome middle click scroll lock
// @author       spdqbr@gmail.com
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var target;

    window.addEventListener('mousedown', function(mouseEvent) {
        if(mouseEvent.button != 1) {
            return;
        }
        target = mouseEvent.target;

        mouseEvent.preventDefault();
        mouseEvent.stopPropagation();
    }, true);
})();
