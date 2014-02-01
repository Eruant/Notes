var app = angular.module('notesApp', ['ngRoute']);

app.config(function ($routeProvider) {
	
	$routeProvider
		.when('/', {
			controller: 'LibraryController',
			templateUrl: 'app/views/library.html'
		});
});

app.controller('LibraryController', function ($scope, libraryFactory) {

	function init() {
		libraryFactory.getSongs().success(function (data) {
			$scope.songs = data;
		});
	}

	init();

});

app.factory('libraryFactory', function ($http) {
	var factory = {};
	factory.getSongs = function () {
		return $http.get('/data/songs.json');
	};
	return factory;
});
