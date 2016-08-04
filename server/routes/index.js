"use strict";

const StopRoutes = require('../api/transit/routes/stop-route');
const RoutesByStopRoutes = require('../api/transit/routes/routesByStop-route.js');
const TimetableRoutes = require('../api/transit/routes/trip-route.js');
const StoptimeRoutes = require('../api/transit/routes/stoptime-route.js');

const StaticDispatcher = require('../commons/static/index');


module.exports = class Routes {
   static init(app, router) {
     StopRoutes.init(router);
     RoutesByStopRoutes.init(router);
     TimetableRoutes.init(router);
     StoptimeRoutes.init(router);
     
     router
       .route('*')
       .get(StaticDispatcher.sendIndex);
     

     app.use('/', router);
   }
};