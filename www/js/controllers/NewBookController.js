'use strict';
angular.module('bookMonkeyMobile')
  .controller('NewBookController', function ($scope, $log, $state, CameraService, BookDataService) {

    $scope.showSpinner = false;
    $scope.newBook = {};
    $scope.submitBtnLabel = 'save book';

    $scope.takePicture = function () {
      $log.log('NewBookController - takePictureBase64 vom Service aufrufen');
      $log.log(JSON.stringify(CameraService));
      $log.log('-----------');

      CameraService.takePictureBase64().then(function (imgdata) {
        $scope.newBook.cover = imgdata;
        $log.log($scope.newBook.cover);
      }, function (error) {
        $log.log('An error occurred!', error);
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
