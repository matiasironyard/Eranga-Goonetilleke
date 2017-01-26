var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');


//############ COMPONENT IMPORTS ###################/
var NavFooter = require('../templates/nav-footer.jsx').NavFooter;

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





          </div>{/*end content*/}
        </div>{/*end main*/}
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
