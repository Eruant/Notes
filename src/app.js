/*globals require, angular*/

require('angular/angular');
require('angular-route/angular-route');

var library = require('./modules/library/library'),
		song = require('./modules/song/song'),
		
		songModel = require('./common/songModel'),
		
		app = angular.module('notesApp', ['ngRoute']);

// setup the homepage
app.config(function ($routeProvider) {
  
	// home controller
  $routeProvider.when('/', {
    controller: 'libraryController',
    templateUrl: './modules/library/library.html'
  });

});

// init controllers
library.init(app);
song.init(app);

// init models
songModel.init(app);
