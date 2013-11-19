'use strict';

angular.module('classifikdosApp')
  .service('Auth', function Auth($cookies) {

    var users = [];
  	
    this.isAuth = function () {
  		if ($cookies.user) {
  			return true;
  		}else {
  			return false;
  		}
  	};

  	this.login = function (email, senha) {
      var user;
  		for(var i = 0; i < users.length; i++){
        if (users[i].email == email && users[i].senha == senha){
          $cookies.user = users[i];
          break;
        }
      } 
      this.isAuth();
  	}

    this.register = function (user) {
      users.push(user);
      this.login(user.email, user.senha);
    }

    this.findUser = function (name) {
      for(user in users){
        if (user.name == name){
          return true;
        }
      }
    }

  });
