if (!String.prototype.includes) {
  String.prototype.includes = function(search, start) {
    'use strict';
    if (typeof start !== 'number') {
      start = 0;
    }

    if (start + search.length > this.length) {
      return false;
    } else {
      return this.indexOf(search, start) !== -1;
    }
  };
}

function filter_steam(content) {
    if (content.match(/\bwould([n't|nt])* ([A-Za-z0-9_-]+ ){1,3}again\b/i)) {
        return true;
    } else if (content.match(/\bign\b/i)) {
        return true;
    } else if (content.match(/\bbest ([A-Za-z0-9_-]+ ){1,3}ever( made)?\b/i)) {
        return true;
    } else if (content.match(/\bsimulator ((19|2\d)\d{2})[ ]*$\b/i)) {
    	return true;
    }
    return false;
}
