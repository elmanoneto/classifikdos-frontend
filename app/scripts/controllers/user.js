'use strict';

angular.module('classifikdosApp')
  .controller('UserCtrl', function ($scope, Auth, $cookies) {
 
    $scope.isAuth = Auth.isAuth();

    var data = new Date();

    $scope.ano = data.getFullYear();

    if(Auth.isAuth()){
      $scope.user = Auth.getUser();
    }

    $scope.login = function () {
      var user = {
        'email': $scope.user.email,
        'senha': $scope.user.senha
      }

      Auth.login(user);

      if(!Auth.isAuth()){
        $('#alert-login').show();
        return false;
      }

      $scope.isAuth = Auth.isAuth();

      $('#modalLogin').modal('hide');

      delete $scope.user.email;
      delete $scope.user.senha;

      $scope.user = Auth.getUser();
      $scope.isAuth = Auth.isAuth();

      $('#alert-login').hide();
  	}

  	$scope.logout = function () {
  		Auth.logout();
  		$scope.isAuth = Auth.isAuth();
      delete $scope.user; 
  	}

    $scope.register = function () {
      var user = {
        'email': $scope.cadastro.email,
        'nome': $scope.cadastro.nome,
        'senha': $scope.cadastro.senha
      }

      delete $scope.cadastro.email;
      delete $scope.cadastro.nome;
      delete $scope.cadastro.senha;

      Auth.register(user);

      $('#modalRegister').modal('hide');

      $scope.isAuth = Auth.isAuth();
      $scope.user = Auth.getUser();
    }

  });
