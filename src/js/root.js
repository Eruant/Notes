/*globals require, angular*/

require('angular/angular');
require('angular-route/angular-route');

var library = require('./modules/library');
var song = require('./modules/song');

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

library.init(app);
song.init(app);
