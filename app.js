var http = require('http');
var fs = require('fs');

var file = fs.createWriteStream("icn.json");
var request = http.get("https://api.coinmarketcap.com/v1/ticker/iconomi/", function(response) {
	response.pipe(file);
});

var icnObj = JSON.parse(fs.readFileSync('icn.json', 'utf8'));
console.log(icnObj.percent_change_24h);
