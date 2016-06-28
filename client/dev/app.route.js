;(function(ng) {
  'use strict';

  ng.module('public-transport')
    .config([
      '$routeProvider',
      function($routeProvider) {
        $routeProvider
          .when('/', {
            templateUrl: 'transit/templates/main.html',
            controller: 'mainController'
          })
          .otherwise({
            redirectTo: '/'
          });
      }
    ]);
}(window.angular));
  