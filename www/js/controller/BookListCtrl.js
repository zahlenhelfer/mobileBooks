/**
 * Created by marcusross on 30.03.15.
 */
angular.module('starter.controllers',['angular.filter'])
    .controller('BookListCtrl', function ($scope, Books) {
        $scope.books = Books.all();
        $scope.remove = function (book) {
            Books.remove(book);
        }
    });