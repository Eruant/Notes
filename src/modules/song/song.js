/*globals exports, window*/

exports.init = function (app) {

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
