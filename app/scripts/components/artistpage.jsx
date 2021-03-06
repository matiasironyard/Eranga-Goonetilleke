var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');


//############ COMPONENT IMPORTS ###################/
var NavFooter = require('../templates/nav-footer.jsx').NavFooter;

//############ CONTAINERS #########################/

var HeaderContainer = React.createClass({
  componentDidMount(){
    $('.parallax').parallax();
  },

  render: function(){
    return (
      <section  id="pages" className="artist-page">{/*wrapper div*/}
        <section id="header" className="row">
          <div className="parallax-container">
            <div className="parallax"><img  className="parallax-img" src="./images/headshot-2.jpg"/></div>
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

        <section  className="main row">
          <div id="content" className="col l10 offset-l1 m10 offset-m1 s12 z-depth-4">
            <section id="about" className="row">
              <article id="about-par" className="col l10 offset-l1 m11 s12">
                <div id="about-img" className="responsive-img col l6 m4 s8"/>
                <div className="col l6 m12 s12 about-text">
                  <div id="title" className="row">
                    <h1>Eranga Goonetilleke</h1>
                  </div>
                  <p id="primary-text">Eranga Goonetilleke is a Native Sri Lankan living in the US. She is an exceptional Broadway/Musical Theater, Opera and Jazz singer who is also known for her versatile acting and dancing skills. She travels internationally conducting master classes and vocal workshops. She continues to inspire her music students and enjoys sharing her knowledge and experience with others.</p>
                  <p id="primary-text">Ms. Goonetilleke is not only known for her beautiful lyric Soprano voice but also as a singer of diverse technique and style. She is highly regarded for her sensitivity to the style, interpretation and emotional commitment to her repertoire.</p>
                  <p id="primary-text">She graduated with a MM in Opera/ Musical Theater at the Southern Illinois University, Carbondale in 2011. She received her BM in Vocal performance at Converse College, SC. She is also an Associate of the Trinity College of Music, London.
                  </p>
                </div>

              </article>{/*end about-par*/}
            </section>{/*end about*/}

            <hr/>

            <section id="link-cards-pane" className="row">
              <div className="col l10 offset-l1">
                <div id="link-cards" className="left col s12 l4">
                  <div className="card medium hoverable">
                    <div className="card-image">
                      <img src="./images/performing-1.jpg"/>
                      <span className="card-title">Performances</span>
                    </div>
                    <div className="card-content">
                      <p id="secondary-text">Upcoming performances by Eranga Gooneteilleke.</p>
                    </div>
                    <div className="card-action">
                      <a href="#studio/performances" className="blue-text text-darken-2">Schedule</a>
                    </div>
                  </div>
                </div>

                <div id="link-cards" className="middle col s12 l4">
                  <div className="card medium hoverable">
                    <div className="card-image">
                      <img src="./images/studio.jpg"/>
                      <span className="card-title">Studio Eranga</span>
                    </div>
                    <div className="card-content">
                      <p id="secondary-text">Weekly lessons in voice, piano, audition preparation and music theory.</p>
                    </div>
                    <div className="card-action">
                      <a href="#studio/" className="blue-text text-darken-2">Learn More</a>
                    </div>
                  </div>
                </div>

                <div id="link-cards" className="right col s12 l4">
                  <div className="card medium hoverable">
                    <div className="card-image">
                      <img src="./images/finley.jpg"/>
                      <span className="card-title">Announcements</span>
                    </div>
                    <div className="card-content">
                      <p id="secondary-text">The latest student recitals, competitions and more!</p>
                    </div>
                    <div className="card-action">
                      <a href="#studio/announcements" className="blue-text text-darken-2">See Announcements</a>
                    </div>
                  </div>
                </div>
              </div>
            </section>{/*end card pane*/}

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
