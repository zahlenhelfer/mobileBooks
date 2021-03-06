'use strict';
angular.module('bookMonkeyMobile')
  .factory('CameraService', function ($log, $cordovaCamera) {

    var takePictureInBase64Format = function () {
      $log.log('CameraService - takePictureInBase64Format Method called');
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
        $log.log('Bilddaten sind base64');
        return 'data:image/jpeg;base64,' + imageData;
      }, function (err) {
        $log.log('Fehler im CameraSerivce:'+ err);
        return err;
      });
    };

    // Public API
    return {
      takePictureBase64: takePictureInBase64Format
    };
  });