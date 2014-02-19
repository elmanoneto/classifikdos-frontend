'use strict';

angular.module('classifikdosApp')
  .service('Produtos', function Produtos(Auth) {
    
    var produtos = [];

    this.add = function (produto) {
      produtos.push(produto);
    }

    this.getAll = function () {
      return produtos;
    }

    this.remover = function (id) {
      for(var i = 0; i < produtos.length; i++){
        if(produtos[i].idt == id){
           produtos.splice(i, 1);
        }
      }
    }

    this.get = function (id) {
      for(var i = 0; i < produtos.length; i++){
        if(produtos[i].idt == id){
          return produtos[i];
        }
      }
    }

    this.editar = function (produto) {
      var p;
      for(var i = 0; i < produtos.length; i++){
        if(produtos[i].idt == produto.idt){
           p = produtos[i];
        }
      }

      p.nome = produto.nome;
    }

    this.toString = function () {
      console.log(produtos);
    }

  });
