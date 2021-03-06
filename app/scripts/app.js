'use strict';

angular.module('classifikdosApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ngStorage',
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/anuncios', {
        templateUrl: 'views/anuncios.html',
        controller: 'AnunciosCtrl'
      })
      .when('/search/:params', {
        templateUrl: 'views/search.html',
        controller: 'SearchCtrl'
      })
      .when('/sobre', {
        templateUrl: 'views/sobre.html',
        controller: 'SobreCtrl'
      })
      .when('/perfil', {
        templateUrl: 'views/perfil.html',
        controller: 'UserCtrl'
      })
      .when('/categoria/:params', {
        templateUrl: 'views/categoria.html',
        controller: 'CategoriaCtrl'
      })
      .when('/produtos', {
        templateUrl: 'views/produtos.html',
        controller: 'ProdutosCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
