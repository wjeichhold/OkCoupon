var request = require('request');
var key = require('./config.js').apiKey;

var couponHelper = function(zip, callback) {
	
	var options = {
		url: `http://api.sqoot.com/v2/deals?api_key=${key}&location=${zip}&order=expires_at`
	}

	request.get(options, function(err, res, body) {
		if (err) {
			console.log(err)
		}
		callback(JSON.parse(body));
	})

}

module.exports.couponHelper = couponHelper