;(function(ng) {
  'use strict';

  ng.module('public-transport')
    .config([
      '$routeProvider',
      function($routeProvider) {
        $routeProvider
          .when('/', {
            templateUrl: 'transit/templates/main.html',
            controller: 'main',
            controllerAs: 'mainCtrl'
          })
          .otherwise({
            redirectTo: '/'
          });
      }
    ]);
}(window.angular));
  