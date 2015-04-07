/**
 * Created by marcusross on 30.03.15.
 */
angular.module('starter.controllers',['angular.filter'])
    .controller('BookListCtrl', function ($scope, BookDataService) {

        //don´t forget the promise :)
        BookDataService.getBooks().then(function(res) {
            $scope.books = res.data;
        }, function(error) {
            console.log('An error occurred!', error);
        });

        $scope.remove = function (book) {
            //api-call to remove book
            BookDataService.remove(book);
        };
    });