/**
 * Created by marcusross on 30.03.15.
 */
angular.module('starter.controllers')
    .controller('BookDetailCtrl', function ($scope, $stateParams, Books) {
        $scope.book = Books.get($stateParams.bookIsbn);
        $scope.lendBook = function (book) {
            //Books.lendBook(book);
            book.bookStatus='borrow';
        };
        $scope.sellBook = function (book) {
            //Books.sellBook(book);
            book.bookStatus='sold';
        };
        $scope.remove = function (book) {
            //Books.remove(book);
        };
    })