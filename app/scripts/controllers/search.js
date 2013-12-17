'use strict';

angular.module('classifikdosApp')
  .controller('SearchCtrl', function ($scope) {

    $scope.busca = function () {
      var replaced = $scope.searchmodel.split(' ').join('-');
      window.location = '#/search/'+replaced;
      delete $scope.searchmodel;
    }

  });
