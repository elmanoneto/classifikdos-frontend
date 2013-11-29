'use strict';

angular.module('classifikdosApp')
  .controller('MainCtrl', function ($scope, $routeParams) {

    $scope.teste = function () {
      console.log($scope.search);
      window.location = '#/search/'+$scope.search;
      delete $scope.search;
    }
    
  });
