'use strict';
angular.module('bookMonkeyMobile')
  .factory('LocationService', function ($log, $cordovaGeolocation) {
    var posOptions = {timeout: 10000, enableHighAccuracy: false};
    $cordovaGeolocation
      .getCurrentPosition(posOptions)
      .then(function (position) {
        var lat = position.coords.latitude;
        var long = position.coords.longitude;
        $log.log('Location gathered!');
        $log.log('Lat:' + lat);
        $log.log('Long' + long);
      }, function (err) {
        // error
        $log.log('Ups, an error: ' + err);
      });
  });