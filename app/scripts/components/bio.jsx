var React = require('react');
var ReactDOM = require('react-dom');
var ReactMarkdown = require('react-markdown');

var Bio = React.createClass({
  getInitialState(){
    return{
      bio: ''
    }
  },
  componentWillReceiveProps(nextState){
    this.setState({bio:nextState.info.description})
  },
  render: function(){
    console.log('this', this.props.info.description)
    return(
      <ReactMarkdown source={this.state.bio} containerProps={{"id": "primary-text"}} />
    )
  }
})

module.exports = {
  Bio: Bio
}
