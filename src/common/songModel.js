/*globals exports, console*/

exports.init = function (app) {

  app.factory('songFactory', function ($http) {
    return {
      getSongs: function () {
        return $http.get('/songs.json');
      }
    };
  });

};
