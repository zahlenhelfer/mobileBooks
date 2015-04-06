/**
 * Created by marcusross on 06.04.15.
 */
angular.module('starter.controllers')
    .controller('BooksOnShelfCtrl', function ($scope, Books) {
        $scope.books = Books.getOnShelf();
        $scope.remove = function (book) {
            //Books.remove(book);
            $scope.books.pop(book);
        };
    });
