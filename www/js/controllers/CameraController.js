'use strict';
angular.module('bookMonkeyMobile')
  .controller('CameraController', function ($scope, $log, $cordovaCamera) {

    $scope.takePictureBase64 = function () {
      $log.log('Starting the camera-plugin');
      var options;
      options = {
        quality: 75,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.CAMERA,
        allowEdit: true,
        encodingType: Camera.EncodingType.JPEG,
        targetWidth: 300,
        targetHeight: 300,
        popoverOptions: CameraPopoverOptions,
        saveToPhotoAlbum: false
      };

      $cordovaCamera.getPicture(options).then(function (imageData) {
        $scope.newBook.cover = 'data:image/jpeg;base64,' + imageData;
      }, function (err) {
        $log.log(err);
      });

    };

    $scope.images = [];
    $scope.loadImages = function () {
      for (var i = 100; i > 0; i--) {
        $scope.images.push({id: i, src: 'http://placehold.it/50x50'});
      }
    };

  });
