var fs = require('fs');
var express = require('express');
var dummyjson = require('dummy-json');

var template = fs.readFileSync('template.hbs', {encoding: 'utf8'});
var app = express();

// set cors headers for all requests
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, X-XSRF-TOKEN');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});

app.get('/api/books', function(req, res) {
  res.set('Content-Type', 'application/json');
  res.send(dummyjson.parse(template));
});

app.listen(4730);