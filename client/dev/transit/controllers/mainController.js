;(function(ng) {
  'use strict';

  ng.module('public-transport')
    .controller('mainController', ['$scope','$http',
      function($scope,$http) {
      	$scope.startingStation = '';
      	$scope.endingStation = '';

        var self = this;
        self.getStopTimesForStartingStation = function(){
          $scope.stopTimesForStartingStationNB = $http.get('api/stoptimes/' + $scope.startingStation.id);
          $scope.stopTimesForStartingStationSB = $http.get('api/stoptimes/' + ($scope.startingStation.id + 1));
        };
        self.getStopTimesForEndingStation = function(){
          $scope.stopTimesForEndingStationNB = $http.get('api/stoptimes/' + $scope.endingStation.id);
          $scope.stopTimesForEndingStationSB = $http.get('api/stoptimes/' + ($scope.endingStation.id + 1));
        };




        return self;
      }
    ]);
}(window.angular));
