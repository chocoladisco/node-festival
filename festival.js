var exec = require('child_process').exec;

module.exports.toSpeech = function(text, filename) {
	return exec('echo ' + text + ' | text2wave | lame - ' + filename);
};
