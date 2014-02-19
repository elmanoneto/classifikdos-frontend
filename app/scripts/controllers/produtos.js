'use strict';

angular.module('classifikdosApp')
  .controller('ProdutosCtrl', function ($scope, Auth, Produtos) {

    Auth.checkUser();  

    var user = Auth.getUser();

    var produtos = Produtos.getAll();

    $scope.produtos = produtos;

    var id = parseInt(0);
    
    $scope.cadastrar = function () {

      var produto = {
        'idt': id,
        'nome': $scope.produto.nome,
        'user': user.nome
      }

      Produtos.add(produto);

      $('#modalProduto').modal('hide');

      delete $scope.produto.nome;
      delete $scope.produto.foto;

      id++;
      
    }

    $scope.remover = function (id) {
      
      Produtos.remover(id);

    }

    $scope.editar = function (id) {

      var produto = Produtos.get(id);

      $('#modalEditProduto').modal('show');

      $scope.editar.nome = produto.nome;

      $scope.idt = produto.idt;

    }

    $scope.acaoEditar = function () {

      var produto = Produtos.get($scope.idt);

      produto.nome = $scope.editar.nome;

      Produtos.editar(produto);

      $('#modalEditProduto').modal('hide');

    }

  });
