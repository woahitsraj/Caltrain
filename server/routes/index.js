"use strict";

const StopRoutes = require('../api/transit/routes/stop-route');
const RoutesByStopRouets = require('../api/transit/routes/routesByStop-route.js');

const StaticDispatcher = require('../commons/static/index');


module.exports = class Routes {
   static init(app, router) {
     StopRoutes.init(router);
     RoutesByStopRouets.init(router);
     
     router
       .route('*')
       .get(StaticDispatcher.sendIndex);
     

     app.use('/', router);
   }
};