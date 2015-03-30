// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

    .run(function ($ionicPlatform,$rootScope,$log) {
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
        $log.log('Starte den Schrott');
        $rootScope.$on('$stateChangeStart',
            function(event, toState, toParams, fromState, fromParams){
                $log.log("------------")
                $log.log("FromState", fromState);
                $log.log("toState",toState);
                // logic
            });
    })

    .config(function ($stateProvider, $urlRouterProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider

            // setup an abstract state for the tabs directive
            //.state('tab', {
            //    url: "/tab",
            //    abstract: true,
            //    templateUrl: "templates/tabs.html"
            //})

            // Each tab has its own nav history stack:

            //.state('tab.books', {
            //    url: '/books',
            //    views: {
            //        'tab-books': {
            //            templateUrl: 'templates/tab-books.html',
            //            controller: 'BooksCtrl'
            //        }
            //    }
            //})
            //.state('tab.book-detail', {
            //    url: '/books/:bookIsbn',
            //    views: {
            //        'tab-books': {
            //            templateUrl: 'templates/book-detail.html',
            //            controller: 'BookDetailCtrl'
            //        }
            //    }
            //})
            //
            //.state('tab.settings', {
            //    url: '/settings',
            //    views: {
            //        'tab-settings': {
            //            templateUrl: 'templates/tab-settings.html',
            //            controller: 'SettingsCtrl'
            //        }
            //    }
            //})

            .state('app', {
                url: "/app",
                abstract: true,
                templateUrl: "templates/side-menu.html"
            })

            .state('app.ontheshelf', {
                url: "/ontheshelf",
                views: {
                    'menuContent': {
                        templateUrl: "templates/ontheshelf.html"
                    }
                }
            })
            .state('app.borrowed', {
                url: "/borrowed",
                views: {
                    'menuContent': {
                        templateUrl: "templates/borrowed.html"
                    }
                }
            })
            .state('app.sold', {
                url: "/sold",
                views: {
                    'menuContent': {
                        templateUrl: "templates/sold.html"
                    }
                }
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/ontheshelf');

    });
