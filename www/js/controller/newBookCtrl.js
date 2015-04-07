/**
 * Created by marcusross on 07.04.15.
 */
angular.module('starter.controllers')
    .controller('newBookCtrl', function ($scope, $state, BookDataService) {

        $scope.newBook = {};
        $scope.submitBtnLabel = 'save book';

        $scope.submitBook = function() {
            console.log($scope.newBook);

            // add the bookStatus property
            $scope.newBook.bookStatus='shelf';
            // save to the backend
            BookDataService.storeBook($scope.newBook).then(function() {
                $state.go('app.ontheshelf');
                console.log('Book submitted');
            }, function(error) {
                console.log('An error occurred!', error);
            });
        };

        $scope.cancelSubmit = function() {
            console.log('Cancel the new book');
        };

    });
