"use strict";

var gtfs = require('gtfs');

module.exports = class stoptimeController {

  static getStoptimes(req, res) {
    let _id = req.params.id;
    var agencyKey;
    gtfs.agencies(function(err, agencies) {
      if (err) {
        console.log(err);
      } else {
        agencyKey = agencies[0].agency_key;
        gtfs.getRoutesByStop(agencyKey, _id, function(err, routes) {
          if (err) {
            console.log(err);
          } else {
            var routeId = routes[0].route_id;
            gtfs.getStoptimesByStop(agencyKey, routeId, _id, 0, function(err, stoptimes) {
              if (err) {
                return;
              } else {
                res.send(stoptimes);
              }
            });
            gtfs.getStoptimesByStop(agencyKey, routeId, _id, 1, function(err, stoptimes) {
              if (err) {
                return;
              } else {
                res.send(stoptimes);
              }
            });

          }
        });

      }
    });
  }
}