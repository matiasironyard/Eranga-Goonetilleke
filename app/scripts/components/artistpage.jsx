var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var contentful = require('contentful')
var moment = require('moment');


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
var Performances = require('../components/performances.jsx').Performances;
var Bio = require('../components/bio.jsx').Bio;

//############ CONTAINERS #########################/

var HeaderContainer = React.createClass({
  getInitialState(){
    return{
      recital: [],
      bio: ''
    }
  },

  componentDidMount() {
    $('.parallax').parallax();

    client.getEntry('5eBeMER8X6k4AYEEyqUMmi')
    .then((entry) => this.setState({bio: entry.fields.description}))
    .catch(console.error)

    client.getEntry('15z6K8RTcqGm8S262A4Ook')
    .then((entry) => {
      console.log('dad', entry)
      var img = entry.fields.media.sys.id;
      var title = entry.fields.title;
      var description = entry.fields.description;
      var date = moment(entry.fields.date).format("MMM Do YY");
      var time = moment(entry.fields.date).format('h:mm:ss a');
      var location = entry.fields.location;
      var address = entry.fields.address;
      var map = entry.fields.mapLocation;
      var active = entry.fields.active;
      client.getAsset(img)
      .then((asset) => {
        var recitalImg = asset.fields.file.url;
        this.setState({recital: {
          title: title,
          description: description,
          date: date,
          time: time,
          location: location,
          address: address,
          map: map,
          img: recitalImg,
          active: active,
        }})
      })
    }
  )
    .catch(console.error)
  },

  render: function() {
    return (
      <section id="pages" className="artist-page">{/*wrapper div*/}
        <section id="header" className="row">
          <div className="parallax-container">
            <div className="parallax"><img className="parallax-img" align='bottom' src="./images/troyades.jpg"/></div>
            //social pane
            <Social/>
          </div>
        </section>

        <section className="main row">
          <div id="content" className="col l10 offset-l1 m10 offset-m1 s12 z-depth-4">
            <section id="about" className="row">
              <article id="about-par" className="col l10 offset-l1 m12 s12">
                <div id="title" className="row">
                  <h1>Eranga Goonetilleke</h1>
                </div>
                <div className="row about-row">
                  <div className="col l6 m12 s12">
                    <div id="about-img" className="responsive-img"/>
                  </div>
                  <div className="col l6 m12 s12 about-text">
                    <Bio id="primary-text" info={this.state.bio}/>
                  </div>

                </div>

              </article>{/*end about-par*/}
            </section>{/*end about*/}

            <section id="announcements-pane" className="row">
              <div className="col s12">

                <Performances info={this.state.recital}/>
                </div>
              </section>



            <div className="row video-header">
              <h3 id="headings">Featured Appearances</h3>
            </div>
            <section id="artist-video" className="row">
              <div className="video-container">
                <iframe width="853" height="480" src="https://www.youtube.com/embed/B9FiiY2Xkuk" frameBorder="0" allowFullScreen></iframe>
              </div>
            </section>

          </div>{/*end artist-content*/}
        </section>{/*end main*/}
      </section>

    )
  }
});

var ArtistContainer = React.createClass({
  render: function() {
    return (
      <NavFooter>
        <HeaderContainer/>
      </NavFooter>
    );
  }
});

module.exports = {
  ArtistContainer: ArtistContainer
}
