function filter_steam(content) {
    if (content.includes('10/10')) {
        return true;
    } else if (content.match(/\bign\b/i)) {
        return true;
    } else if (content.match(/\bbest ([A-Za-z0-9_-]+ ){1,3}ever( made)?\b/i)) {
        return true;
    }
    return false;
}