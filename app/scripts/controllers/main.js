'use strict';

angular.module('classifikdosApp')
  .controller('MainCtrl', function ($scope, Auth, Anuncios) {
    
    $scope.isAuth = Auth.isAuth();

    $scope.anuncios = Anuncios.getAll();

    
  });
