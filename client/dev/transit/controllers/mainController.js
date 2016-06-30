;(function(ng) {
  'use strict';

  ng.module('public-transport')
    .controller('mainController', ['$scope','$http',
      function($scope,$http) {
      	$scope.startingStation = '';
      	$scope.endingStation = '';

        var self = this;
        self.getRouteForStation = function(){
          $http.get('api/routesbystop/' + $scope.startingStation.id);
        };


        return self;
      }
    ]);
}(window.angular));
