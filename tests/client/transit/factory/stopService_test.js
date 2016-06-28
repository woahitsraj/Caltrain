'use strict';

describe('StopService', function() {
    var _StopService;

    beforeEach(module('public-transport'));

    beforeEach(inject(function($injector) {
      _StopService = $injector.get('StopService');
    }));

    describe('instance', function() {
      it('should have the right prop for the instance', function() {
          var _something = new _StopService();

          expect(_something.something).toEqual(123);
      });
    });

    describe('isValid', function() {
      it('should return true', function() {
          var _something = new _StopService();

          expect(_something.isValid()).toBeTruthy();
      });
    });
});
