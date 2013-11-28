'use strict';

describe('Controller: AnunciosCtrl', function () {

  // load the controller's module
  beforeEach(module('classifikdosApp'));

  var AnunciosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AnunciosCtrl = $controller('AnunciosCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    //expect(scope.awesomeThings.length).toBe(3);
  });
});
