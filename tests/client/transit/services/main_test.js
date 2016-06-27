'use strict';

describe('main', function() {
  var _main;

  beforeEach(module('public-transport'));

  beforeEach(inject(function($injector) {
    _main = $injector.get('main');
  }));

  describe('doSomething', function() {
    it('should doSomething', function() {
      _main.doSomething();
    });
  });
});
