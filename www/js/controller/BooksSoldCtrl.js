/**
 * Created by marcusross on 06.04.15.
 */
angular.module('starter.controllers')
    .controller('BooksSoldCtrl', function ($scope, Books) {
        $scope.books = Books.getSold();
    });
