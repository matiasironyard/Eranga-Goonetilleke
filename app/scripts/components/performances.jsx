var React = require('react');
var ReactDOM = require('react-dom');
var ReactMarkdown = require('react-markdown');

var Performances = React.createClass({
  getInitialState() {
    return {location: '', media: ''}
  },
  componentWillReceiveProps(nextProps) {
    this.setState({
      location: nextProps.info.mapLocation,
      media: nextProps.info.media.fields.file.url
    })
  },
  render: function() {

    var mapLink = `https://www.google.com/maps/dir/?api=1&destination=${this.state.location.lat},${this.state.location.lon}&travelmode=driving`;

    return (
      <section id="performances" className="row section performances scrollspy ">
        <h3 id="headings">Perfomances</h3>
        <div className="divider"/>
        <div id="recital-img" className="col m6">
          <img src={this.state.media} style={{
            "width": "100%"
          }} className="responsive-img"/>
        </div>
        <div id="recital-local" className="col m6">
          <h3 id="headings">{this.props.info.title}</h3>
          <h6 id="primary-text">Date</h6>
          <span id="secondary-text">{this.props.info.date}</span>
          <h6 id="primary-text">Time</h6>
          <span id="secondary-text">{this.props.info.time}</span>
          <h6 id="primary-text">Location</h6>
          <p id="secondary-text">{this.props.info.location}</p>
          <h6 id="primary-text">Address</h6>
          <p id="secondary-text">
            <a href={mapLink} target="_blank">{this.props.info.address}</a>
          </p>
        </div>
        <div id="recital-details" className="col s12">
          <ReactMarkdown source={this.props.info.description}/>
        </div>

      </section>
    )
  }
})

module.exports = {
  Performances: Performances
}
