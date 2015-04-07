/**
 * Created by marcusross on 06.04.15.
 */
angular.module('starter.controllers')
    .controller('BooksOnShelfCtrl', function ($scope, $state, BookDataService) {

        //don´t forget the promise
        BookDataService.getOnTheShelfBooks().then(function (res) {
            $scope.books = res.data;
        }, function (error) {
            console.log('An error occurred!', error);
        });

        $scope.addNewBook = function (book) {
            console.log('Lets add a book');
            // go to the proper state for that
            $state.go('app.newbook');
        };

        $scope.remove = function (book) {
            // backend api-call as promise
            BookDataService.deleteBookByIsbn(isbn).then(function() {
                // remove from $scope-model
                $scope.books.splice($scope.books.indexOf(book), 1);
            }, function(error) {
                console.log('An error occurred!', error);
            });
        };
    });
