var http = require('http');
vra fs = require('fs');

var file = fs.createWriteStream("icn.json");
var request = http.get("https://api.coinmarketcap.com/v1/ticker/iconomi/", function(response) {
	response.pipe(file);
});
