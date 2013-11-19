'use strict';

angular.module('classifikdosApp')
  .controller('MainCtrl', function ($scope) {
    
    $scope.teste = function (id) {
    	window.location = '#/';
    	$scope.teste = 'kkk';
    	console.log(id);
    }

  });
