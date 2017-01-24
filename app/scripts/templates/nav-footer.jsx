var React = require('react');
var ReactDOM = require('react-dom');
var $ = window.jQuery = require('jquery');



var NavFooter = React.createClass({
  render: function(){

    return (
      <div>
        <div>
          <nav className="N/A transparent">
            <div className="nav-wrapper">
              <a href="#!" className="brand-logo">Eranga Goonetilleke</a>
              <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
              <ul className="right hide-on-med-and-down">
                <li><a href="">Artist</a></li>
                <li><a href="#studio/">Studio</a></li>
                <li><a href="collapsible.html">Media</a></li>
              </ul>
              <ul className="side-nav" id="mobile-demo">
                <li><a href="">Artist</a></li>
                <li><a href="#studio/">Studio</a></li>
                <li><a href="collapsible.html">Media</a></li>
              </ul>
            </div>
          </nav>

        </div>

        <main className="row">
          {this.props.children}
        </main>

        <footer className="page-footer N/A transparent">
          <div className="container">
            <div className="row">
              <div className="col l6 s10">
                <h5 className="grey-text text-darken-3">Contact me!</h5>
                  <div id="social-icons-footer"className="row">
                      <div className="col-md-2 col-sm-3 col-xs-3"><a className="btn-floating btn-small waves-effect waves-light" href="https://www.facebook.com/studioEranga/?fref=ts" target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i></a></div>
                      <div className="col-md-2 col-sm-3 col-xs-3"><a className="btn-floating btn-small waves-effect waves-light" href="https://twitter.com/erangagnt" target="_blank"><i className="fa fa-twitter" aria-hidden="true"></i></a></div>
                      <div className="col-md-2 col-sm-3 col-xs-3"><a className="btn-floating btn-small waves-effect waves-light" href="https://www.linkedin.com/in/eranga-goonetilleke-mariani-9763a215" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i></a></div>
                      <div className="col-md-2 col-sm-3 col-xs-3"><a className="btn-floating btn-small waves-effect waves-light"><i className="fa fa-envelope" aria-hidden="true"></i>
                      </a></div>
                  </div>
              </div>
              <div className="col l4 offset-l2 s2">
                <h5 className="grey-text text-darken-3">Links</h5>
                <ul>
                  <div><a className="grey-text text-darken-3" href="">Artist</a></div>
                  <div><a className="grey-text text-darken-3" href="#studio/">Studio</a></div>
                  <div><a className="grey-text text-darken-3" href="#!">Media</a></div>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container grey-text text-darken-3">
            © 2017 Eranga Goonetilleke
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
