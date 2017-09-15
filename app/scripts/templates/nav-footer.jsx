var React = require('react');
var ReactDOM = require('react-dom');
var $ = window.jQuery = require('jquery');
var router = require('../router.js');




var NavFooter = React.createClass({
  componentDidMount(){
    $('.button-collapse').sideNav({
          menuWidth: 200, // Default is 240
          edge: 'left', // Choose the horizontal origin
          closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
          draggable: true // Choose whether you can drag to open on touch screens
        }
      );
  },
  render: function(){

    return (
      <div>
        <div>
          <nav className="white navbar-fixed-top">
            <div className="nav-wrapper">
              <a href="" className="brand-logo">Eranga Goonetilleke</a>
              <a href="" data-activates="mobile-demo" className="button-collapse" id="collapse-mod"><i className="material-icons">menu</i></a>
              <ul className="right hide-on-med-and-down desk-links">
                <li className="fill"><a href="">Artist</a></li>
                <li className="fill"><a href="#studio/">Studio</a></li>
                <li className="fill"><a href="#media/">Media</a></li>
              </ul>
              <ul className="side-nav" id="mobile-demo">
                <li><a href="" className="brand-logo">Eranga Goonetilleke</a></li>
                <li><hr/></li>
                <li><a href="">Artist</a></li>
                <li><a href="#studio/">Studio</a></li>
                <li><a href="#media/">Media</a></li>
              </ul>
            </div>
          </nav>

        </div>

        <main className="row">
          {this.props.children}
        </main>

        <footer className="footer row" id="footer-row">
          <div className="col l10 offset-l1 s12 footer-col" id="footer-col">
            <div className="col l4 offset-l2 s9">
              <h5 className="grey-text text-darken-3">Contact me!</h5>
                <div id="social-icons-footer"className="row">
                    <div className="col m2 s2"><a className="social-button" href="https://www.facebook.com/studioEranga/?fref=ts" target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i></a></div>
                    <div className="col m2 s2"><a className="social-button" href="https://twitter.com/erangagnt" target="_blank"><i className="fa fa-twitter" aria-hidden="true"></i></a></div>
                    <div className="col m2 s2"><a className="social-button" href="https://www.linkedin.com/in/eranga-goonetilleke-mariani-9763a215" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i></a></div>
                    <div className="col m2 s2"><a className="social-button" href="mailto:studioeranga@gmail.com"><i className="fa fa-envelope" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
            </div>
            <div className="col l4 offset-l2 s3">
              <h5 className="grey-text text-darken-3">Links</h5>
              <ul>
                <div id="footer-links"><a className="grey-text text-darken-3" href="">Artist</a></div>
                <div id="footer-links"><a className="grey-text text-darken-3" href="#studio/">Studio</a></div>
                <div id="footer-links"><a className="grey-text text-darken-3" href="#media/">Media</a></div>
              </ul>
            </div>
            <div className="col l12 s12 copyright">
              <div className="row grey-text text-darken-2 center-align">
              © 2017 Eranga Goonetilleke
              </div>
              <div className="row center-align">
               <a href="http://www.matiasmariani.io" target="_blank">Designed by Matias Mariani</a>
              </div>

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
