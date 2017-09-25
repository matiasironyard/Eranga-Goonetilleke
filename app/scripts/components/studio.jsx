var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var contentful = require('contentful');
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
var reviews = require('../media/reviews.js').reviews;
var announcements = require('../media/announcements.js').announcements;
var StudioPhilosophy = require('../components/studioPhilosophy.jsx').studioPhilosophy;
var About = require('../components/aboutStudio.jsx').aboutStudio;
var Achievements = require('../components/achievements.jsx').achievements;

//############ CONTAINERS #########################/

var Studio = React.createClass({

  getInitialState() {
    return {recital: {}, philosophy: {}, aboutStudio: {}, achievements: {}}
  },

  componentDidMount() {
    $('.parallax').parallax();
    $('.collapsible').collapsible();
    $('.slider').slider({height: '700px'});
    $('.modal').modal();
    if (window.location.hash === '#studio/performances') {
      //document.getElementById('performances').scrollIntoView(true, {passive: true});
      //document.getElementById('performances').scrollTop = 200;
    } else if (window.location.hash === '#studio/announcements') {
      //document.getElementById('announcements').scrollIntoView(true, {passive: true});
    } else {
      //document.getElementById('header').scrollIntoView({passive: true});
    }

    client.getEntries().then((response) => {
      console.log('res', response)
      var achievements = response.items.filter(item => item.sys.contentType.sys.id === 'studentAchievement');
      var aboutStudio = response.items.filter(item => item.sys.contentType.sys.id === 'studioInfo');
      var studioPhilosophy = response.items.filter(item => item.sys.contentType.sys.id === 'studioPhilosophy');
      var studioRecital = response.items.filter(item => item.sys.contentType.sys.id === 'studioRecitals');
      this.setState({
        achievements: achievements,
        aboutStudio: aboutStudio[0].fields,
        philosophy: studioPhilosophy[0].fields,
        recital: studioRecital[0].fields,
      })
    }).catch(console.error)
  },


  render: function() {
    console.log('state', this.state)

    return (
      <section id="pages" className="studio-page">{/*wrapper div*/}

        <section id="header" className="row">
          <div className="parallax-container">
            <div className="parallax">
              <img className="parallax-img" src="./images/studiochristmas.jpg"/>
            </div>
            <Social/>
          </div>
        </section>

        <section id="studio" className="main row">
          <div id="content" className="col l10 offset-l1 m10 offset-m1 s12 z-depth-4">
            <div id="title" className="row">
              <h1>Studio Eranga</h1>
            </div>
            <div className="row studio-header">
              <div className="col s12 m4">
                <div className="card-panel teal dream background-props">
                  <h3 className="header">Dream</h3>
                </div>
              </div>

              <div className="col s12 m4">
                <div className="card-panel teal perform background-props">
                  <h3 className="header">Perform</h3>
                </div>
              </div>

              <div className="col s12 m4">
                <div className="card-panel teal inspire background-props">
                  <h3 className="header">Inspire</h3>
                </div>
              </div>

            </div>

            <section id="about" className="row">
              <article id="about-description" className="col">
                <div id="about-par" className="col l5">
                  <div id="studio-about-img" className="col l4 hide-on-med-and-down"/>
                  <div className="col l12 m12 s12">
                    <h3 id="headings">About the Studio</h3>
                    <div className="divider"/>
                    <About info={this.state.aboutStudio}/>
                  </div>
                </div>{/*end about-par*/}
                <div id="about-par" className="col l7">
                  <h3 id="headings">Studio Phylosophy</h3>
                  <div className="divider"/>

                  <StudioPhilosophy info={this.state.philosophy}/>

                  <div className="col l12 m12 s12">
                    <img src="./images/inspire.jpg" className="responsive-img" style={{
                      "width": "100%"
                    }}/>
                  </div>

                </div>{/*end about-par*/}
              </article>{/*end about-right*/}
            </section>{/*end studio-pane*/}

            <div className="hello">
              <Reviews/>
            </div>

            <section id="announcements-pane" className="row">
              <div className="col s12">

                <Performances info={this.state.recital}/>

                <section id="announcements" className="row">

                  <h3 id="headings" className="announcement">Student Achievements</h3>
                  <div className="divider"/>
                  <div id="recital-details" className="col">
                    <Achievements info={this.state.achievements}></Achievements>
                  </div>
                </section>{/*end announcement section row*/}
              </div>
            </section>

          </div>{/*end content*/}
        </section>{/*end main*/}
      </section>

    )
  }
});

var Reviews = React.createClass({
  componentDidMount: function() {
    $('.modal').modal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      //  opacity: .5, // Opacity of modal background
      inDuration: 200, // Transition in duration
      outDuration: 200, // Transition out duration
      startingTop: '10%', // Starting top style attribute
      endingTop: '10%', // Ending top style attribute
    });
  },
  render: function() {
    var self = this;
    var myReviews = reviews.map(function(reviews) {
      var id = '#' + reviews.id;
      return (
        <li key={reviews.id} id="review-card" className="col l4 m4 s11 valign">
          <a className="modal-trigger" href={id}>
            <p id="review-title">{reviews.title}...</p>
          </a>
          <div id={reviews.id} className="modal bottom-sheet">
            <div className="modal-content col l8 offset-l2">
              <p id="review-text">{reviews.review}
                <br></br>
                <span className="pull-right">~ {reviews.reviewer}</span>
              </p>
            </div>
          </div>
        </li>
      )
    });
    return (
      <div className="row">
        <div id="about-reviews" className="col l10 offset-l1">
          <h3 id="headings">Reviews</h3>
          <div className="divider"/>
          <ul>
            {myReviews}
          </ul>
          <div className="divider"/>
        </div>
      </div>
    )
  }
});


var StudioContainer = React.createClass({
  render: function() {
    return (
      <NavFooter>
        <Studio/>
      </NavFooter>
    );
  }
});

module.exports = {
  StudioContainer: StudioContainer
}
