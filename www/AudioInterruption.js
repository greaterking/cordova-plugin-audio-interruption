var cordova = require('cordova'),
    exec = require('cordova/exec');

var AudioInterruption = {
  addListener: function(successCallback, errorCallback) {
    var errorCallback = errorCallback || function() {};
    exec(successCallback, errorCallback, "AudioInterruption", "addListener", []);
  }
};

module.exports = AudioInterruption;
