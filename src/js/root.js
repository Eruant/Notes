var app = angular.module('notesApp', ['ngRoute']);

app.config(function ($routeProvider) {
	
	$routeProvider.when('/', {
		controller: 'LibraryController',
		templateUrl: 'app/views/library.html'
	}).when('/song', {
		controller: 'SongController',
		templateUrl: 'app/views/song.html'
	});

});

app.controller('LibraryController', function ($scope, libraryFactory) {

	libraryFactory.getSongs()
		.success(function (data) {
			$scope.songs = data;
		})
		.error(function (error) {
			window.console.warn(error);
		});

});

app.controller('SongController', function ($scope) {
	$scope.song = {
		"title": "A Test song",
		"author": "Matt Gale",
		"body": "This is my song"
	};
});

app.factory('libraryFactory', function ($http) {
	var factory = {};
	factory.getSongs = function () {
		return $http.get('/data/songs.json');
	};
	return factory;
});
