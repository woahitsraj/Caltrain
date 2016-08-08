;
(function(ng) {
  'use strict';

  ng.module('public-transport')
    .controller('mainController', ['$scope', '$http', 'stopService',
      function($scope, $http, stopService) {
        $scope.stops = [];
        $scope.startingStationSelected = false;
        $scope.endingStationSelected = false;
        stopService.getAll().success(function(data) {
          $.each(data, function(i, el) {
            var flag = true;
            $.each($scope.stops, function(index, val) {
              if (val.parent_station === el.parent_station || val.stop_name === el.stop_name) {
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
          $scope.startingStationSelected = true;
          $http.get('api/stoptime/' + parseInt($scope.startingStation.stop_id)).success(function(data) {
            $scope.stopTimesForStartingStationNB = data;
          }).catch(function(error) {
            console.log(error);
            $scope.stopTimesForStartingStationNB = [];
          });
          $http.get('api/stoptime/' + (parseInt($scope.startingStation.stop_id) + 1)).success(function(data) {
            $scope.stopTimesForStartingStationSB = data;
          }).catch(function(error) {
            console.log(error);
            $scope.stopTimesForStartingStationSB = [];

          });
        };
        $scope.getStopTimesForEndingStation = function() {
          $scope.endingStationSelected = true;
          $http.get('api/stoptime/' + parseInt($scope.endingStation.stop_id)).success(function(data) {
            $scope.stopTimesForEndingStationNB = data;
          }).catch(function(error) {
            console.log(error);
            $scope.stopTimesForEndingStationNB = [];

          });
          $http.get('api/stoptime/' + (parseInt($scope.endingStation.stop_id) + 1)).success(function(data) {
            $scope.stopTimesForEndingStationSB = data;
          }).catch(function(error) {
            console.log(error);
            $scope.stopTimesForEndingStationSB = [];

          });
        };

        var self = this;
        return self;
      }
    ]);
}(window.angular));