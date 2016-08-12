"use strict";

var gtfs = require('gtfs');

module.exports = class routesByStopController {
  
  static getById(req, res) {
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
            res.send(routes);
          }
        });

      }
    });
  }
};