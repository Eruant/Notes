/*globals exports, window*/

exports.init = function (app) {

  app.controller('libraryController', function ($scope, songFactory) {

    songFactory.getSongs()
      .success(function (data) {
        $scope.songs = data;
      })
      .error(function (error) {
        window.console.warn(error);
      });

  });

};
