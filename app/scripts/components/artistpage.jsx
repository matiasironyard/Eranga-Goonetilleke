var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

//############ COMPONENT IMPORTS ###################/
var NavFooter = require('../templates/nav-footer.jsx').NavFooter;

//############ CONTAINERS #########################/

var HeaderContainer = React.createClass({
  componentDidMount() {
    $('.parallax').parallax();
  },

  render: function() {
    return (
      <section id="pages" className="artist-page">{/*wrapper div*/}
        <section id="header" className="row">
          <div className="parallax-container">
            <div className="parallax"><img className="parallax-img" align='bottom' src="./images/troyades.jpg"/></div>
            <div id="social-pane" className="col l10 offset-l1 m10 offset-m1 s12 ">
              <div id="social-icons">
                <ul id="icons">
                  <li>
                    <a className="btn-floating btn-large waves-effect waves-light hoverable" href="https://www.facebook.com/studioEranga/?fref=ts" target="_blank">
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a className="btn-floating btn-large waves-effect waves-light hoverable" href="https://twitter.com/erangagnt" target="_blank">
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a className="btn-floating btn-large waves-effect waves-light hoverable" href="https://www.linkedin.com/in/eranga-goonetilleke-mariani-9763a215" target="_blank">
                      <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a className="btn-floating btn-large waves-effect waves-light hoverable" href="https://www.youtube.com/user/esgoonetilleke" target="_blank">
                      <i className="fa fa-youtube-play" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
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
                    <p id="primary-text">Eranga Goonetilleke is a Native Sri Lankan living in the US. She is an exceptional Broadway/Musical Theater, Opera and Jazz singer who is also known for her versatile acting and dancing skills. She travels internationally conducting master classes and vocal workshops. She continues to inspire her music students and enjoys sharing her knowledge and experience with others.</p>
                    <p id="primary-text">Ms. Goonetilleke is not only known for her beautiful lyric Soprano voice but also as a singer of diverse technique and style. She is highly regarded for her sensitivity to the style, interpretation and emotional commitment to her repertoire.</p>
                    <p id="primary-text">She graduated with a MM in Opera/ Musical Theater at the Southern Illinois University, Carbondale in 2011. She received her BM in Vocal performance at Converse College, SC. She is also an Associate of the Trinity College of Music, London.
                    </p>
                  </div>

                </div>

              </article>{/*end about-par*/}
            </section>{/*end about*/}


{/*
              <hr/>
            <section id="link-cards-pane" className="row">
              <div className="col m12">
                <div id="link-cards" className="left col m6 ">
                  <div className="card medium hoverable">
                    <div className="card-image">
                      <img src="./images/troyades.jpg"/>
                    </div>
                    <div className="card-content">
                      <span className="card-title">Performances</span>
                      <p id="secondary-text">Upcoming performances by Eranga Gooneteilleke.</p>
                    </div>
                    <div className="card-action">
                      <a href="#studio/performances" className="blue-text text-darken-2">Schedule</a>
                    </div>
                  </div>
                </div>

                <div id="link-cards" className="right col m6">
                  <div className="card medium hoverable">
                    <div className="card-image">
                      <img src="./images/studio.jpg"/>
                    </div>
                    <div className="card-content">
                      <span className="card-title">Studio Eranga</span>
                      <p id="secondary-text">Weekly lessons in voice, piano, audition preparation and music theory.</p>
                    </div>
                    <div className="card-action">
                      <a href="#studio/" className="blue-text text-darken-2">Learn More</a>
                      <a href="#studio/announcements" className="blue-text text-darken-2">Achivements</a>
                    </div>
                  </div>
                </div>
              </div>
            </section>{/*end card pane
            */}

            <section id="artist-performances" className="row section performances scrollspy ">
              <h3 id="headings">Performances</h3>
              <div className="divider"/>
              <div id="recital-img" className="col l6 m6">
                <img src="./images/nooneisalone.jpg" style={{
                  "width": "100%"
                }} className="responsive-img"/>
                <h5 id="headings">About The Recital</h5>
                <p id="secondary-text">Aimee Gans, mezzo-soprano & Eranga Goonetilleke, soprano, with Mildred Roche, piano.</p>
                <p>We share some of the most beautiful, painful, hilarious, and precious moments of life with our families. Join us for a recital celebrating these relationships, with songs that will make you laugh, cry and remember that truly, no one is alone.</p>
                <p id="secondary-text">Hope to see you all there!</p>
              </div>
              <div id="recital-details" className="col l6 m6 s12">
                <h6 id="primary-text">Past Performance</h6>
                <h4 id="headings">No One Is Alone</h4>
                <h6 id="primary-text">Date</h6>
                <span id="secondary-text">Saturday, September 4th</span>
                <h6 id="primary-text">Time</h6>
                <span id="secondary-text">4 P.M
                </span>
                <h6 id="primary-text">Location</h6>
                <p id="secondary-text">Daniel Recital Hall (Blackman music building), Converse College</p>
                <h6 id="primary-text">Address</h6>
                <p id="secondary-text">
                  <a href="https://goo.gl/maps/gWXjkR4yGfK2" target="_blank">580 E Main St, Spartanburg, SC 29302</a>
                </p>
                <iframe className="location-map col l12 m12" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3270.017200099404!2d-81.9208842847609!3d34.956177580369776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8857758530859ce5%3A0xd21a2373b2e741f6!2sConverse+College!5e0!3m2!1sen!2sus!4v1494083872113" height="300" frameBorder="0" style={{
                  border: 0
                }} allowFullScreen></iframe>
              </div>
            </section>{/*end recital section row*/}

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
