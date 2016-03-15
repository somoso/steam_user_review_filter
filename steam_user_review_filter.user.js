// ==UserScript==
// @name         Steam Review filter
// @namespace    https://github.com/somoso/steam_user_review_filter/raw/master/steam_user_review_filter.user.js
// @version      0.3
// @description  try to filter out the crap on steam
// @author       You
// @match        http://store.steampowered.com/app/*
// @grant        none
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==
/* jshint -W097 */
'use strict';

var searchStr = ".review_box";

console.log("Starting steam user review filter");

var reviews = $(searchStr);

for (i = 0; i < reviews.length; i++) {
    if ($(reviews[i]).hasClass('partial')) {
        continue;
    }
    var urgh = reviews[i].innerText;
    if (urgh.includes('10/10')) {
        $(reviews[i]).remove();
    } else if (urgh.match(/\bign\b/i)) {
        $(reviews[i]).remove();
    } 
  
}

console.log("Ending steam user review filter");
