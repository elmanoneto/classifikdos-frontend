'use strict';

angular.module('classifikdosApp')
  .service('Auth', function Auth($cookies) {
    this.isAuth = function () {
  		if ($cookies.user) {return true;}
  		return false;
  	};

  	this.authenticate = function () {
  		$cookies.user = {
  			'email': 'elmano',
  			'password': 'pwd'
  		}
  	}
  });
