var $ = require('jquery');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');


//######## IMPORT COMPONENTS ################/
var ArtistContainer = require('./components/artistpage.jsx').ArtistContainer;
var StudioContainer = require('./components/studio.jsx').StudioContainer;
var ReviewsContainer= require('./components/studio-reviews.jsx').ReviewsContainer;
var MediaContainer = require('./components/media.jsx').MediaContainer;


//######## ROUTER PATHS #######################/

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'home',
    'studio/': 'studio',
    'studio/performances': 'performances',
    'studio/announcements': 'announcements',
    'studio/reviews': 'studioReviews',
    'media/': 'media',
    'contact/': 'contact'
  },


  home: function(){
  // console.log('hi index');
  ReactDOM.render(
    React.createElement(ArtistContainer, {router: this}),
    document.getElementById('app')
  );
},

studio: function(){
ReactDOM.render(
  React.createElement(StudioContainer, {router: this}),
  document.getElementById('app')
  );
},

performances: function(){
ReactDOM.render(
  React.createElement(StudioContainer, {router: this}),
  document.getElementById('app')
  );
},

announcements: function(){
ReactDOM.render(
  React.createElement(StudioContainer, {router: this}),
  document.getElementById('app')
  );
},

studioReviews: function(){
ReactDOM.render(
  React.createElement(ReviewsContainer, {router: this}),
  document.getElementById('app')
  );
},

media: function(){
ReactDOM.render(
  React.createElement(MediaContainer, {router: this}),
  document.getElementById('app')
  );
}
});


  //########### EXPORTS ##########################/
  var router = new AppRouter();
  module.exports = router;
