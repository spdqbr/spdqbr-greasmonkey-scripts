// ==UserScript==
// @name         NYT Fixer
// @namespace    http://tampermonkey.net/
// @homepage     https://github.com/spdqbr/spdqbr-greasmonkey-scripts
// @updateURL    https://raw.githubusercontent.com/spdqbr/spdqbr-greasmonkey-scripts/stable/nyt-fixer.js
// @downloadURL  https://raw.githubusercontent.com/spdqbr/spdqbr-greasmonkey-scripts/stable/nyt-fixer.js
// @version      0.0.1
// @description  Remove overlays from NYT
// @author       spdqbr@gmail.com
// @match        *://www.nytimes.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    window.setInterval(function(){
        try{
            document.querySelector('.css-mcm29f').style.position='initial';
            document.querySelector('#gateway-content, .css-1bd8bfl').remove();
            document.querySelector('.css-gx5sib').remove();
        }catch(e){
        }
    }, 1000)
})();
