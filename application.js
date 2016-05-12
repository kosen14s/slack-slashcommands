
/*
fs.readFile('app.json', 'utf8', function (err, text) {

});
*/
exports.help = function(){
	return {
		"text": "準備中"
	}
};

exports.error = function(text){
	return {
		"text": "I don't kown " + text + "\nPlease enter 'help'",
	}
};

exports.hello = function(){
	return {
		"response_type": "in_channel",
		"text": "Hello",
	};
};

exports.muscle = function(){
	return {
		"response_type": "in_channel",
		"text": ":muscle:",
	};
}
