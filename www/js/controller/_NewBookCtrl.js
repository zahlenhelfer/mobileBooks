angular.module('bookMonkeyMobile')
  .controller('NewBookCtrl', function ($scope, $log, $state, BookDataService) {

    $scope.newBook = {};
    $scope.submitBtnLabel = 'save book';

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
