;(function(ng) {
  'use strict';

  ng.module('public-transport')
    .factory('stopService', ['$http',
      function($http) {
        var factory = {};
        factory.getAll = function() {
          return $http.get('/api/stop');
        };

        return factory;
      }
    ]);
}(window.angular));
