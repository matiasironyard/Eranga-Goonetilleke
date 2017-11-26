

var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var contentful = require('contentful');


const SPACE_ID = 'u61pjc377pcf'
const ACCESS_TOKEN = '4d0a83dc44b5eee24e4e7276b03916173004499aa1e02bca938625b5720fa18d'

const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: SPACE_ID,
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: ACCESS_TOKEN
})

//############ COMPONENT IMPORTS ###################/
var NavFooter = require('../templates/nav-footer.jsx').NavFooter;
var Social = require('../components/social.jsx').SocialContainer;

//############ CONTAINERS #########################/

var StudioReviews = React.createClass({


  getInitialState() {
    return {
      reviews: [],
      loading: true,
    }
  },

  componentDidMount() {
    $('.parallax').parallax();

    client.getEntries().then((response) => {
      var reviews = response.items.filter(item => item.sys.contentType.sys.id === 'studioReviews');
      this.setState({
        reviews: reviews,
      })
    }).catch(console.error)
  },


  render: function() {
    console.log('review', this.state.reviews)

    var reviews = this.state.reviews;
    if(reviews.length === undefined){
      reviews = <div>Loading</div>;
    } else {
      reviews = this.state.reviews.map((review)=>{
        console.log('item', review)
        var reviewer = review.fields.reviewer;
        var review = review.fields.review;
        var avatar = null;
        if(avatar === null){
          avatar = "no avatar"
        } else {
          avatar = review.fields.avatar.fields.file.url;
        }
        return (
          <div key={reviewer} className="row">
            <div className="col l3">
              <img src={avatar} alt="studio eranga"/>
            </div>

          </div>
        )
      })
    }

    return (
      <section id="pages" className="studio-page">{/*wrapper div*/}

        <section id="header" className="row">
          <div className="parallax-container">
            <div className="parallax">
              <img className="parallax-img" src="./images/studiochristmas.jpg"/>
            </div>
            <Social/>
          </div>
        </section>

        <section id="studio" className="main row">
          <div id="content" className="col l10 offset-l1 m10 offset-m1 s12 z-depth-4">
            <div id="title" className="row">
              <h1>Studio Eranga</h1>
            </div>
            <div className="row reviews-row">
              {reviews}
            </div>
          </div>
          </section>
        </section>
    )
  }
});




var ReviewsContainer = React.createClass({
  render: function() {
    return (
      <NavFooter>
        <StudioReviews/>
      </NavFooter>
    );
  }
});

module.exports = {
  ReviewsContainer: ReviewsContainer
}
