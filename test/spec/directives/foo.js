'use strict';

describe('Directive: foo', function () {

  // load the directive's module
  beforeEach(module('classifikdosApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<foo></foo>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the foo directive');
  }));
});
