/**
 * Created by marcusross on 06.04.15.
 */
angular.module('starter.controllers')
    .controller('BooksBorrowedCtrl', function ($scope, BookDataService) {

        //don´t forget the promise :)
        BookDataService.getBorrowedBooks().then(function(res) {
            $scope.books = res.data;
        }, function(error) {
            console.log('An error occurred!', error);
        });

        $scope.putBack = function (book) {
            //api-call for Backend
            BookDataService.putBack(book);
            //scope-call
            $scope.books[$scope.books.indexOf(book)].bookStatus = 'shelf';
        };
    });