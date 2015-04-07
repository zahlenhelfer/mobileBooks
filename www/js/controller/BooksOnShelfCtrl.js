/**
 * Created by marcusross on 06.04.15.
 */
angular.module('starter.controllers')
    .controller('BooksOnShelfCtrl', function ($scope, BookDataService) {

        //don´t forget the promise :)
        BookDataService.getOnTheShelfBooks().then(function(res) {
            $scope.books = res.data;
        }, function(error) {
            console.log('An error occurred!', error);
        });

        $scope.remove = function (book) {
            //api_call -> remove from backend
            BookDataService.remove(book);
            // after it, remove from $scope
            $scope.books.splice($scope.books.indexOf(book),1);
        };
    });
