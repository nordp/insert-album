var request = require('browser-request');
		
document.addEventListener("DOMContentLoaded", function(event) {
    request('http://insert-album.appspot.com', function(er, response, body) {
        if(er)
            throw er;
        console.log("I got: " + body);
    });
});