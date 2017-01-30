var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');


//############ COMPONENT IMPORTS ###################/
var NavFooter = require('../templates/nav-footer.jsx').NavFooter;
var reviews = require('../media/reviews.js').reviews;
var announcements = require('../media/announcements.js').announcements;

//############ CONTAINERS #########################/

var Studio= React.createClass({
  componentDidMount(){
    $('.parallax').parallax();
    $('.collapsible').collapsible();
    $('.slider').slider();
  },

  render: function(){

    return (
      <div  id="pages" className="studio-page">{/*wrapper div*/}

        <div id="header" className="row">
          <div className="parallax-container">
            <div className="parallax">
              <img  className="parallax-img" src="./images/recital-pic.jpg"/>
            </div>
            <div id="social-icons-pane"className="col l8 offset-l3 m10 offset-m1 s10">
              <ul id="social-icons" className="col l1 m1 s1 pull-right">
                <li><a className="btn-floating btn-large waves-effect waves-light hoverable" href="https://www.facebook.com/studioEranga/?fref=ts" target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                <li><a className="btn-floating btn-large waves-effect waves-light hoverable" href="https://twitter.com/erangagnt" target="_blank"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                <li><a className="btn-floating btn-large waves-effect waves-light hoverable" href="https://www.linkedin.com/in/eranga-goonetilleke-mariani-9763a215" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                <li><a className="btn-floating btn-large waves-effect waves-light hoverable" href="https://www.youtube.com/user/esgoonetilleke" target="_blank"><i className="fa fa-youtube-play" aria-hidden="true"></i></a></li>
              </ul>
            </div>
          </div>
        </div>

        <div  id="studio" className="main row">
          <div id="content" className="col l10 offset-l1 m10 offset-m1 s12 z-depth-4">
            <div id="title" className="row">
              <h1>Studio Eranga</h1>
            </div>
            <div id="slider-pane" className="row hidden-xs">
              <div className="slider">
                <ul id="slides" className="slides">
                  <li>
                    <img src="./images/finley-2.jpg"/>
                    <div className="caption center-align">
                      <h3 id="headings">Dream</h3>
                    </div>
                  </li>
                  <li>
                    <img src="./images/carson.jpg"/>
                    <div className="caption left-align">
                      <h3 id="headings">Perform</h3>
                    </div>
                  </li>
                  <li>
                    <img src="./images/inspire.jpg"/>
                    <div className="caption right-align">
                      <h3>Inspire</h3>
                    </div>
                  </li>
                </ul>
              </div>
            </div>{/*end slider-pane*/}
            <Reviews/>
            <div id="about" className="row">
              <div id="about-description" className="col l10 offset-l1">
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
                  <img src="./images/announcements-2.jpg"className="responsive-img"/>
                </div>{/*end about-par*/}
              </div>{/*end about-right*/}
            </div>{/*end studio-pane*/}

            <div id="announcements-pane" className="row">
              <div className="col l10 offset-l1 m12 s12">

                <div id="section" className="row">
                  <h2 id="headings">Recitals</h2>
                  <div className="divider"/>
                  <div id="recital-img" className= "col l6 m6">
                    <img src="./images/announcements-2.jpg" className="responsive-img"/>
                  </div>
                  <div id="recital-details" className="col l6 m6 s12">
                    <h6 id="primary-text">Recital</h6><span id="secondary-text">Spring Recital</span>
                    <h6 id="primary-text">Date</h6><span id="secondary-text">TBA</span>
                    <h6 id="primary-text">Time</h6><span id="secondary-text"></span>
                    <h6 id="primary-text">Location</h6><span></span>
                    <div id="location-map"/>
                  </div>
                </div>{/*end recital section row*/}

                <div id="section" className="row">
                  <h2 id="headings" className="announcement">Announcements</h2>
                  <div className="divider"/>
                  <div id="recital-details" className="col l12">
                    <Announcements/>
                  </div>
                </div>{/*end announcement section row*/}
              </div>
            </div>

          </div>{/*end content*/}
        </div>{/*end main*/}
      </div>

    )
  }
});

var Reviews = React.createClass({
  componentDidMount: function(){
    $('.modal').modal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: 0, // Opacity of modal background
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
          <a href={id}>
            <p id="review-title" className="">{reviews.title}...</p>
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
      <div className="row"  id="reviews">
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
      console.log(announcement);
      return (
        <div key={announcement.name} id="announcement-card" className="col l6">
          <img src={announcement.img} alt="" className="responsive-img"/>
          <h5 id="headings">{announcement.name}</h5>
          <p id="secondary-text">{announcement.caption}</p>
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
