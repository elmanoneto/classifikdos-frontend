'use strict';

angular.module('classifikdosApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
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
      .otherwise({
        redirectTo: '/'
      });
  });
