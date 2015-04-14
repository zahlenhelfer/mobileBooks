'use strict';
angular.module('bookMonkeyMobile')
  .controller('BookListController', function ($scope, $log, $state, BookDataService) {

    //don´t forget the promise :)
    BookDataService.getBooks().then(function (books) {
      $scope.books = books;
    }, function (error) {
      $log.log('An error occurred!', error);
    });

    $scope.doRefresh = function () {
      BookDataService.getBooks().then(function (books) {
        $scope.books = books;
      }, function (error) {
        $log.log('An error occurred!', error);
      }).finally(function () {
        // Stop the ion-refresher from spinning
        $scope.$broadcast('scroll.refreshComplete');
      });
    };

    $scope.removeBook = function (book) {
      // backend api-call as promise
      BookDataService.deleteBookByIsbn(book.isbn).then(function () {
        // remove from $scope-model
        $scope.books.splice($scope.books.indexOf(book), 1);
      }, function (error) {
        $log.log('An error occurred!', error);
      });
    };

    $scope.data = {};
    $scope.clearSearch = function () {
      $scope.data.searchQuery = '';
    };

  });