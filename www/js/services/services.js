"use strict";
angular.module('starter.services', [])
    .factory('BookDataService', function ($http) {
        var srv = {};

        srv._baseUrl = 'http://localhost:4730';

        // Service implementation
        srv.getBookByIsbn = function (isbn) {
            return $http.get(
                srv._baseUrl + '/api/books/' + isbn
            );
        };

        srv.getBooks = function () {
            return $http.get(
                srv._baseUrl + '/api/books'
            );
        };

        srv.getOnTheShelfBooks = function () {
            return $http.get(
                srv._baseUrl + '/api/booksontheshelf'
            );
        };

        srv.getBorrowedBooks = function () {
            return $http.get(
                srv._baseUrl + '/api/booksborrowed'
            );
        };

        srv.getSoldBooks = function () {
            return $http.get(
                srv._baseUrl + '/api/bookssold'
            );
        };

        srv.getBooksByStatus = function (status) {
            return $http.get(
                srv._baseUrl + '/api/booksbystatus/' + status
            );
        };

        srv.getTags = function () {
            return $http.get(
                srv._baseUrl + '/api/tags'
            );
        };

        srv.storeBook = function (book) {
            return $http.post(
                srv._baseUrl + '/api/books', book
            );
        };

        srv.updateBook = function (book) {
            return $http.put(
                srv._baseUrl + '/api/books/' + book.isbn, book
            );
        };

        srv.deleteBookByIsbn = function (isbn) {
            return $http.delete(
                srv._baseUrl + '/api/books/' + isbn
            );
        };

        // Public API
        return {
            getBookByIsbn: function (isbn) {
                return srv.getBookByIsbn(isbn);
            },
            getBooks: function () {
                return srv.getBooks();
            },
            getTags: function () {
                return srv.getTags();
            },
            storeBook: function (book) {
                return srv.storeBook(book);
            },
            updateBook: function (book) {
                return srv.updateBook(book);
            },
            sellBook:function (book){
                return srv.updateBook(book);
            },
            lendBook:function (book){
                return srv.updateBook(book);
            },
            getSoldBooks: function () {
                return srv.getSoldBooks();
            },
            getBorrowedBooks: function () {
                return srv.getBorrowedBooks();
            },
            getOnTheShelfBooks: function () {
                return srv.getOnTheShelfBooks();
            },
            getBooksByStatus: function (status) {
                return srv.getBooksByStatus();
            },
            deleteBookByIsbn: function (isbn) {
                return srv.deleteBookByIsbn(isbn);
            }
        };
    });