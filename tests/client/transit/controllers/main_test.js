'use strict';

describe('main', function() {
    var _scope;
    var CONTROLLER_NAME = 'main as mainCtrl';

    beforeEach(module('public-transport'));

    beforeEach(inject(function($injector) {
      _scope = $injector.get('$rootScope').$new();
    }));

    describe('init', function() {
      it('should create the controller correctly', inject(function($controller) {
          $controller(CONTROLLER_NAME, {$scope: _scope});
      }));
    });
});
