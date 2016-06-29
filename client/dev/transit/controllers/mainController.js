;(function(ng) {
  'use strict';

  ng.module('public-transport')
    .controller('mainController', ['$scope',
      function($scope) {
      	$scope.startingStation = '';
      	$scope.endingStation = '';
        var self = this;

        return self;
      }
    ]);
}(window.angular));
