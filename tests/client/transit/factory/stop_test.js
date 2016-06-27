'use strict';

describe('Stop', function() {
    var _Stop;

    beforeEach(module('public-transport'));

    beforeEach(inject(function($injector) {
      _Stop = $injector.get('Stop');
    }));

    describe('instance', function() {
      it('should have the right prop for the instance', function() {
          var _something = new _Stop();

          expect(_something.something).toEqual(123);
      });
    });

    describe('isValid', function() {
      it('should return true', function() {
          var _something = new _Stop();

          expect(_something.isValid()).toBeTruthy();
      });
    });
});
