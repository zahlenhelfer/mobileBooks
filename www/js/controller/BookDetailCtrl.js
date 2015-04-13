"use strict";
angular.module('bookMonkeyMobile')
  .controller('BookDetailCtrl', function ($scope, $stateParams, $state, $log, $ionicPopover, BookDataService) {

    //don´t forget the promise :)
    BookDataService.getBookByIsbn($stateParams.bookIsbn).then(function (res) {
      $scope.book = res.data;
    }, function (error) {
      $log.log("------------");
      $log.log('An error occurred!', error);
    });

    $scope.lendBook = function (book) {
      $scope.book.bookStatus = 'borrow';
      BookDataService.lendBook(book).then(function () {
        $state.go('app.borrowed');
      }, function (error) {
        $log.log('An error occurred!', error);
      });
    };
    $scope.sellBook = function (book) {
      $scope.book.bookStatus = 'sold';
      BookDataService.sellBook(book).then(function () {
        $state.go('app.sold');
      }, function (error) {
        $log.log('An error occurred!', error);
      });
    };
    $scope.deleteBook = function (isbn) {
      BookDataService.deleteBookByIsbn(isbn).then(function () {
        $scope.popover.hide();
        $state.transitionTo('app.ontheshelf', $stateParams, {
          reload: true, inherit: false, notify: true
        });
      }, function (error) {
        $log.log('An error occurred!', error);
      });
    };

    $ionicPopover.fromTemplateUrl('templates/PopoverDeleteBook.html', {
      scope: $scope
    }).then(function (popover) {
      $scope.popover = popover;
    });

    $scope.openPopover = function ($event) {
      $scope.popover.show($event);
    };
    $scope.closePopover = function () {
      $scope.popover.hide();
    };
    //Cleanup the popover when we're done with it!
    $scope.$on('$destroy', function () {
      $scope.popover.remove();
    });
  })