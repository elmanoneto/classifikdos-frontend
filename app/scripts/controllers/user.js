'use strict';

angular.module('classifikdosApp')
  .controller('UserCtrl', function ($scope, Auth) {
 
    $scope.isAuth = Auth.isAuth();

    $scope.login = function () {
      var user = {
        'email': $scope.user.email,
        'senha': $scope.user.senha
      }

      Auth.login(user);

      $scope.isAuth = Auth.isAuth();

      $('#modalLogin').modal('hide');

      delete $scope.user.email;
      delete $scope.user.senha;      
  	}

  	$scope.logout = function () {
  		Auth.logout();
  		$scope.isAuth = Auth.isAuth();
  	}

/*    $scope.register = function () {
      var user = {
        'nome': $scope.user.cadastro.name,
        'email': $scope.user.cadastro.email,
        'senha': $scope.user.cadastro.senha
      }

      delete $scope.user.cadastro.email;
      delete $scope.user.cadastro.name;
      delete $scope.user.cadastro.senha;

      Auth.register(user);
      $scope.isAuth = Auth.isAuth();
      $scope.usuario = $cookies.user;  
    }*/

  });
