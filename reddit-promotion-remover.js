// ==UserScript==
// @name         Reddit Promotion Remover
// @namespace    http://tampermonkey.net/
// @homepage     https://github.com/spdqbr/spdqbr-greasmonkey-scripts
// @updateURL    https://raw.githubusercontent.com/spdqbr/spdqbr-greasmonkey-scripts/stable/reddit-promotion-remover.js
// @downloadURL  https://raw.githubusercontent.com/spdqbr/spdqbr-greasmonkey-scripts/stable/reddit-promotion-remover.js
// @version      0.1
// @description  Remove promoted posts from reddit
// @author       spdqbr@gmail.com
// @match        http://old.reddit.com/*
// @match        https://old.reddit.com/*
// @match        http://*.reddit.com/*
// @match        https://*.reddit.com/*
// @icon         https://www.google.com/s2/favicons?domain=reddit.com
// @grant        none
// ==/UserScript==

function clean(){
    var promoted = document.getElementsByClassName("promoted")

    console.log("found "+promoted.length+" promoted links")
    for( var i = 0; i < promoted.length; i++){
        promoted[i].parentElement.removeChild(promoted[i])
    }
}

(function() {
    'use strict';
    clean()
    setInterval(clean,30000)
})();
