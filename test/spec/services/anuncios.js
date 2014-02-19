'use strict';

describe('Service: Anuncios', function () {

  // load the service's module
  beforeEach(module('classifikdosApp'));

  // instantiate service
  var Anuncios;
  beforeEach(inject(function (_Anuncios_) {
    Anuncios = _Anuncios_;
  }));

  it('should do something', function () {
    expect(!!Anuncios).toBe(true);
  });

});
