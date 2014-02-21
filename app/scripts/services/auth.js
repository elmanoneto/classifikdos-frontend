'use strict';

angular.module('classifikdosApp')
  .service('Auth', function Auth($localStorage) {

    var users = [
      {idt: 0, nome: 'Sei Lá', email: 'sei@la.com.br', senha: '123'},
      {idt: 1, nome: 'Elmano Neto', email: 'elmano@neto.com', senha: '123'}
    ];

    var id = parseInt(2);
  	
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
      user.idt = id;
      users.push(user);
      this.login(user);
      id++;
    }

    this.checkUser = function () {
      if (!this.isAuth()) {
        window.location = '#/';
      }
    }

    this.getUser = function () {
      return $localStorage.user;
    }

    this.remove = function (id) {

      users[id] = '';
      this.logout();
      this.checkUser();

    }

  });
