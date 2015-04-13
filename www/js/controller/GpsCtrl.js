"use strict";
angular.module('bookMonkeyMobile')
  .controller('GpsCtrl', function ($cordovaGeolocation, $log) {
  var posOptions = {timeout: 10000, enableHighAccuracy: false};
  $cordovaGeolocation
    .getCurrentPosition(posOptions)
    .then(function (position) {
      var lat = position.coords.latitude;
      var long = position.coords.longitude;
    }, function (err) {
      // error
      $log.log('Ups, an error: ' + err);
    });
});