var React = require('react');
var ReactDOM = require('react-dom');
var ReactMarkdown = require('react-markdown');


var studentAchievements = React.createClass({
  getInitialState(){
    return{
      achievements: '',
      loading: 'loading'
    }
  },

  componentWillReceiveProps(nextProps){
    console.log('n', nextProps)
    this.setState({achievements: nextProps.info})
  },
  render: function() {
    console.log('state', this.state.achievements)
    var announcements = this.state.achievements;
    if(announcements.length===0){
      announcements = 'no'
    } else {
      announcements = this.state.achievements.map((announcement)=>{
        var key = Math.random();
        console.log('what', announcement)
        var title = announcement.fields.title;
        var subheading = announcement.fields.subheading;
        var description = announcement.fields.description;
        var img = announcement.fields.media;
        if(img === undefined){
          <p>no</p>
        } else if (img !== undefined){
          img = img.fields.file.url;
        }
        return (
          <div className="col l6 " key={key}>
            <div id="announcement-card " className="card">
              <div className="card-image waves-effect waves-block waves-light">
                {img === "undefined" ? (
                  <div className="">
                    <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
                    <span className="sr-only">Loading...</span>
                  </div>
                ):(
                <img src={img} alt={title} className="activator"/>
                )}
              </div>
              <div className="card-content">
                <h4 id="headings">{title}</h4>
                <h5 id="subheadings">{subheading}</h5>
                <ReactMarkdown source={description} id="secondary-text"/>
              </div>
            </div>
          </div>
        )
      });
    }

    return (
      <div>
        {announcements}
      </div>
    )
  }
});

module.exports = {
  achievements: studentAchievements
}
