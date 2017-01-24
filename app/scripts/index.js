
var $ = require('jquery');
var Backbone = require('backbone');
require('./router.js');


$(function(){
 Backbone.history.start();

 $( document ).ready(function(){
   $('.button-collapse').sideNav({
       menuWidth: 240,
       edge: 'right', 
       closeOnClick: true,
       draggable: true
     }
   );
   $('.parallax').parallax();
    });
  });
