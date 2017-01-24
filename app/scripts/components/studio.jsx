var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');


//############ COMPONENT IMPORTS ###################/
var NavFooter = require('../templates/nav-footer.jsx').NavFooter;

//############ CONTAINERS #########################/

var Studio= React.createClass({
  render: function(){


    return (
      <div>{/*wrapper div*/}

        <div id="header" className="row">
          <div className="parallax-container">
            <div className="parallax"><img  className="parallax-img" src="./images/headshot-2.jpg"/></div>
            <div id="social-icons-pane"className="col-md-8 col-md-offset-3 col-sm-10 col-sm-offset-1">
              <ul id="social-icons" className="col-md-1 pull-right">
                <li><a className="btn-floating btn-large waves-effect waves-light" href="https://www.facebook.com/studioEranga/?fref=ts" target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                <li><a className="btn-floating btn-large waves-effect waves-light" href="https://twitter.com/erangagnt" target="_blank"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                <li><a className="btn-floating btn-large waves-effect waves-light" href="https://www.linkedin.com/in/eranga-goonetilleke-mariani-9763a215" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                <li><a className="btn-floating btn-large waves-effect waves-light"><i className="fa fa-envelope" aria-hidden="true"></i>
                </a></li>
              </ul>
            </div>
          </div>
        </div>

        <div  className="main row">
          <div id="content" className="col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1 col-xs-12 z-depth-4">
            <div id="title" className="col-md-12 hidden-xs">
              <h2>Studio Eranga</h2>
            </div>
            <div id="about" className="col-md-12 col-sm-12 col-xs-12">
              <div id="about-par" className="col-md-12 col-sm-12">
                <div id="about-img" className="col-md-5 col-sm-4 hidden-xs"/>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                </p>
              </div>{/*end about-par*/}
            </div>{/*end about*/}

            <div id="link-cards-pane" className="col-md-12 col-sm-12 col-xs-12">

              <div id="link-cards" className="left col s12 m4">
                <div className="card">
                  <div className="card-image">
                    <img src="./images/performing-1.jpg"/>
                    <span className="card-title">Resume</span>
                  </div>
                  <div className="card-content">
                    <p>I am a very simple card. I am good at containing small bits of information.
                    I am convenient because I require little markup to use effectively.</p>
                  </div>
                  <div className="card-action">
                    <a href="#" className="red-text text-darken-2">Learn More</a>
                  </div>
                </div>
              </div>

              <div id="link-cards" className="middle col s12 m4">
                <div className="card">
                  <div className="card-image">
                    <img src="./images/studio.jpg"/>
                    <span className="card-title">Studio Eranga</span>
                  </div>
                  <div className="card-content">
                    <p>I am a very simple card. I am good at containing small bits of information.
                    I am convenient because I require little markup to use effectively.</p>
                  </div>
                  <div className="card-action">
                    <a href="#" className="red-text text-darken-2">Learn More</a>
                  </div>
                </div>
              </div>

              <div id="link-cards" className="right col s12 m4">
                <div className="card">
                  <div className="card-image">
                    <img src="./images/announcements-2.jpg"/>
                    <span className="card-title">Announcements</span>
                  </div>
                  <div className="card-content">
                    <p>I am a very simple card. I am good at containing small bits of information.
                    I am convenient because I require little markup to use effectively.</p>
                  </div>
                  <div className="card-action">
                    <a href="#" className="red-text text-darken-2">Learn More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>{/*end artist-content*/}
        </div>{/*end main*/}
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
