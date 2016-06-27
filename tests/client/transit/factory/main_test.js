'use strict';

describe('Main', function() {
    var _Main;

    beforeEach(module('public-transport'));

    beforeEach(inject(function($injector) {
      _Main = $injector.get('Main');
    }));

    describe('instance', function() {
      it('should have the right prop for the instance', function() {
          var _something = new _Main();

          expect(_something.something).toEqual(123);
      });
    });

    describe('isValid', function() {
      it('should return true', function() {
          var _something = new _Main();

          expect(_something.isValid()).toBeTruthy();
      });
    });
});
