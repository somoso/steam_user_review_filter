// ==UserScript==
// @name         Steam Review filter
// @namespace    https://github.com/somoso/steam_user_review_filter/raw/master/steam_user_review_filter.user.js
// @version      0.32
// @description  try to filter out the crap on steam
// @author       somoso, jbordoe
// @match        http://store.steampowered.com/app/*
// @grant        none
// @require      http://code.jquery.com/jquery-latest.js
// @require      https://github.com/somoso/steam_user_review_filter/raw/master/steam_filter.js
// ==/UserScript==
/* jshint -W097 */
'use strict';

var searchStr = ".review_box";

console.log("Starting steam user review filter");

var reviews = $(searchStr);

for (var i = 0; i < reviews.length; i++) {
    if ($(reviews[i]).hasClass('partial')) {
        continue;
    }
    
    if (filter_steam(reviews[i].innerText)) {
        $(reviews[i]).remove();
    }
}

console.log("Ending steam user review filter");
