'use strict';
angular.module('bookMonkeyMobile')
  .controller('NewBookController', function ($scope, $log, $state, $cordovaCamera, BookDataService) {

    $scope.showSpinner = false;
    $scope.newBook = {};
    $scope.submitBtnLabel = 'save book';

    //TODO hier sollte aber besser der CameraController genutzt werden, oder mache ich da besser einen Service?
    //TODO wir müssen reden :)
    $scope.takePictureBase64 = function () {
      $log.log('NewBookController - takePictureBase64');
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

$scope.submitBook = function () {
  $log.log($scope.newBook);

  // add the bookStatus property
  $scope.newBook.bookStatus = 'shelf';
  // save to the backend
  BookDataService.storeBook($scope.newBook).then(function () {
    $state.go('app.ontheshelf');
    $log.log('Book submitted');
  }, function (error) {
    $log.log('An error occurred!', error);
  });
};

$scope.cancelSubmit = function () {
  $log.log('Cancel the new book');
};

});
