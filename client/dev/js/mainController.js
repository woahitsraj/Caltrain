;
(function(ng) {
  'use strict';

  ng.module('public-transport')
    .controller('mainController', ['$scope', '$http', 'stopService',
      function($scope, $http, stopService) {
        $scope.stops = [];
        $scope.startingStationSelected = false;
        $scope.endingStationSelected = false;
        $scope.caltrainData = {};
        stopService.getAll().success(function(data) {
          $scope.caltrainData = data;
          $.each(data.stops, function(i, el) {
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
        };
        $scope.getStopTimesForEndingStation = function() {
          $scope.trips = [];
          $scope.endingStationSelected = true;
          var startingStationStops = [];
          var endingStationStops = [];
          for (var i = 0; i < $scope.caltrainData.stopTimes.length; i++) {
            if ($scope.caltrainData.stopTimes[i].stop_id === $scope.startingStation.stop_id ||
              $scope.caltrainData.stopTimes[i].stop_id === (parseInt($scope.startingStation.stop_id) + 1)) {
              startingStationStops.push($scope.caltrainData.stopTimes[i]);
            }
            if ($scope.caltrainData.stopTimes[i].stop_id === $scope.endingStation.stop_id ||
              $scope.caltrainData.stopTimes[i].stop_id === (parseInt($scope.endingStation.stop_id) + 1)) {
              endingStationStops.push($scope.caltrainData.stopTimes[i]);
            }
          }
          console.log(startingStationStops);
          console.log(endingStationStops);
          for (var k = 0; k < startingStationStops.length; k++) {
            for (var j = 0; j < endingStationStops.length; j++) {
              if (startingStationStops[k].trip_id === endingStationStops[j].trip_id &&
                parseInt(startingStationStops[k].stop_sequence) < parseInt(endingStationStops[j].stop_sequence)) {
                $scope.trips.push({
                  departureTime: startingStationStops[k].departure_time,
                  arrivalTime: endingStationStops[j].arrival_time
                });
              }
            }
          }
          console.log($scope.trips);
        };

        var self = this;
        return self;
      }
    ]);
}(window.angular));