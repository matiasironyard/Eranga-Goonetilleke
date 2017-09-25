var React = require('react');
var ReactDOM = require('react-dom');
var ReactMarkdown = require('react-markdown');


var aboutStudio = React.createClass({
  render: function(){
    return(
      <ReactMarkdown source={this.props.info.description} />
    )
  }
})

module.exports = {
  aboutStudio: aboutStudio
}
