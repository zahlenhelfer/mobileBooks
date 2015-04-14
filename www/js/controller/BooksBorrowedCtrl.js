"use strict";
angular.module('bookMonkeyMobile')
  .controller('BooksBorrowedCtrl', function ($scope, $log, BookDataService) {
    // FIXME: bitte einheitlich machen "function(" oder "function ("

        //don´t forget the promise :)
        BookDataService.getBorrowedBooks().then(function(res) {
            $scope.books = res.data;
        }, function(error) {
          $log.log('An error occurred!', error);
        });

        $scope.putBack = function (book) {
            //api-call for Backend
            BookDataService.putBack(book); // FIXME: hier sollte ein promise benutzt werden
            //scope-call
            $scope.books[$scope.books.indexOf(book)].bookStatus = 'shelf';
        };
    });