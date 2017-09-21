var React = require('react');
var ReactDOM = require('react-dom');

var Performances = React.createClass({
  render: function(){
    console.log('a', this.props)
    return(
      <section id="performances" className="row section performances scrollspy " >
        <h3 id="headings">Studio Recitals</h3>
        <div className="divider"/>
        <div id="recital-img" className= "col l6 m6">
          <img src={this.props.info.img} style={{"width": "100%"}} className="responsive-img"/>
            <h5 id="headings">About The Recital</h5>
            <p id="secondary-text">{this.props.info.description}</p>
        </div>
        <div id="recital-details" className="col l6 m6 s12" >
          <h6 id="primary-text">Upcoming Recital</h6>
          <h4 id="headings">{this.props.info.title}</h4>
          <h6 id="primary-text">Date</h6><span id="secondary-text">{this.props.info.date}</span>
          <h6 id="primary-text">Time</h6><span id="secondary-text">4 P.M </span>
          <h6 id="primary-text">Location</h6>
          <p id="secondary-text">{this.props.info.location}</p>
          <h6 id="primary-text">Address</h6>
          <p id="secondary-text"><a href="https://goo.gl/maps/gWXjkR4yGfK2" target="_blank">{this.props.info.address}</a></p>
          <iframe className= "location-map col l12 m12" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3270.017200099404!2d-81.9208842847609!3d34.956177580369776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8857758530859ce5%3A0xd21a2373b2e741f6!2sConverse+College!5e0!3m2!1sen!2sus!4v1494083872113"  height="300" frameBorder="0" style={{border: 0 }} allowFullScreen></iframe>
        </div>
      </section>
    )
  }
})

module.exports = {
  Performances: Performances
}
