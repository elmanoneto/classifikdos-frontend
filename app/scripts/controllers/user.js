'use strict';

angular.module('classifikdosApp')
  .controller('UserCtrl', function ($scope, Auth, config, $cookies) {

  	$scope.login = function () {
      Auth.login($scope.user.email, $scope.user.senha);
      if (Auth.isAuth() == true){
        $scope.isAuth = Auth.isAuth();
        $('#myModal').modal('hide');
        $('#alert').css('display', 'none');
      }else{
        $('#alert').css('display', 'block');
      }
      delete $scope.user.email;
      delete $scope.user.senha;      
  	}

  	$scope.logout = function () {
  		delete $cookies.user;
  		$scope.isAuth = config.LOGOFF;
  	}

    $scope.register = function () {
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
    }

  });
