"use strict";

var gtfs = require('gtfs');

module.exports = class tripController {

  static getTrip(req, res) {
    let _id = req.params.id;
    var agencyKey;
    console.log("test");
    gtfs.agencies(function(err, agencies) {
      if (err) {
        console.log(err);
      } else {
        agencyKey = agencies[0].agency_key;
        gtfs.getRoutesByStop(agencyKey, _id, function(err, routes) {
          if (err) {
            console.log(err);
          } else {
            console.log(routes[0].route_id);
            var routeId = routes[0].route_id;
            gtfs.getTripsByRouteAndDirection(agencyKey, routeId, 1, function(err, trips) {
              if (err) {
                console.log(err);
                return;
              } else {
                res.send(trips);
              }
            });
            gtfs.getTripsByRouteAndDirection(agencyKey, routeId, 0, function(err, trips) {
              if (err) {
                console.log(err);
                return;
              } else {
                res.send(trips);
              }
            });

          }
        });

      }
    });
  }
}