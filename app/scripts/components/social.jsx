var React = require('react');
var ReactDOM = require('react-dom');

var SocialContainer = React.createClass({
  render: function(){
    return(
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
    )
  }
})

module.exports = {
  SocialContainer: SocialContainer
}
