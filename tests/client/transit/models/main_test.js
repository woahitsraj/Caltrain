'use strict';

describe('main', function() {
  var _main;

  beforeEach(module('public-transport'));

  beforeEach(inject(function($injector) {
    _main = $injector.get('main');
  }));

  describe('creation', function() {
    it('return a function', function() {
      expect(typeof _main).toBe('function');
    });
  });

  describe('isValid', function() {
    it('should be valid if name and birth date is setted', function() {
      var m = new _main();
      m.name = 'Felipe Smith';
      m.birthDate = new Date();

      expect(m.isValid()).toBe(true);
    });

    it('should be not valid if name or birth date is not setted', function () {
      var m1 = new _main();
      expect(m1.isValid()).toBe(false);

      var m2 = new _main();
      m2.birthDate = new Date();
      expect(m2.isValid()).toBe(false);

      var m3 = new _main();
      m3.name = 'Felipe Smith';
      expect(m3.isValid()).toBe(false);
    })
  })
});
