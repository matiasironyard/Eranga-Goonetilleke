var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

// Import, set up AWS and import AWS configuration.
var AWS = require( 'aws-sdk/dist/aws-sdk-react-native' );
var s3 = new AWS.S3({
  region: 'us-east-1',
  credentials: {
    "accessKeyId": "XXXX",
    "secretAccessKey": "XXXX",
  }
});



//############ COMPONENT IMPORTS ###################/
var NavFooter = require('../templates/nav-footer.jsx').NavFooter;
var studioImages = require('../media/studioimages.js').studioImages;
var studioImages2 = require('../media/test.js').studioImages2;
console.log('studio2', studioImages2)
var studioImages3 = [];
var artistImages = require('../media/artistimages.js').artistImages;
var youtube = require('../media/youtube.js').youtube;

var params = {Bucket: 'eranga'};
s3.listObjects(params, function(err, data){
  console.log('hi', data)
  var bucketContents = data.Contents;
    for (var i = 0; i < bucketContents.length; i++){
      var urlParams = {Bucket: 'eranga', Key: bucketContents[i].Key};
        s3.getSignedUrl('getObject',urlParams, function(err, url){
          console.log('the url of the image is', url);
          var img = {
            id: bucketContents[i].Key,
            img: url,
            caption: 'hi'
          }
          studioImages3.push(img);
        });
    }
});
console.log('this', studioImages3)




//############ CONTAINERS #########################/

var Media= React.createClass({
  componentDidMount(){
    $('.parallax').parallax();
    $('.collapsible').collapsible();
    $('.slider').slider();
  },


  render: function(){

    return (
      <section id="pages" className="studio-page">{/*wrapper div*/}

        <section id="header" className="row">
          <div className="parallax-container">
            <div className="parallax">
              <img  className="parallax-img" src="./images/eranga-piano-2-banner.jpeg"/>
            </div>
            <div id="social-pane" className="col l10 offset-l1 m10 offset-m1 s12 ">
              <div id="social-icons">
              <ul id="icons">
                <li><a className="btn-floating btn-large waves-effect waves-light hoverable" href="https://www.facebook.com/studioEranga/?fref=ts" target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                <li><a className="btn-floating btn-large waves-effect waves-light hoverable" href="https://twitter.com/erangagnt" target="_blank"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                <li><a className="btn-floating btn-large waves-effect waves-light hoverable" href="https://www.linkedin.com/in/eranga-goonetilleke-mariani-9763a215" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                <li><a className="btn-floating btn-large waves-effect waves-light hoverable" href="https://www.youtube.com/user/esgoonetilleke" target="_blank"><i className="fa fa-youtube-play" aria-hidden="true"></i></a></li>
              </ul>
              </div>
            </div>
          </div>
        </section>

        <section  id="studio" className="main row">
          <div id="content" className="col l10 offset-l1 m10 offset-m1 s12 z-depth-4">
            <div id="title" className="row">
              <h1>Media Gallery</h1>
            </div>
            <ArtistGallery />
            <YoutubeGallery/>
            <StudioGallery/>
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
    var Images = studioImages.map(function(img){
      var imgUrl = img.img;
      var divStyle = {backgroundImage: 'url('+ imgUrl + ')', backgroundSize: 'cover', backgroundPosition: 'center', height: 200, width: 200};
      return(
        <li key={img.id} className="col l4">
          <img className="materialboxed media-li responsive-img" width="200" src={imgUrl} />
        </li>
      )
    });
    return(
      <div id="gallery-row" className="row">
        <h3 id="headings">Studio Gallery</h3>
        <div className="divider"/>
          <ul className="media-ul">
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
    var artist = artistImages.map(function(img){
      return(
        <li key={img.id}>
          <img className="materialboxed media-li" width="300" src={img.img}/>
        </li>
      )
    });
    return(
      <div id="gallery-row" className="row">
        <h3 id="headings">Artist Gallery</h3>
        <div className="divider"/>
        <ul className="media-ul">
          {artist}
        </ul>
      </div>
    )
  }
});

var YoutubeGallery = React.createClass({
  getInitialState() {
    return { showModal: false };
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
      return(
        <li key={video.id}  className="col l6 m6 s6">
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
