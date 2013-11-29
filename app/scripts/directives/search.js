'use strict';

angular.module('classifikdosApp')
  .directive('search', function () {
    return {
      restrict: 'A',
      link: function search(scope, element, attrs) {
        var change = 0;
          
        $('.input-search').focus(function () {      
          if(change != 1){
            $(this).animate({width:'+=200px',left:'-=20px'}, 'linear');
          }
          
          change = 1;
        });

        $('.input-search').focusout(function () {
          
          if(change != 0){
            $(this).animate({width:'-=200px',left:'-=10px'}, 'linear');
          }
          
          change = 0;
        });
      }
    };
  });
