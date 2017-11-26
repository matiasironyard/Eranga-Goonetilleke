var React = require('react');
var ReactDOM = require('react-dom');
var ReactMarkdown = require('react-markdown');


var aboutStudio = React.createClass({
  getInitialState(){
    return{
      about: ''
    }
  },
  componentWillReceiveProps(nextState){
    this.setState({about:nextState.info.description})
  },
  render: function(){
    return(
      <ReactMarkdown source={this.state.about} containerProps={{"id": "primary-text"}}/>
    )
  }
})

module.exports = {
  aboutStudio: aboutStudio
}
