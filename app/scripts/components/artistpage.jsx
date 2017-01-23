var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

//############ COMPONENT IMPORTS ###################/
var NavFooter = require('../templates/nav-footer.jsx').NavFooter;







var ArtistContainer = React.createClass({
    render: function() {
        return (
          <NavFooter>
            
          </NavFooter>
        );
    }
});

module.exports = {
  ArtistContainer: ArtistContainer
}
