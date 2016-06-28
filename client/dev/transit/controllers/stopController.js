(function(ng) {
	'use strict';

	ng.module('public-transport')
		.controller('stopController', ['stopService', '$scope',
			function(stopService,$scope) {
				$scope.startingStation = '';
				$scope.endingStation = '';
				$scope.stops = [];
				stopService.getAll().success(function(data){
					$scope.stops = data;
				});
			}
		]);
}(window.angular));