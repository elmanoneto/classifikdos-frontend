'use strict';

angular.module('classifikdosApp')
  .controller('AnunciosCtrl', function ($scope, Auth, Anuncios, Produtos) {

    Auth.checkUser();

    var user = Auth.getUser();

    var anuncios = [];

    $scope.anuncios = Anuncios.getAll();

    $scope.produtos = Produtos.getAll();
    
    $scope.cadastrar = function () {

      var anuncio = {
        'descricao': $scope.anuncio.descricao,
        'produto': $scope.anuncio.produtos,
        'preco': $scope.anuncio.preco
      }

      Anuncios.add(anuncio);

      delete $scope.anuncio.descricao;
      delete $scope.anuncio.produto;
      delete $scope.anuncio.preco;

      $('#modalAnuncio').modal('hide');

    }

    $scope.remover = function (id) {

      Anuncios.remover(id);

    }

    $scope.editar = function (id) {

      var anuncio = Anuncios.get(id);

      var produto = Produtos.get(anuncio.produto);

      $scope.editar.descricao = anuncio.descricao;
      $scope.editar.produtos = produto.idt;
      $scope.editar.preco = anuncio.preco;

      $scope.idt = anuncio.idt;

      $('#modalEditAnuncio').modal('show');

    }

    $scope.acaoEditar = function () {

      var anuncio = Anuncios.get($scope.idt);

      anuncio.descricao = $scope.editar.descricao;
      anuncio.preco = $scope.editar.preco;
      anuncio.produto = $scope.editar.produtos;

      Anuncios.editar(anuncio);

      $('#modalEditAnuncio').modal('hide');

    }
      

  });
