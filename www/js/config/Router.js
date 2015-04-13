angular.module('bookMonkeyMobile')
  .config(function ($stateProvider, $urlRouterProvider) {
    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

      .state('app', {
        url: "/app",
        abstract: true,
        templateUrl: "templates/SideMenu.html"
      })

      .state('app.ontheshelf', {
        url: "/ontheshelf",
        views: {
          'menuContent': {
            templateUrl: "templates/BooksOnShelf.html",
            controller: 'BooksOnShelfCtrl'
          }
        }
      })
      .state('app.ontheshelf-detail', {
        url: '/ontheshelf/:bookIsbn',
        views: {
          'menuContent': {
            templateUrl: 'templates/BookDetail.html',
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
      .state('app.camera', {
        url: "/camera",
        views: {
          'menuContent': {
            templateUrl: "templates/CoverGallery.html",
            controller: 'cameraCtrl'
          }
        }
      })
      .state('app.newbook', {
        url: "/newbook",
        views: {
          'menuContent': {
            templateUrl: "templates/NewBook.html",
            controller: 'NewBookCtrl'
          }
        }
      })
      .state('app.all', {
        url: "/all",
        views: {
          'menuContent': {
            templateUrl: "templates/BookList.html",
            controller: 'BookListCtrl'
          }
        }
      });


    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/ontheshelf');

  });