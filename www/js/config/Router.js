angular.module('bookMonkeyMobile')
  .config(function ($stateProvider, $urlRouterProvider) {
    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/SideMenu.html'
      })

      .state('app.ontheshelf', {
        url: '/ontheshelf',
        views: {
          'menuContent': {
            templateUrl: 'templates/BooksOnShelf.html',
            controller: 'BooksOnShelfController'
          }
        }
      })
      .state('app.ontheshelf-detail', {
        url: '/ontheshelf/:bookIsbn',
        views: {
          'menuContent': {
            templateUrl: 'templates/BookDetail.html',
            controller: 'BookDetailController'
          }
        }
      })

      .state('app.borrowed', {
        url: '/borrowed',
        views: {
          'menuContent': {
            templateUrl: 'templates/BooksBorrowed.html',
            controller: 'BooksBorrowedController'
          }
        }
      })
      .state('app.camera', {
        url: '/camera',
        views: {
          'menuContent': {
            templateUrl: 'templates/CoverGallery.html',
            controller: 'CameraController'
          }
        }
      })
      .state('app.newbook', {
        url: '/newbook',
        views: {
          'menuContent': {
            templateUrl: 'templates/NewBook.html',
            controller: 'NewBookController'
          }
        }
      })
      .state('app.all', {
        url: '/all',
        views: {
          'menuContent': {
            templateUrl: 'templates/BookList.html',
            controller: 'BookListController'
          }
        }
      });


    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/ontheshelf');

  });