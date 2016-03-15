// ==UserScript==
// @name         Steam Review filter
// @namespace    https://raw.githubusercontent.com/somoso/steam_user_review_filter/master/steam_user_review_filter.js
// @version      0.2
// @description  try to filter out the crap on steam
// @author       somoso
// @match        http://store.steampowered.com/app/*
// @grant        none
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==
/* jshint -W097 */
'use strict';

//var searchStr = "#app_reviews_hash";
var searchStr = ".review_box";

console.log("Starting this code");

var arr = $(searchStr).find(".content");

console.log(arr);

for (i = 0; i < arr.length; i++) {
    
    var urgh = arr[i].innerText;
    if (urgh.includes('10/10')) {
        $(arr[i]).remove();
    } else if (urgh.match(/ign/i)) {
        $(arr[i]).remove();
    } 
  
}

console.log("Ending this code");
