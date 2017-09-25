var React = require('react');
var ReactDOM = require('react-dom');
var ReactMarkdown = require('react-markdown');

var studioPhilosophy = React.createClass({
  render: function(){
    return(
      <ReactMarkdown source={this.props.info.description}/>
    )
  }
})

module.exports = {
  studioPhilosophy: studioPhilosophy
}
