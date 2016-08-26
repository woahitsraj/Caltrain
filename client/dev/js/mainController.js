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

        function hhmmssToSeconds(time) {
          var t = time.split(':');
          var hour = parseInt(t[0]);
          var minute = parseInt(t[1]);
          var second = parseInt(t[2]);

          return hour * 60 * 60 + minute * 60 + second;
        }


        function getDuration(departure_time, arrival_time) {
          var dSec = hhmmssToSeconds(departure_time);
          var aSec = hhmmssToSeconds(arrival_time);
          var duration = (aSec - dSec) / 60;

          return duration.toString() + ' min';
        }

        function getTrips() {
          $scope.trips = [];
          var startingStationStops = [];
          var endingStationStops = [];
          for (var i = 0; i < $scope.caltrainData.stopTimes.length; i++) {
            if (parseInt($scope.caltrainData.stopTimes[i].stop_id) === parseInt($scope.startingStation.stop_id) ||
              parseInt($scope.caltrainData.stopTimes[i].stop_id) === (parseInt($scope.startingStation.stop_id) + 1)) {
              startingStationStops.push($scope.caltrainData.stopTimes[i]);
            }
            if (parseInt($scope.caltrainData.stopTimes[i].stop_id) === parseInt($scope.endingStation.stop_id) ||
              parseInt($scope.caltrainData.stopTimes[i].stop_id) === (parseInt($scope.endingStation.stop_id) + 1)) {
              endingStationStops.push($scope.caltrainData.stopTimes[i]);
            }
          }
          for (var k = 0; k < startingStationStops.length; k++) {
            for (var j = 0; j < endingStationStops.length; j++) {
              if (startingStationStops[k].trip_id === endingStationStops[j].trip_id &&
                parseInt(startingStationStops[k].stop_sequence) < parseInt(endingStationStops[j].stop_sequence)) {
                var startingStation = startingStationStops[k];
                var endingStation = endingStationStops[j];
                var departureTime = startingStation.departure_time;
                var arrivalTime = endingStation.arrival_time;
                var tripId = startingStation.trip_id;
                var routeId = $scope.caltrainData.trips[tripId].route_id;
                var serviceId = $scope.caltrainData.trips[tripId].service_id;
                var serviceType = '';
                if (serviceId.includes('Weekday')) {
                  serviceType = 'Weekday';
                } else if (serviceId.includes('Sunday')) {
                  serviceType = 'Sunday';
                } else if (serviceId.includes('Saturday')) {
                  serviceType = 'Saturday';
                }
                var routeName = $scope.caltrainData.routes[routeId].route_long_name;
                var tripTime = getDuration(departureTime, arrivalTime);
                $scope.trips.push({
                  serviceType: serviceType,
                  routeName: routeName,
                  departureTime: departureTime,
                  arrivalTime: arrivalTime,
                  tripTime: tripTime
                });
              }
            }
          }


        }

        $scope.getStopTimesForStartingStation = function() {
          $scope.startingStationSelected = true;
          if ($scope.endingStationSelected === true) {
            getTrips();
          }
        };
        $scope.getStopTimesForEndingStation = function() {
          $scope.endingStationSelected = true;
          if ($scope.startingStationSelected === true) {
            getTrips();
          }
        };

        var self = this;
        return self;
      }
    ]);
}(window.angular));