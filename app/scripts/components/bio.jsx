var React = require('react');
var ReactDOM = require('react-dom');
var ReactMarkdown = require('react-markdown');

var Bio = React.createClass({
  render: function(){
    return(
      <ReactMarkdown source={this.props.info} />
    )
  }
})

module.exports = {
  Bio: Bio
}
