'use strict';

angular.module('classifikdosApp')
  .controller('AnunciosCtrl', function ($scope, Auth) {

    Auth.checkUser();


  });
