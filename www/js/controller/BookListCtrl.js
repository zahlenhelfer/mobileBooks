/**
 * Created by marcusross on 30.03.15.
 */myapp
angular.module('bookMonkeyMobile').controller('BookListCtrl', function ($scope, $state, BookDataService) {

        //don´t forget the promise :)
  BookDataService.getBooks().then(function (res) {
            $scope.books = res.data;
  }, function (error) {
            console.log('An error occurred!', error);
        });

        $scope.remove = function (book) {
          BookDataService.remove(book).then(function (res) {
            $scope.books.slice(book);
            $state.go('app.ontheshelf');
          }, function (error) {
            console.log('An error occurred!', error);
          });
        };
    });