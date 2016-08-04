"use strict";

const stoptimeController = require('../controller/stoptime-controller');

module.exports = class stoptimeRoutes {
  static init(router) {

    router
      .route('/api/stoptime/:id')
            .get(stoptimeController.getStoptimes);

  }
};
