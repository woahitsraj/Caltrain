'use strict';

describe('Stoptime', function() {
    var _Stoptime;

    beforeEach(module('public-transport'));

    beforeEach(inject(function($injector) {
      _Stoptime = $injector.get('Stoptime');
    }));

    describe('instance', function() {
      it('should have the right prop for the instance', function() {
          var _something = new _Stoptime();

          expect(_something.something).toEqual(123);
      });
    });

    describe('isValid', function() {
      it('should return true', function() {
          var _something = new _Stoptime();

          expect(_something.isValid()).toBeTruthy();
      });
    });
});
