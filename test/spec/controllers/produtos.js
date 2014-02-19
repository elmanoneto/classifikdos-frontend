'use strict';

describe('Controller: ProdutosCtrl', function () {

  // load the controller's module
  beforeEach(module('classifikdosApp'));

  var ProdutosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProdutosCtrl = $controller('ProdutosCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
