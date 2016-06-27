;(function(ng) {
  'use strict';

  ng.module('public-transport')
    .controller('stopController', [
      function() {
        var self = this;
  		self.startingStation = '';
  		self.endingStation = '';
  		self.stops = [];

        function _getAllStops() {
        	//TODO: populate stops from database
        }

        _getAllStops();

        return self;
      }
    ]);
}(window.angular));
