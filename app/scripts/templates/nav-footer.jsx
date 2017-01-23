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
        <nav className="nav">
            <div className="nav-wrapper">
              <a href="#" className="brand-logo">Eranga Goonetilleke</a>
              <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="sass.html">Sass</a></li>
                <li><a href="badges.html">Components</a></li>
                <li><a href="collapsible.html">JavaScript</a></li>
              </ul>
              <ul className="side-nav" id="mobile-demo">
                <li><a href="sass.html">Sass</a></li>
                <li><a href="badges.html">Components</a></li>
                <li><a href="collapsible.html">JavaScript</a></li>
              </ul>

            </div>
          </nav>

        <main>
          {this.props.children}
        </main>

        <footer>
          <div>test footer</div>
        </footer>
      </div>
    )
  }
});

module.exports = {
  NavFooter: NavFooter
}
