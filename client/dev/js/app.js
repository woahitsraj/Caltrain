(function(ng) {
	'use strict';

	ng.module('public-transport', [
		      'ngRoute'
		]);

	ng.module('public-transport')
		.config([
			'$routeProvider',
			function($routeProvider) {
				$routeProvider
					.when('/', {
						templateUrl: 'main.html',
						controller: 'mainController'
					})
					.otherwise({
						redirectTo: '/'
					});
			}
		]);
}(window.angular));