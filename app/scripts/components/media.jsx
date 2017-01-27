var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');


//############ COMPONENT IMPORTS ###################/
var NavFooter = require('../templates/nav-footer.jsx').NavFooter;
var images = require('../media/images.js').images;
var youtube = require('../media/youtube.js').youtube;


//############ CONTAINERS #########################/

var Media= React.createClass({
  componentDidMount(){
    $('.parallax').parallax();
    $('.collapsible').collapsible();
    $('.slider').slider();
  },

  render: function(){

    return (
      <div className="studio-page">{/*wrapper div*/}

        <div id="header" className="row">
          <div className="parallax-container">
            <div className="parallax">
              <img  className="parallax-img" src="./images/recital-pic.jpg"/>
            </div>
            <div id="social-icons-pane"className="col-md-8 col-md-offset-3 col-sm-10 col-sm-offset-1">
              <ul id="social-icons" className="col-md-1 pull-right">
                <li><a className="btn-floating btn-large waves-effect waves-light hoverable" href="https://www.facebook.com/studioEranga/?fref=ts" target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                <li><a className="btn-floating btn-large waves-effect waves-light hoverable" href="https://twitter.com/erangagnt" target="_blank"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                <li><a className="btn-floating btn-large waves-effect waves-light hoverable" href="https://www.linkedin.com/in/eranga-goonetilleke-mariani-9763a215" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                <li><a className="btn-floating btn-large waves-effect waves-light hoverable" href="https://www.youtube.com/user/esgoonetilleke" target="_blank"><i className="fa fa-youtube-play" aria-hidden="true"></i></a></li>
              </ul>
            </div>
          </div>
        </div>

        <div  id="studio" className="main row">
          <div id="content" className="col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1 col-xs-12 z-depth-4">
            <div id="title" className="row">
              <h1>Media Gallery</h1>
            </div>
            <ArtistGallery />
            <YoutubeGallery/>
            <StudioGallery/>
          </div>{/*end content*/}
        </div>{/*end main*/}
      </div>

    )
  }
});

var StudioGallery = React.createClass({

  componentDidMount: function(){
    $('.materialboxed').materialbox();
  },
  render: function(){
    var self = this;
    var Images = images.map(function(img){
      console.log(img.img);
      return(
        <li key={img.id}  id="media-li"className="col-md-4">
          <img src={img.img} id="images"className="responsive-img materialboxed" data-caption={img.caption}/>
        </li>
      )
    });
    return(
      <div id="gallery-row" className="row">
        <h3 id="headings">Studio Gallery</h3>
        <div className="divider"/>
        <ul id="images-ul">
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
    var Images = images.map(function(img){
      console.log(img.img);
      return(
        <li key={img.id}  id="media-li"className="col-md-4">
          <img src={img.img} id="images"className="responsive-img materialboxed" data-caption={img.caption}/>
        </li>
      )
    });
    return(
      <div id="gallery-row" className="row">
        <h3 id="headings">Artist Gallery</h3>
        <div className="divider"/>
        <ul id="images-ul">
        {Images}
        </ul>
      </div>
    )
  }
});

var YoutubeGallery = React.createClass({
  render: function(){
    var self = this;
    var Youtube = youtube.map(function(video){
      console.log(video);
      return(
        <li key={video.id}  id="media-li"className="col-md-4">
            <div className="video-container">
              <iframe width="853" height="480" src={video.url} frameBorder="0" allowFullScreen></iframe>
            </div>
        </li>
      )
    });
    return(
      <div id="video-row" className="row">
        <ul id="video-gallery">
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
