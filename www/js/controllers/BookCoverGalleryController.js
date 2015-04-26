'use strict';
angular.module('bookMonkeyMobile')
  .controller('CameraController', function ($scope, $log) {

    $scope.images = [];
    $scope.loadImages = function () {
      for (var i = 100; i > 0; i--) {
        $scope.images.push({id: i, src: 'http://placehold.it/50x50'});
      }
    };

  });
