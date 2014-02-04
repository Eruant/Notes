/*globals exports, window*/

exports.init = function (app) {

	app.config(function ($routeProvider) {
		
		$routeProvider.when('/song/:songId', {
			controller: 'songController',
			templateUrl: './modules/song/song.html'
		}).otherwise({
			redirectTo: '/library'
		});

	});

  app.controller('songController', function ($scope, $routeParams, songFactory) {

    songFactory.getSongs()
      .success(function (data) {
        $scope.song = data[$routeParams.songId];
      })
      .error(function (error) {
        window.console.warn(error);
      });

  });

};
