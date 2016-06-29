"use strict";

const routesByStopController = require('../controller/routesByStop-controller');

module.exports = class routesByStopRoutes {
  static init(router) {

    router
      .route('/api/routesbystop/:id')
            .get(routesByStopController.getById);

  }
};
