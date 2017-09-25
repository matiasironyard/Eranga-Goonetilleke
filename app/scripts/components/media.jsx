var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var contentful = require('contentful');

const SPACE_ID = 'u61pjc377pcf'
const ACCESS_TOKEN = '4d0a83dc44b5eee24e4e7276b03916173004499aa1e02bca938625b5720fa18d'

const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: SPACE_ID,
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: ACCESS_TOKEN
})

//############ COMPONENT IMPORTS ###################/
var NavFooter = require('../templates/nav-footer.jsx').NavFooter;
var Social = require('../components/social.jsx').SocialContainer;
var studioImages = require('../media/studioimages.js').studioImages;
var studioImages2 = require('../media/test.js').studioImages2;
var artistImages = require('../media/artistimages.js').artistImages;
var youtube = require('../media/youtube.js').youtube;

//############ CONTAINERS #########################/

var Media = React.createClass({
  getInitialState: function() {
    return {studioPics: [], artistPics: [], loading: <div className="loader"/>}
  },

  componentWillMount: function() {

    client.getEntries().then((response) => {
      var studioPics = response.items.filter(item => item.sys.contentType.sys.id === 'studioPics');
      var artistPics = response.items.filter(item => item.sys.contentType.sys.id === 'artistPics');
      this.setState({studioPics: studioPics[0].fields.media, artistPics: artistPics[0].fields.media, loading: null})
    }).catch(console.error)
  },

  componentDidMount() {
    $('.parallax').parallax();
    $('.collapsible').collapsible();
    $('.slider').slider();
  },

  render: function() {
    var self = this;
    var studioPics = self.state.studioPics;
    var artistPics = self.state.artistPics;
    return (
      <section id="pages" className="studio-page">{/*wrapper div*/}
        <section id="header" className="row">
          <div className="parallax-container">
            <div className="parallax">
              <img className="parallax-img" src="./images/troyades.jpg"/>
            </div>
            <Social/>
          </div>
        </section>

        <section id="studio" className="main row">
          <div id="content" className="col l10 offset-l1 m10 offset-m1 s12 z-depth-4">
            <div id="title" className="row">
              <h1>Media Gallery</h1>
            </div>
            <ArtistGallery artistPics={artistPics} loading={this.state.loading}/>
            <StudioGallery studioPics={studioPics} loading={this.state.loading}/>
            <YoutubeGallery/>
          </div>{/*end content*/}
        </section>{/*end main*/}
      </section>

    )
  }
});

var StudioGallery = React.createClass({
  componentDidMount: function() {
    $('.materialboxed').materialbox();
  },

  render: function() {
    var self = this;
    var Pics = self.props.studioPics;
    if (Pics.length === 0) {
      {
        this.props.loading
      }
    } else {
      Pics = self.props.studioPics.map((img) => {
        var key = Math.random()
        var imgUrl = img.fields.file.url
        return (
          <li key={key} className="col l4">
            <img className="materialboxed responsive-img media-li" src={imgUrl}/>
          </li>
        )
      })
    }

    return (
      <div id="gallery-row" className="row">
        <h3 id="headings">Studio Gallery</h3>
        <div className="divider"/>
        <ul className="media-ul col l12">
          {Pics}
        </ul>
      </div>
    )
  }
});

var ArtistGallery = React.createClass({

  componentDidMount: function() {
    $('.materialboxed').materialbox();
  },

  render: function() {
    var self = this;
    var Pics = self.props.artistPics;
    if (Pics.length === 0) {
      {
        this.props.loading
      }
    } else {
      Pics = self.props.artistPics.map((img) => {
        var key = Math.random()
        var imgUrl = img.fields.file.url
        return (
          <li key={key} className="col l4">
            <img className="materialboxed media-li" src={imgUrl}/>
          </li>
        )
      })
    }
    return (
      <div id="gallery-row" className="row">
        <h3 id="headings">Artist Gallery</h3>
        <div className="divider"/>
        <ul className="media-ul col l12">
          {Pics}
        </ul>
      </div>
    )
  }
});

var YoutubeGallery = React.createClass({
  getInitialState: function() {
    return {showModal: false}
  },

  close() {
    this.setState({showModal: false});
  },

  open() {
    this.setState({showModal: true});
  },

  render: function() {
    var self = this;
    var Youtube = youtube.map(function(video) {
      var key = Math.random();
      return (
        <li key={key} className="col l6 m6 s12">
          <div className="video-container media-li">
            <iframe width="853" height="480" src={video.url} frameBorder="0" allowFullScreen></iframe>
          </div>
        </li>
      )
    });
    return (
      <div id="video-row" className="row">
        <h3 id="headings">Videos</h3>
        <div className="divider"/>
        <ul className="media-ul">
          {Youtube}
        </ul>
      </div>
    )
  }
});

var MediaContainer = React.createClass({

  render: function() {

    return (
      <NavFooter>
        <Media/>
      </NavFooter>
    );
  }
});

module.exports = {
  MediaContainer: MediaContainer
}
