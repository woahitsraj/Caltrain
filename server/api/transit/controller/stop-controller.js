'use strict';

var gtfs = require('gtfs');

module.exports = class stopController {
  static getAll(req, res) {
    var agencyKey;
    gtfs.agencies(function(err, agencies) {
      if (err) {
        console.log(err);
      } else {
        agencyKey = agencies[0].agency_key;
        gtfs.getStops(agencyKey, function(err, stops) {
          if (err) {
            console.log(err);
          } else {
            res.send(stops);
          }
        });

      }
    });
  }

  static getById(req, res) {
    let _id = req.params.id;
    var agencyKey;
    gtfs.agencies(function(err, agencies) {
      if (err) {
        console.log(err);
      } else {
        agencyKey = agencies[0].agency_key;
        gtfs.getStops(agencyKey, _id, function(err, stops) {
          if (err) {
            console.log(err);
          } else {
            res.send(stops);
          }
        });

      }
    });

  }
};