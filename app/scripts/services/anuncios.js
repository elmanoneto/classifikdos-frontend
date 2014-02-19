'use strict';

angular.module('classifikdosApp')
  .service('Anuncios', function Anuncios() {
    
    var anuncios = [];

    this.add = function (anuncio) {
      anuncios.push(anuncio);
    }

    this.getAll = function () {
      return anuncios;
    }

    this.remover = function (id) {
      for(var i = 0; i < anuncios.length; i++){
        if(anuncios[i].idt == id){
           anuncios.splice(i, 1);
        }
      }
    }

    this.get = function (id) {
      for(var i = 0; i < anuncios.length; i++){
        if(anuncios[i].idt == id){
          return anuncios[i];
        }
      }
    }

    this.editar = function (anuncio) {
      var p;
      for(var i = 0; i < anuncios.length; i++){
        if(anuncios[i].idt == anuncio.idt){
           p = anuncios[i];
        }
      }

      p = anuncio;

    }

    this.toString = function () {
      console.log(anuncios);
    }

  });
