/*globals exports, window*/

exports.init = function (app) {

  app.controller('libraryController', function ($scope, libraryFactory) {

    libraryFactory.getSongs()
      .success(function (data) {
        $scope.songs = data;
      })
      .error(function (error) {
        window.console.warn(error);
      });

  });

  app.factory('libraryFactory', function ($http) {
    var factory = {};
    factory.getSongs = function () {
      return $http.get('/data/songs.json');
    };
    return factory;
  });

};
