// Ionic Starter App
'use strict';
angular.module('bookMonkeyMobile', ['ngCordova', 'ionic', 'angular.filter'])
  // FIXME: best practice - jede abhängigkeit in eigener zeile (merge hell im team)

  .run(function ($ionicPlatform, $rootScope, $log) {
    // FIXME: run block in config verzeichnis verschieben. z.b. config/ionic.js
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
    $log.log('Starte den State-Logger');
    $rootScope.$on('$stateChangeStart',
      function (event, toState, toParams, fromState, fromParams) {
        $log.log("------------")
        $log.log("FromState", fromState);
        $log.log("toState", toState);
        // logic
      });
  });

