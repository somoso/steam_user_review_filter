// ==UserScript==
// @name         Steam Review filter
// @namespace    https://gist.githubusercontent.com/somoso/8f359c59b3e7a1729e56/raw/eee8bdc828621527776c0e98daf2ca3805781fa3/steam_review_filter
// @version      0.2
// @description  try to filter out the crap on steam
// @author       You
// @match        http://store.steampowered.com/app/*
// @grant        none
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==
/* jshint -W097 */
'use strict';

// Your code here...

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