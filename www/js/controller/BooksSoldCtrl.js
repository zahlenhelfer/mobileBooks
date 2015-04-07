/**
 * Created by marcusross on 06.04.15.
 */
angular.module('starter.controllers')
    .controller('BooksSoldCtrl', function ($scope, BookDataService) {

        //don´t forget the promise :)
        BookDataService.getSoldBooks().then(function(res) {
            $scope.books = res.data;
        }, function(error) {
            console.log('An error occurred!', error);
        });

    });
