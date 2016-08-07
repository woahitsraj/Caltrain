;
(function(ng) {
  'use strict';

  ng.module('public-transport')
    .controller('mainController', ['$scope', '$http', 'stopService',
      function($scope, $http, stopService) {
        $scope.stops = [];
        stopService.getAll().success(function(data) {
          $.each(data, function(i, el) {
            var flag = true;
            $.each($scope.stops, function(index, val) {
              if (val.stop_name == el.stop_name) {
                flag = false;
              }
            });
            if (flag) {
              $scope.stops.push(el);
            }
          });

        });
        $scope.startingStation = {
          stop_id: ''
        };
        $scope.endingStation = {
          stop_id: ''

        };
        $scope.getStopTimesForStartingStation = function() {
          $http.get('api/stoptime/' + parseInt($scope.startingStation.stop_id)).success(function(data) {
            $scope.stopTimesForStartingStationNB = data;
          });
          $http.get('api/stoptime/' + (parseInt($scope.startingStation.stop_id) + 1)).success(function(data) {
            $scope.stopTimesForStartingStationSB = data;
          });
        };
        $scope.getStopTimesForEndingStation = function() {
          $http.get('api/stoptime/' + parseInt($scope.endingStation.stop_id)).success(function(data) {
            $scope.stopTimesForEndingStationNB = data;
          });
          $http.get('api/stoptime/' + (parseInt($scope.endingStation.stop_id) + 1)).success(function(data) {
            $scope.stopTimesForEndingStationSB = data;
          });
        };

        var self = this;
        return self;
      }
    ]);
}(window.angular));