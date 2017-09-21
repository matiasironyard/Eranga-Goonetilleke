var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');




//############ COMPONENT IMPORTS ###################/
var NavFooter = require('../templates/nav-footer.jsx').NavFooter;
var Social = require('../components/social.jsx').SocialContainer;
var studioImages = require('../media/studioimages.js').studioImages;
var studioImages2 = require('../media/test.js').studioImages2;
var artistImages = require('../media/artistimages.js').artistImages;
var youtube = require('../media/youtube.js').youtube;

//############ CONTAINERS #########################/

var Media= React.createClass({
  getInitialState: function(){
    return {
      studioPics: [],
      artistPics: [],
    }
  },

  componentWillMount: function(){
    var studioPics = this.props.studioPics;
    var artistPics = this.props.artistPics;
    var artistLoading = this.props.artistLoading;
    var studioLoading = this.props.studioLoading;
    this.setState({
      studioPics: studioPics,
      artistPics: artistPics,
      artistLoading: artistLoading,
      studioLoading: studioLoading
    })
  },

  componentWillReceiveProps: function(nextProps){
    this.setState({
      studioPics: nextProps.studioPics,
      artistPics: nextProps.artistPics,
      artistLoading: nextProps.artistLoading,
      studioLoading: nextProps.studioLoading
    })
  },

  componentDidMount(){
    $('.parallax').parallax();
    $('.collapsible').collapsible();
    $('.slider').slider();
  },


  render: function(){
    var self = this;
    var studioPics = self.state.studioPics;
    var artistPics = self.state.artistPics;
    var artistLoading = self.state.artistLoading;
    var studioLoading = self.state.studioLoading;
    return (
      <section id="pages" className="studio-page">{/*wrapper div*/}
        <section id="header" className="row">
          <div className="parallax-container">
            <div className="parallax">
              <img  className="parallax-img" src="./images/troyades.jpg"/>
            </div>
            <Social/>
          </div>
        </section>

        <section  id="studio" className="main row">
          <div id="content" className="col l10 offset-l1 m10 offset-m1 s12 z-depth-4">
            <div id="title" className="row">
              <h1>Media Gallery</h1>
            </div>
            <ArtistGallery artistPics={artistPics} artistLoading={artistLoading}/>
            <StudioGallery studioPics={studioPics} studioLoading={studioLoading}/>
            <YoutubeGallery/>
          </div>{/*end content*/}
        </section>{/*end main*/}
      </section>

    )
  }
});

var StudioGallery = React.createClass({
  componentDidMount: function(){
    $('.materialboxed').materialbox();
  },

  render: function(){
    var self = this;
    var pics = self.props.studioPics;
    var Images = pics.map(function(imgUrl){
      var key = Math.random()
      return(
        <li key={key} className="col l4">
          <img className="materialboxed media-li responsive-img" height="300" src={imgUrl} />
        </li>
      )
    });
    return(
      <div id="gallery-row" className="row">
        <h3 id="headings">Studio Gallery</h3>
          <div className="col l12">
           {self.props.studioLoading}
          </div>
        <div className="divider"/>
          <ul className="media-ul col l12">
            {Images}
          </ul>
        </div>
    )
  }
});

var ArtistGallery = React.createClass({

  componentDidMount: function(){
    $('.materialboxed').materialbox();
  },

  render: function(){
    var self = this;
    var pics = self.props.artistPics;
    var artist = pics.map(function(imgUrl){
      var key = Math.random();
      return(
        <li key={key} className="col l4">
          <img className="materialboxed media-li img-responsive" height="300" src={imgUrl}/>
        </li>
      )
    });
    return(
      <div id="gallery-row" className="row">
        <h3 id="headings">Artist Gallery</h3>
        <div className="divider"/>
        <div className="col l12">
         {self.props.artistLoading}
        </div>
        <ul className="media-ul col l12">
          {artist}
        </ul>
      </div>
    )
  }
});

var YoutubeGallery = React.createClass({
  getInitialState: function(){
    return {
      showModal: false,
    }
  },

  close() {
    this.setState({ showModal: false });
  },

  open() {
    this.setState({ showModal: true });
  },

  render: function(){
    var self = this;
    var Youtube = youtube.map(function(video){
      var key = Math.random();
      return(
        <li key={key}  className="col l6 m6 s12">
            <div className="video-container media-li">
              <iframe width="853" height="480" src={video.url} frameBorder="0" allowFullScreen></iframe>
            </div>
        </li>
      )
    });
    return(
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
  getInitialState: function(){
    return {
      studioPics: [],
      artistPics: [],
      s3Pics: [],
      artistLoading: <div className="loader"></div>,
      studioLoading: <div className="loader"></div>
    };
  },

  componentWillMount: function() {
    var self = this;
    //Studio Ajax Call
    var studioPics = [];
    var studioImages3 = [];
    $.ajax({
      url: "https://s3.amazonaws.com/studioerangastudio/",
      dataType: "xml",
      success: function(xml) {
        $(xml).find('Contents').each(function() {
          var key = $(this).find('Key').text()
          var url = "https://s3.amazonaws.com/studioerangastudio/" + key;
          studioPics.push(url);
          self.setState({
            studioPics: studioPics,
            studioLoading: ''
          })
        });
      },
      error: function() {
        console.log('errors')
      },
    });
    //Artist Ajax Call
    var artistPics = [];
    $.ajax({
      url: "https://s3.amazonaws.com/studioerangaartist/",
      dataType: "xml",
      success: function(xml) {
        $(xml).find('Contents').each(function() {
          var key = $(this).find('Key').text()
          var url = "https://s3.amazonaws.com/studioerangaartist/" + key;
          artistPics.push(url);
          self.setState({
            artistPics: artistPics,
            artistLoading: ''
          })
        });
      },
      error: function() {
        console.log('errors')
      },
    });
  },

  render: function() {
    var studioPics = this.state.studioPics;
    var artistPics = this.state.artistPics;
    var s3Pics = this.state.s3Pics;

      return (
        <NavFooter>
          <Media studioPics={studioPics} artistPics={artistPics} artistLoading={this.state.artistLoading} studioLoading={this.state.studioLoading}/>
        </NavFooter>
      );
  }
});

module.exports = {
  MediaContainer: MediaContainer
}
