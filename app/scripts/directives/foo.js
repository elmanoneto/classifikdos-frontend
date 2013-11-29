'use strict';

angular.module('classifikdosApp')
  .directive('foo', function () {
    return {
      restrict: 'E',
      templateUrl: '../../views/foo.html'
    };
  });
