/**
 * Created by marcusross on 06.04.15.
 */
angular.module('starter.controllers')
    .controller('BooksBorrowedCtrl', function ($scope, Books) {
        $scope.books = Books.getBorrowed();
        $scope.putBack = function (book) {
            //Books.putBack(book);
            book.bookStatus='shelf';
        };
    });