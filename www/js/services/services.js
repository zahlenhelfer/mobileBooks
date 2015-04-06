'use strict';
angular.module('starter.services', [])

    .factory('Books', function() {
        // Some fake testing data
        var books = [
            {
                title       : 'JavaScript für Enterprise-Entwickler',
                subtitle    : 'Professionell programmieren im Browser und auf dem Server',
                isbn        : '978-3-89864-728-1',
                abstract    : 'JavaScript ist längst nicht mehr nur für klassische Webprogrammierer interessant.',
                numPages    : 302,
                author      : 'Oliver Ochs',
                cover		: 'https://www.dpunkt.de/images/cover/list/3522.jpg',
                publisher   : {
                    name: 'dpunkt.verlag',
                    url : 'http://dpunkt.de/'
                },
                bookStatus: 'shelf'
            },
            {
                title       : 'Node.js & Co.',
                subtitle    : 'Skalierbare, hochperformante und echtzeitfähige Webanwendungen professionell in JavaScript entwickeln',
                isbn        : '978-3-89864-829-5',
                abstract    : 'Nach dem Webbrowser erobert JavaScript nun auch den Webserver.',
                numPages    : 334,
                author      : 'Golo Roden',
                cover		: 'https://www.dpunkt.de/images/cover/list/4400.jpg',
                publisher   : {
                    name: 'dpunkt.verlag',
                    url : 'http://dpunkt.de/'
                },
                bookStatus: 'borrow'
            },
            {
                title       : 'CoffeeScript',
                subtitle    : 'Einfach JavaScript',
                isbn        : '978-3-86490-050-1',
                abstract    : 'CoffeeScript ist eine junge, kleine Programmiersprache, die nach JavaScript übersetzt wird.',
                numPages    : 200,
                author      : 'Andreas Schubert',
                cover		: 'https://www.dpunkt.de/images/cover/list/4021.jpg',
                publisher   : {
                    name: 'dpunkt.verlag',
                    url : 'http://dpunkt.de/'
                },
                bookStatus: 'sold'
            }
        ];

        return {
            all: function() {
                return books;
            },
            remove: function(book) {
                books.splice(books.indexOf(book), 1);
            },
            get: function(bookIsbn) {
                for (var i = 0; i < books.length; i++) {
                    if (books[i].isbn === bookIsbn) {
                        return books[i];
                    }
                }
                return null;
            },
            getBorrowed: function() {
                return books.filter(function(book) {
                    return (book.bookStatus === 'borrow');
                });
            },
            lendBook: function(book) {
                // change the Status of this book to
                book.bookStatus='borrow';
            },
            putBack: function(book) {
                // change the Status of this book to
                book.bookStatus='shelf';
            },
            sellBook: function(book) {
                // change the Status of this book to
                book.bookStatus='sold';
            },
            getSold: function() {
                return books.filter(function(book) {
                    return (book.bookStatus === 'sold');
                });
            },
            getOnShelf: function() {
                return books.filter(function(book) {
                    return (book.bookStatus === 'shelf');
                });
            }
        };
    });