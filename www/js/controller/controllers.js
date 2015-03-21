angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('BooksCtrl', function($scope, Books) {
  $scope.books = Books.all();
  $scope.remove = function(book) {
    Books.remove(book);
  }
})

.controller('BookDetailCtrl', function($scope, $stateParams, Books) {
  $scope.book = Books.get($stateParams.bookIsbn);
})

.controller('SettingsCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
