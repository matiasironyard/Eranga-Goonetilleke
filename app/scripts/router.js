var $ = require('jquery');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');


//######## IMPORT COMPONENTS ################/
var ArtistContainer = require('./components/artistpage.jsx').ArtistContainer;

//######## ROUTER PATHS #######################/

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'studio/': 'studio',
    'media/': 'media',
    'contact/': 'contact'
  },

  index: function(){
  // console.log('hi index');
  ReactDOM.render(
    React.createElement(ArtistContainer, {router: this}),
    document.getElementById('app')
  );
},

});


  //########### EXPORTS ##########################/
  var router = new AppRouter();
  module.exports = router;
