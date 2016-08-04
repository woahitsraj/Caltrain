(function(ng) {
	'use strict';

	ng.module('public-transport')
		.controller('stopController', ['stopService', '$scope',
			function(stopService, $scope) {
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

			}
		]);
}(window.angular));