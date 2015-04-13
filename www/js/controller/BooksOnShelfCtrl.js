"use strict";
angular.module('bookMonkeyMobile').controller('BooksOnShelfCtrl', function ($scope, $state, $log, BookDataService) {

  //don´t forget the promise
  BookDataService.getOnTheShelfBooks().then(function (res) {
    $scope.books = res.data;
  }, function (error) {
    $log.log('An error occurred!', error);
  });

  $scope.addNewBook = function (book) {
    $log.log('Lets add a new book');
    // go to the proper state for that
    $state.go('app.newbook');
  };

  $scope.remove = function (book) {
    // backend api-call as promise
    BookDataService.deleteBookByIsbn(isbn).then(function () {
      // remove from $scope-model
      $scope.books.splice($scope.books.indexOf(book), 1);
    }, function (error) {
      $log.log('An error occurred!', error);
    });
  };
});
