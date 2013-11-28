'use strict';

angular.module('classifikdosApp')
  .controller('MainCtrl', function ($scope) {

    var change = 0;
    
    $('.input-search').focus(function () {
      console.log('oi');
      
      if(change != 1){
        $(this).animate({width:'+=200px',left:'-=20px'}, 'linear');
      }
      change = 1;
    });

    $('.input-search').focusout(function () {
      console.log('focusout');
      
      if(change != 0){
        $(this).animate({width:'-=200px',left:'-=10px'}, 'linear');
      }
      
      change = 0;
    });
    
  });
