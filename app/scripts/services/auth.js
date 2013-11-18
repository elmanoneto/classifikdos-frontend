'use strict';

angular.module('classifikdosApp')
  .service('Auth', function Auth($cookies) {
  	
    this.isAuth = function () {
  		if ($cookies.user) {
  			return true;
  		}else {
  			return false;
  		}
  		
  	};

  	this.authenticate = function (email, password) {
  		$cookies.user = {
  			'email': email,
  			'password': password
  		}
  	}
  });
