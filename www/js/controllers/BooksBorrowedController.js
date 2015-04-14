'use strict';
angular.module('bookMonkeyMobile')
  .controller('BooksBorrowedController', function ($scope, $state, $log, BookDataService) {

    //don´t forget the promise :)
    BookDataService.getBorrowedBooks().then(function (books) {
      $scope.books = books;
    }, function (error) {
      $log.log('An error occurred!', error);
    });

    $scope.putBack = function (book) {
      $scope.book.bookStatus = 'borrow';
      BookDataService.putBack(book).then(function () {
        $scope.books[$scope.books.indexOf(book)].bookStatus = 'shelf';
        $state.go('app.ontheshelf');
      }, function (error) {
        $log.log('An error occurred!', error);
      });
    };
  });