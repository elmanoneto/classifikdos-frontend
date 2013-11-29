'use strict';

angular.module('classifikdosApp')
  .directive('search', function () {
    return {
      restrict: 'A',
      link: function search(scope, element, attrs) {
        var change = 0;
        $(this).stop();
        $('.input-search').focus(function () {      
          if(change != 1){
            $(this).animate({width:'+=285px'}, 'linear');
          }
          
          change = 1;
        });

        $('.input-search').focusout(function () {

          $(this).stop();
          if(change != 0){
            $(this).animate({width:'-=285px'}, 'linear');
          }
          
          change = 0;
        });
      }
    };
  });
