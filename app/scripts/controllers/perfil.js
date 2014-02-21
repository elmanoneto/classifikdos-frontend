'use strict';

angular.module('classifikdosApp')
  .controller('PerfilCtrl', function ($scope, Auth) {

    Auth.checkUser();

    $scope.user = Auth.getUser();

  });
