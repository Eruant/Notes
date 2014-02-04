/*globals require, angular*/

require('angular/angular');
require('angular-route/angular-route');

var library = require('./modules/library/library');
var song = require('./modules/song/song');
var songModel = require('./common/songModel');

var app = angular.module('notesApp', ['ngRoute']);

app.config(function ($routeProvider) {
  
  $routeProvider.when('/', {
    controller: 'libraryController',
    templateUrl: './modules/library/library.html'
  }).when('/song', {
    controller: 'songController',
    templateUrl: './modules/song/song.html'
  });

});

library.init(app);
song.init(app);
songModel.init(app);
