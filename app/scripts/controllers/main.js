'use strict';

angular.module('classifikdosApp')
  .controller('MainCtrl', function ($scope, $routeParams, Auth) {
    
    $scope.isAuth = Auth.isAuth();
    
  });
