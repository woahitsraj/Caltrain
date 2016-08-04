"use strict";

const tripController = require('../controller/trip-controller');

module.exports = class tripRoutes {
  static init(router) {

    router
      .route('/api/trip/:id')
            .get(tripController.getTrip);

  }
};
