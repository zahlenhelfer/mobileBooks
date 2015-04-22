'use strict';
angular.module('bookMonkeyMobile')
  .factory('CameraService', function ($log, $cordovaCamera) {

    var srv = {};

    srv.takePictureBase64 = function () {
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
        $log.log('Bilddaten sind base64 gestreamt');
        return 'data:image/jpeg;base64,' + imageData;
      }, function (err) {
        $log.log(err);
        return err;
      });

    };

    // Public API
    return {
      takePictureBase64: srv.takePictureBase64
    };
  });