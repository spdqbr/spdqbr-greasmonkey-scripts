// ==UserScript==
// @name         Binary Decode
// @namespace    http://tampermonkey.net/
// @version      0.1
// @homepage     https://github.com/spdqbr/spdqbr-greasmonkey-scripts
// @updateURL    https://raw.githubusercontent.com/spdqbr/spdqbr-greasmonkey-scripts/stable/binary-decode.js
// @downloadURL  https://raw.githubusercontent.com/spdqbr/spdqbr-greasmonkey-scripts/stable/binary-decode.js
// @description  Add binary decode of highlighted text to right-click menu
// @author       spdqbr@gmail.com
// @grant           GM_openInTab
// @run-at          context-menu
// ==/UserScript==

(function() {
    'use strict';

    function getSelectionText() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    return text;
    }

    function binaryAgent(str) {

        var newBin = str.split(" ");
        var binCode = [];

        for (var i = 0; i < newBin.length; i++) {
            binCode.push(String.fromCharCode(parseInt(newBin[i], 2)));
        }
        return binCode.join("");
    }

    alert(binaryAgent(getSelectionText()))
})();
