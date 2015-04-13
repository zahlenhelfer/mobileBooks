"use strict";
angular.module('bookMonkeyMobile')
  .controller('BookListCtrl', function ($scope, $log, $state, BookDataService) {

    //don´t forget the promise :)
    BookDataService.getBooks().then(function (res) {
      $scope.books = res.data;
    }, function (error) {
      $log.log('An error occurred!', error);
    });

    $scope.remove = function (book) {
      BookDataService.remove(book).then(function (res) {
        $scope.books.slice(book);
        $state.go('app.ontheshelf');
      }, function (error) {
        $log.log('An error occurred!', error);
      });
    };
  });