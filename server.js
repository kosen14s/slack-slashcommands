var express	    = require('express');
var app	        = express();
var bodyParser 	= require('body-parser');
var application = require('./application');//
//var fs = require('fs');//開発途中

app.use(bodyParser());

var ipaddress = process.env.OPENSHIFT_NODEJS_IP;
var port = process.env.OPENSHIFT_NODEJS_PORT || 8080;

var router = express.Router();

/*
fs.readFile('app.json', 'utf8', function (err, text) {

});
*/

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

router.post('/slack',function(req,res) {
	if(req.body.token == 'Your slack team token'){
		try{
			var sendjson = eval('application.' + req.body.text + '()');
		} catch(e){
			console.log(e);
			sendjson = application.error(req.body.text);
		}
		res.json(sendjson);
		/*
		if(req.body.text == 'hello'){
			res.json({
				"response_type": "in_channel",
				"text": "Hello",
			});
		} else if(req.body.text == 'happy'){
			res.json({
				"response_type": "in_channel",
				"text": "Happy",
			});
		} else if(req.body.text == 'muscle'){
			res.json({
				"response_type": "in_channel",
				"text": ":muscle:",
			});
		}
		res.json();
		*/
	}
});

app.use('/', router);
app.listen(port, ipaddress);
