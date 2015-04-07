/**
 * Created by marcusross on 30.03.15.
 */
angular.module('starter')
    .config(function ($stateProvider, $urlRouterProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider

            .state('app', {
                url: "/app",
                abstract: true,
                templateUrl: "templates/side-menu.html"
            })

            .state('app.ontheshelf', {
                url: "/ontheshelf",
                views: {
                    'menuContent': {
                        templateUrl: "templates/ontheshelf.html",
                        controller: 'BooksOnShelfCtrl'
                    }
                }
            })
            .state('app.ontheshelf-detail', {
                url: '/ontheshelf/:bookIsbn',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/book-detail.html',
                        controller: 'BookDetailCtrl'
                    }
                }
            })

            .state('app.borrowed', {
                url: "/borrowed",
                views: {
                    'menuContent': {
                        templateUrl: "templates/borrowed.html",
                        controller: 'BooksBorrowedCtrl'
                    }
                }
            })
            .state('app.sold', {
                url: "/sold",
                views: {
                    'menuContent': {
                        templateUrl: "templates/sold.html",
                        controller: 'BooksSoldCtrl'
                    }
                }
            })
            .state('app.camera', {
                url: "/camera",
                views: {
                    'menuContent': {
                        templateUrl: "templates/cover-gallery.html",
                        controller: 'cameraCtrl'
                    }
                }
            })
            .state('app.newbook', {
                url: "/newbook",
                views: {
                    'menuContent': {
                        templateUrl: "templates/book-new.html",
                        controller: 'newBookCtrl'
                    }
                }
            })
            .state('app.all', {
                url: "/all",
                views: {
                    'menuContent': {
                        templateUrl: "templates/allBooks.html",
                        controller: 'BookListCtrl'
                    }
                }
            });


        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/ontheshelf');

    });