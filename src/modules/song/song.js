/*globals exports*/

exports.init = function (app) {

  app.controller('songController', function ($scope) {
    $scope.song = {
      "title": "A Test song",
      "author": "Matt Gale",
      "body": "This is my song"
    };
  });

};
