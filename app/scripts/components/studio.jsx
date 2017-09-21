var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var contentful = require('contentful')


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

//############ CONTAINERS #########################/

var Studio= React.createClass({

  getInitialState(){
    return{
      recital: []
    }
  },

  componentDidMount(){
    $('.parallax').parallax();
    $('.collapsible').collapsible();
    $('.slider').slider({height: '700px'});
    $('.modal').modal();
    if(window.location.hash === '#studio/performances'){
      //document.getElementById('performances').scrollIntoView(true, {passive: true});
      //document.getElementById('performances').scrollTop = 200;
    } else if (window.location.hash === '#studio/announcements'){
      //document.getElementById('announcements').scrollIntoView(true, {passive: true});
    } else {
      //document.getElementById('header').scrollIntoView({passive: true});
    }

    client.getEntry('1M4t1ucuD6wECkoU04WCgw')
    .then((entry) => {
      var img = entry.fields.media.sys.id;
      var title = entry.fields.title;
      var description = entry.fields.description;
      var date = entry.fields.date;
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
          location: location,
          address: address,
          map: map,
          img: recitalImg,
          active: active,
        }})
      })
    //  this.setState({recitals: entry})
    }
  )
    .catch(console.error)
  },


  render: function(){
    console.log('h', this.state)

    return (
      <section  id="pages" className="studio-page">{/*wrapper div*/}

        <section id="header" className="row">
          <div className="parallax-container">
            <div className="parallax">
              <img  className="parallax-img" src="./images/studiochristmas.jpg"/>
            </div>
            <Social/>
          </div>
        </section>

        <section  id="studio" className="main row">
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
                <div id="about-par"className="col l5">
                  <div id="studio-about-img" className="col l4 hide-on-med-and-down"/>
                  <div className="col l12 m12 s12">
                  <h3 id="headings">About the Studio</h3>
                  <div className="divider"/>
                  <p id="primary-text">Studio Eranga is located in Spartanburg, SC. Students receive lessons in voice, piano, audition preparation and music theory. The studio grew from less than ten students to more than fourty since  its stablishment in 2013! Mrs. Goonetilleke&#39;s students earned acolytes in local and state wide competitions and have been admitted into prestigious schools from around the country. Mrs. Goonetilleke also teaches at The Lawson Academy of the Arts at Converse College, S.C.</p>
                  </div>
                </div>{/*end about-par*/}
                <div id="about-par" className="col l7">
                  <h3 id="headings">Studio Phylosophy</h3>
                  <div className="divider"/>
                  <p id="primary-text">Music, in my opinion, is the language of the soul. Music not only entertains, but it brings immence joy, comfort and healing. Whether you like to sing in the shower or on stage, you sing because it is one of the most authentic ways of expressing who you are! No matter what culture, background, age, ethnicity or sex, music, can be a positive hobby, escape or even a way of life.</p>
                  <div>
                    <blockquote>
                      "If I were not a physicist, I would probably be a musician. I often think in music. I live my daydreams in music. I see my life in terms of music... I get most joy in life out of my violin." -Albert Einstein, 1929
                    </blockquote>
                  </div>
                  <p id="primary-text">It is a universal language that connects us all to each other and develops our personality and spirituality.
                  It gives me great joy to help students discover and develop their gifts by providing them with healthy technique, tools to be a better performer, performing opportunities and inspiration!
                  </p>
                  <div className="col l12 m12 s12">
                        <img src="./images/inspire.jpg"className="responsive-img" style={{"width": "100%"}}/>
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
                    <Announcements/>
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
  componentDidMount: function(){
    $('.modal').modal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
    //  opacity: .5, // Opacity of modal background
      inDuration: 200, // Transition in duration
      outDuration: 200, // Transition out duration
      startingTop: '10%', // Starting top style attribute
      endingTop: '10%', // Ending top style attribute
    });
  },
  render: function(){
    var self = this;
    var myReviews = reviews.map(function(reviews){
      var id = '#'+reviews.id;
      return (
        <li key={reviews.id} id="review-card" className="col l4 m4 s11 valign">
          <a className="modal-trigger" href={id}>
            <p id="review-title">{reviews.title}...</p>
          </a>
            <div id={reviews.id} className="modal bottom-sheet">
              <div className="modal-content col l8 offset-l2">
                <p id="review-text">{reviews.review}<br></br><span className="pull-right">~ {reviews.reviewer}</span></p>
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

var Announcements = React.createClass({
  render: function(){
    var self = this;
    var myAnnouncements = announcements.map(function(announcement){
      var key = Math.random();
      return (
        <div className="col l6 " key={key}>
          <div key={announcement.name} id="announcement-card " className="card">
            <div className="card-image waves-effect waves-block waves-light">
              <img src={announcement.img} alt="Cate Seegars" className="activator" />
            </div>
            <div className="card-content">
              <h4 id="headings">{announcement.name}</h4>
              <h5 id="subheadings">{announcement.subheading}</h5>
              <p id="secondary-text">{announcement.caption}</p>
            </div>
          </div>
        </div>
      )
    });

    return(
      <div>
        {myAnnouncements}
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
