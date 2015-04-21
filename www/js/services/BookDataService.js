'use strict';
angular.module('bookMonkeyMobile')
  .factory('BookDataService', function ($http, Config) {
    var srv = {};

    var _baseUrl = Config.baseUrl;

    function dataReturn(response) {
      return response.data;
    }

    // Service implementation
    srv.getBookByIsbn = function (isbn) {
      return $http.get(
        _baseUrl + '/api/books/' + isbn
      ).then(dataReturn);
    };

    srv.getBooks = function () {
      return $http.get(
        _baseUrl + '/api/books'
      ).then(dataReturn);
    };

    srv.getOnTheShelfBooks = function () {
      return $http.get(
        _baseUrl + '/api/booksontheshelf'
      ).then(dataReturn);
    };

    srv.getBorrowedBooks = function () {
      return $http.get(
        _baseUrl + '/api/booksborrowed'
      ).then(dataReturn);
    };

    srv.getSoldBooks = function () {
      return $http.get(
        _baseUrl + '/api/bookssold'
      ).then(dataReturn);
    };

    srv.getBooksByStatus = function (status) {
      return $http.get(
        _baseUrl + '/api/booksbystatus/' + status
      ).then(dataReturn);
    };

    srv.storeBook = function (book) {
      return $http.post(
        _baseUrl + '/api/books', book
      ).then(dataReturn);
    };

    srv.updateBook = function (book) {
      return $http.put(
        _baseUrl + '/api/books/' + book.isbn, book
      ).then(dataReturn);
    };

    srv.deleteBookByIsbn = function (isbn) {
      return $http.delete(
        _baseUrl + '/api/books/' + isbn
      ).then(dataReturn);
    };

    // Public API
    return {
      getBookByIsbn: srv.getBookByIsbn,
      deleteBookByIsbn: srv.deleteBookByIsbn,
      getBooks: srv.getBooks,
      getOnTheShelfBooks: srv.getOnTheShelfBooks,
      storeBook: srv.storeBook,
      updateBook: srv.updateBook,
      lendBook: srv.updateBook,
      putBackBook: srv.updateBook,
      getBorrowedBooks: srv.getBorrowedBooks,
      getBooksByStatus: srv.getBooksByStatus
    };
  });