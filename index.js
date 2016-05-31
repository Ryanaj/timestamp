'use strict';

var path = process.cwd();
var express = require('express.js');
var moment = require('moment');
var app = express();

app.route('/timestamp')
	.get(function (req, res) {
		res.sendFile(path + '/public/timestamp.html');
	});
	
app.get("/timestamp/:time", function (req, res) {
		
		var timeObj;
		
		//// Compatible arguments
		// Determine if unix timestamp compatible
		if (parseInt(req.params.time, 10)) {
			timeObj = moment.unix(req.params.time);
		} else {
			timeObj = moment(req.params.time);
		}
		
		// General format
		if (timeObj.isValid()) {
		res.json({
			'au Naturel': timeObj.format('MMMM-DD-YYYY'),
			'Unix': timeObj.unix()
		});
			
		}
		
		// Incompatible arguments
		if (!timeObj.isValid()) {
			res.json({
			'au Naturel': 'null',
			'Unix': 'null',
			'response': parseInt(req.params.time)
		});
		}
	});
