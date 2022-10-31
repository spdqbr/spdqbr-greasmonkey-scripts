// ==UserScript==
// @name         Reddit Sidebar Remover
// @namespace    http://tampermonkey.net/
// @homepage     https://github.com/spdqbr/spdqbr-greasmonkey-scripts
// @updateURL    https://raw.githubusercontent.com/spdqbr/spdqbr-greasmonkey-scripts/stable/reddit-sidebar-remover.js
// @downloadURL  https://raw.githubusercontent.com/spdqbr/spdqbr-greasmonkey-scripts/stable/reddit-sidebar-remover.js
// @version      0.1
// @description  Allow collapsing of the reddit sidebar for verticle monitors
// @author       spdqbr@gmail.com
// @match        http://old.reddit.com/*
// @match        https://old.reddit.com/*
// @match        http://*.reddit.com/*
// @match        https://*.reddit.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var tabmenu = document.getElementsByClassName("tabmenu")[0]
    var li = document.createElement('li')
    var a = document.createElement('a')
    a.onclick = function() {
        var side = document.getElementsByClassName("side")[0]
        if ( side.style.display === "none" ) {
            side.style.display = "block";
        } else {
            side.style.display = "none";
        }
    }
    a.href="#"
    a.class="choice"
    a.text="Toggle Sidebar"
    li.appendChild(a)
    tabmenu.appendChild(li);


    //document.getElementsByClassName("side")[0].remove()
    document.getElementsByClassName("side")[0].style.display="None"
})();
