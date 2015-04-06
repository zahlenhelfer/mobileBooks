/**
 * Created by marcusross on 30.03.15.
 */
angular.module('starter.controllers')
    .controller('SettingsCtrl', function ($scope) {
        $scope.settings = {
            enableFriends: true
        };
    });