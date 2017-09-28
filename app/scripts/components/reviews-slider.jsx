var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

var ReviewsSlider = React.createClass({
  componentDidMount() {
    $('.slider').slider({'interval': '1000', 'indicators': false, 'height': '100px'});
  },

  render: function(){
    return(
      <div className="slider" id="slider">
          <ul className="slides" id="slides">
            <li>
                <p className="secondary-text">"Eranga is an extraordinary music teacher and person. I have had many voice teachers, and she has been the best I've had..."</p>
            </li>
            <li>
                <p className="secondary-text">"Eranga is an excellent teacher! She is extremely knowledgable about the intricacies of the voice..."</p>
            </li>
          </ul>
        </div>
    )
  }
})

module.exports = {
  ReviewsSlider: ReviewsSlider
}
