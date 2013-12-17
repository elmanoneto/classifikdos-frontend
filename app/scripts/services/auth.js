'use strict';

angular.module('classifikdosApp')
  .service('Auth', function Auth($localStorage, $sessionStorage, $cookies) {

    var users = [
      {email: 'sei@la.com.br', senha: '123'},
      {email: 'elmano@neto.com', senha: '123'}
    ];
  	
    this.isAuth = function () {
      if (!$cookies.user) {
        return false;
      }
      return true;
    }

  	this.login = function (user) {
     /* for(var i = 0; i < users.length; i++){
        if(users[i].email == user.email && users[i].senha == user.senha){
          $sessionStorage.user = user;
          this.isAuth();
          break;
        }
      }*/

      $cookies.user = 'elmano';
  	}

    this.logout = function () {
      delete $cookies.user;
    }

    this.register = function (user) {
      users.push(user);
      this.login(user.email, user.senha);
    }

    this.checkUser = function () {
      if (!$sessionStorage.user) {
        window.location = '#/';
      };
    }

    this.getUser = function () {
      return $cookies.user;
    }

  });
