/*global cordova, module*/

var AudioInterruption = {
  addListener: function(successCallback, errorCallback) {
    var errorCallback = errorCallback || function() {};
    cordova.exec(successCallback, errorCallback, 'AudioInterruption', 'addListener');
  }
};

module.exports = AudioInterruption;
