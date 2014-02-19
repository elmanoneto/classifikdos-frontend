'use strict';

describe('Service: Produtos', function () {

  // load the service's module
  beforeEach(module('classifikdosApp'));

  // instantiate service
  var Produtos;
  beforeEach(inject(function (_Produtos_) {
    Produtos = _Produtos_;
  }));

  it('should do something', function () {
    expect(!!Produtos).toBe(true);
  });

});
