'use strict';

describe('Controller: CategoriaCtrl', function () {

  // load the controller's module
  beforeEach(module('classifikdosApp'));

  var CategoriaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CategoriaCtrl = $controller('CategoriaCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
