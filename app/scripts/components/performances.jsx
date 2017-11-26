var React = require('react');
var ReactDOM = require('react-dom');
var ReactMarkdown = require('react-markdown');
var moment = require('moment');

var Performances = React.createClass({
  getInitialState() {
    return {location: '', media: '', description: ''}
  },
  componentWillReceiveProps(nextProps) {
    this.setState({location: nextProps.info.mapLocation, media: nextProps.info.media.fields.file.url, description: nextProps.info.description})
  },
  render: function() {

    var mapLink = `https://www.google.com/maps/dir/?api=1&destination=${this.state.location.lat},${this.state.location.lon}&travelmode=driving`;
    var date = moment(this.props.info.date).format("dddd, MMM Do, YYYY");
    var time = moment(this.props.info.date).format('h:mm a');

    return (
      <section id="performances" className="row section performances scrollspy ">
        <div className="col s12">
          <div className="card horizontal">
            <div className="card-image">
              <img src={this.state.media}/>
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <h5 id="secondary-subheadings">Perfomances</h5>
                <h3 id="headings">{this.props.info.title}</h3>
                  <ReactMarkdown source={this.state.description} containerProps={{
                    "id": "primary-text"
                  }}/>
                <hr/>
                <h6 id="primary-text">Date</h6>
                <span id="secondary-text">{date}</span>
                <h6 id="primary-text">Time</h6>
                <span id="secondary-text">{time}</span>
                <h6 id="primary-text">Location</h6>
                <p id="secondary-text">{this.props.info.location}</p>

              </div>
              <div className="card-action">
                <h6 id="primary-text">Address</h6>
                <p id="secondary-text">
                  <a href={mapLink} target="_blank">{this.props.info.address}</a>
                </p>
              </div>
            </div>
          </div>
        </div>

      </section>
    )
  }
})

module.exports = {
  Performances: Performances
}
