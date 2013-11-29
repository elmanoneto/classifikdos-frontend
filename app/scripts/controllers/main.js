'use strict';

angular.module('classifikdosApp')
  .controller('MainCtrl', function ($scope) {

    $scope.teste = function (argument) {
      window.location = '#/search';
      delete $scope.search;
    }
    
  });
