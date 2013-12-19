'use strict';

angular.module('classifikdosApp')
  .service('Auth', function Auth($localStorage) {

    var users = [
      {nome: 'Sei Lá', email: 'sei@la.com.br', senha: '123'},
      {nome: 'Elmano Neto', email: 'elmano@neto.com', senha: '123'}
    ];
  	
    this.isAuth = function () {
      if (!$localStorage.user) {
        return false;
      }
      return true;
    }

  	this.login = function (user) {
      for(var i = 0; i < users.length; i++){
        if(users[i].email == user.email && users[i].senha == user.senha){
          $localStorage.user = users[i];
          this.isAuth();
          break;
        }
      }
  	}

    this.logout = function () {
      delete $localStorage.user;
      window.location = '#/';
    }

    this.register = function (user) {
      users.push(user);
      this.login(user);
    }

    this.checkUser = function () {
      if (!this.isAuth()) {
        window.location = '#/';
      }
    }

    this.getUser = function () {
      return $localStorage.user;
    }

  });
