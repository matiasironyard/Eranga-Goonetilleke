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
      <div className="artist-page">{/*wrapper div*/}
        <div id="header" className="row">
          <div className="parallax-container">
            <div className="parallax"><img  className="parallax-img" src="./images/headshot-2.jpg"/></div>
            <div id="social-icons-pane"className="col-md-8 col-md-offset-3 col-sm-10 col-sm-offset-1">
              <ul id="social-icons" className="col-md-1 pull-right">
                <li><a className="btn-floating btn-large waves-effect waves-light hoverable" href="https://www.facebook.com/studioEranga/?fref=ts" target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                <li><a className="btn-floating btn-large waves-effect waves-light hoverable" href="https://twitter.com/erangagnt" target="_blank"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                <li><a className="btn-floating btn-large waves-effect waves-light hoverable" href="https://www.linkedin.com/in/eranga-goonetilleke-mariani-9763a215" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                <li><a className="btn-floating btn-large waves-effect waves-light hoverable"><i className="fa fa-envelope" aria-hidden="true"></i>
                </a></li>
              </ul>
            </div>
          </div>
        </div>

        <div  className="main row">
          <div id="content" className="col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1 col-xs-12 z-depth-4">
            <div id="title" className="col-md-12 hidden-xs">
              <h1>Eranga Goonetilleke</h1>
            </div>
            <div id="about" className="col-md-12 col-sm-12 col-xs-12">
              <div id="about-par" className="col-md-12 col-sm-12">
                <div id="about-img" className="col-md-5 col-sm-4 hidden-xs"/>
                <p>Eranga Goonetilleke is a Native Sri Lankan living in the US. She is an exceptional Broadway/Musical Theater, Opera and Jazz singer who is also known for her versatile acting and dancing skills. She travels internationally conducting master classes and vocal workshops. She continues to inspire her music students and enjoys sharing her knowledge and experience with others.</p>
                <p>Ms. Goonetilleke is not only known for her beautiful lyric Soprano voice but also as a singer of diverse technique and style. She is highly regarded for her sensitivity to the style, interpretation and emotional commitment to her repertoire.</p>
                <p>She graduated with a MM in Opera/ Musical Theater at the Southern Illinois University, Carbondale in 2011. She received her BM in Vocal performance at Converse College, SC. She is also an Associate of the Trinity College of Music, London.
                </p>
              </div>{/*end about-par*/}
            </div>{/*end about*/}

            <div id="link-cards-pane" className="col-md-12 col-sm-12 col-xs-12">

              <div id="link-cards" className="left col s12 m4">
                <div className="card hoverable">
                  <div className="card-image">
                    <img src="./images/performing-1.jpg"/>
                    <span className="card-title">Resume</span>
                  </div>
                  <div className="card-content">
                    <p>Learn about Eranga's roles, concerts and more.</p>
                  </div>
                  <div className="card-action">
                    <a href="#" className="red-text text-darken-2">Learn More</a>
                  </div>
                </div>
              </div>

              <div id="link-cards" className="middle col s12 m4">
                <div className="card hoverable">
                  <div className="card-image">
                    <img src="./images/studio.jpg"/>
                    <span className="card-title">Studio Eranga</span>
                  </div>
                  <div className="card-content">
                    <p>Weekly lessons in voice, piano, audition preparation and music theory.</p>
                  </div>
                  <div className="card-action">
                    <a href="#" className="red-text text-darken-2">Learn More</a>
                  </div>
                </div>
              </div>

              <div id="link-cards" className="right col s12 m4">
                <div className="card hoverable">
                  <div className="card-image">
                    <img src="./images/announcements-2.jpg"/>
                    <span className="card-title">Announcements</span>
                  </div>
                  <div className="card-content">
                    <p>The latest student recitals, competitions and more!</p>
                  </div>
                  <div className="card-action">
                    <a href="#" className="red-text text-darken-2">Learn More</a>
                  </div>
                </div>
              </div>
            </div>

            <div id="about-video" className="responsive-video col-md-12 col-sm-12 col-xs-12">
              <Youtube code="B9FiiY2Xkuk"/>
            </div>
          </div>{/*end artist-content*/}
        </div>{/*end main*/}
      </div>

    )
  }
});

var Youtube = React.createClass({
    render: function() {
        return (
            <div className="videoWrapper">
              <div className="video row">
                <iframe src={"http://www.youtube.com/embed/" + this.props.code}
                        width="100%"
                        height="500px"
                        frameBorder="0"
                        allowFullScreen>
                </iframe>
                </div>

            </div>
        );
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
