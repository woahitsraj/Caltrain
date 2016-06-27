"use strict";

const stopController = require('../controller/stop-controller');

module.exports = class stopRoutes {
  static init(router) {
    router
      .route('/api/stop')
      .get(stopController.getAll);

    router
      .route('/api/stop/:id')
      .get(stopController.getById);
  }
};