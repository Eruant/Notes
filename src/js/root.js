/*globals require, angular*/

require('angular/angular');
require('angular-route/angular-route');

var libraryController = require('./controllers/library').controller;
var songController = require('./controllers/song').controller;

var app = angular.module('notesApp', ['ngRoute']);

app.config(function ($routeProvider) {
  
  $routeProvider.when('/', {
    controller: 'libraryController',
    templateUrl: 'app/views/library.html'
  }).when('/song', {
    controller: 'songController',
    templateUrl: 'app/views/song.html'
  });

});

app.controller('libraryController', ['$scope', 'libraryFactory', libraryController]);
app.controller('songController', ['$scope', songController]);

app.factory('libraryFactory', function ($http) {
  var factory = {};
  factory.getSongs = function () {
    return $http.get('/data/songs.json');
  };
  return factory;
});
