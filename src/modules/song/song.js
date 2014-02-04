/*globals exports, window*/

exports.init = function (app) {

	app.config(function ($routeProvider) {
		
		$routeProvider.when('/song', {
			controller: 'songController',
			templateUrl: './modules/song/song.html'
		});

	});

  app.controller('songController', function ($scope, songFactory) {

    songFactory.getSongs()
      .success(function (data) {
        $scope.song = data[0];
      })
      .error(function (error) {
        window.console.warn(error);
      });

  });

};
