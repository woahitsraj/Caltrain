'use strict';

describe('stop', function() {
  var _stop;

  beforeEach(module('public-transport'));

  beforeEach(inject(function($injector) {
    _stop = $injector.get('stop');
  }));

  describe('doSomething', function() {
    it('should doSomething', function() {
      _stop.doSomething();
    });
  });
});
