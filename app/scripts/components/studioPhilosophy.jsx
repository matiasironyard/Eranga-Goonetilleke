var React = require('react');
var ReactDOM = require('react-dom');
var ReactMarkdown = require('react-markdown');

var studioPhilosophy = React.createClass({
  getInitialState(){
    return{
      philosophy: ''
    }
  },
  componentWillReceiveProps(nextState){
    this.setState({philosophy:nextState.info.description})
  },
  render: function(){

    return(
      <ReactMarkdown source={this.state.philosophy} containerProps={{"id": "primary-text"}}/>
    )
  }
})

module.exports = {
  studioPhilosophy: studioPhilosophy
}
