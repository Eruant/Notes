/*globals exports, window*/

exports.controller = function ($scope, libraryFactory) {

  libraryFactory.getSongs()
    .success(function (data) {
      $scope.songs = data;
    })
    .error(function (error) {
      window.console.warn(error);
    });

};
