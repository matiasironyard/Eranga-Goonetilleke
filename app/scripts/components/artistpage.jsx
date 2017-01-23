var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');


//############ COMPONENT IMPORTS ###################/
var NavFooter = require('../templates/nav-footer.jsx').NavFooter;

//############ CONTAINERS #########################/

var HeaderContainer = React.createClass({
  render: function(){

    return (
      <div>

        <div id="header" className="row">
          <div id="header-image" className="col-md-12"/>
        </div>

        <div  className="row">
          <div id="artist-content" className="col-md-8 col-md-offset-2 z-depth-2">
            <div id="artist-title" className="col-md-12">
              <h3>Eranga Goonetilleke</h3>
            </div>
            <div id="about" className="col-md-12">
              <div id="about-img" className="col-md-5"/>
              <div id="about-par" className="col-md-7">
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                </p>
              </div>{/*end about-par*/}
            </div>{/*end about*/}
            <div id="about-video" className="row">
              <Youtube code="B9FiiY2Xkuk"/>
            </div>
          </div>
        </div>{/*end artist-content*/}
      </div>

    )
  }
});

var Youtube = React.createClass({
    render: function() {
        return (
            <div className="videoWrapper col-md-12">
              <div className="video row">
                <iframe src={"http://www.youtube.com/embed/" + this.props.code}
                        width="100%"
                        height="350px"
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
