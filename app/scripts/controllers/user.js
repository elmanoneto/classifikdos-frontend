'use strict';

angular.module('classifikdosApp')
  .controller('UserCtrl', function ($scope, Auth, config, $cookies) {

  	$scope.login = function () {
  		Auth.authenticate($scope.user.email, $scope.user.password);
  		$('#myModal').modal('hide');
  		$scope.isAuth = config.LOGIN;
  	}

  	$scope.logout = function () {
  		delete $cookies.user;
  		$scope.isAuth = config.LOGOFF;
  	}

  });
