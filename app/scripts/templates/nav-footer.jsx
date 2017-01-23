var React = require('react');
var ReactDOM = require('react-dom');
var $ = window.jQuery = require('jquery');



var NavFooter = React.createClass({
  render: function(){
    $( document ).ready(function(){
      $(".button-collapse").sideNav();
    });

    return (
      <div className="content">
        <div className="navbar-fixed">
          <nav className="nav">
              <div className="nav-wrapper">
                <a href="#" className="brand-logo">Eranga Goonetilleke</a>
                <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                  <li><a href="sass.html">Artist</a></li>
                  <li><a href="badges.html">Studio</a></li>
                  <li><a href="collapsible.html">Media</a></li>
                </ul>
                <ul className="side-nav" id="mobile-demo">
                  <li><a href="sass.html">Artist</a></li>
                  <li><a href="badges.html">Studio</a></li>
                  <li><a href="collapsible.html">Media</a></li>
                </ul>
              </div>
            </nav>
          </div>

        <main className="row">
          {this.props.children}
        </main>

        <footer className="page-footer">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Contact me!</h5>
                <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Links</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="#!">Artist</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Studio</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Media</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Facebook</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2014 Eranga Goonetilleke
            </div>
          </div>
        </footer>
      </div>
    )
  }
});

module.exports = {
  NavFooter: NavFooter
}
