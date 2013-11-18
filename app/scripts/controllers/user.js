'use strict';

angular.module('classifikdosApp')
  .controller('UserCtrl', function ($scope, Auth) {

  	$scope.isAuth = Auth.isAuth();

  	$scope.login = function () {
  		console.log($scope.user.email);
  	}

  });
