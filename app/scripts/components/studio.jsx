var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');


//############ COMPONENT IMPORTS ###################/
var NavFooter = require('../templates/nav-footer.jsx').NavFooter;

//############ CONTAINERS #########################/

var Studio= React.createClass({
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
              <img  className="parallax-img" src="./images/eranga-piano-2-banner.jpeg"/>
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
              <h1>Studio Eranga</h1>
            </div>
            <div id="slider-pane" className="row">
              <div className="slider">
                <ul id="slides" className="slides">
                  <li>
                    <img src="./images/finley-2.jpg"/>
                    <div className="caption center-align">
                      <h3 id="headings">Dream</h3>
                    </div>
                  </li>
                  <li>
                    <img src="./images/carson.jpg"/>
                    <div className="caption left-align">
                      <h3 id="headings">Perform</h3>
                    </div>
                  </li>
                  <li>
                    <img src="./images/inspire.jpg"/>
                    <div className="caption right-align">
                      <h3>Inspire</h3>
                    </div>
                  </li>
                </ul>
              </div>
            </div>{/*end slider-pane*/}

            <div id="studio-pane" className="row">
              <div id="about-description" className="col-md-6">
                <div id="about-par">
                  <h3 id="headings">About the Studio</h3>
                  <div className="divider"/>
                  <p>Studio Eranga is located in Spartanburg, SC. Students received lesson in voice, piano, and theory. Say more about the studio</p>
                </div>{/*end about-par*/}
                <div id="about-par">
                  <h3 id="headings">Studio Phylosophy</h3>
                  <div className="divider"/>
                  <p>Music, in my opinion, is the language of the soul. Music not only entertains, but it brings immence joy, comfort and healing. Whether you like to sing in the shower or on stage, you sing because it is one of the most authentic ways of expressing who you are! No matter what culture, background, age, ethnicity or sex, music, can be a positive hobby, escape or even a way of life.</p>
                  <div>
                    <blockquote>
                      "If I were not a physicist, I would probably be a musician. I often think in music. I live my daydreams in music. I see my life in terms of music... I get most joy in life out of my violin." -Albert Einstein, 1929
                    </blockquote>
                  </div>
                  <p>It is a universal language that connects us all to each other and develops our personality and spirituality.
                  It gives me great joy to help students discover and develop their gifts by providing them with healthy technique, tools to be a better performer, performing opportunities and inspiration!
                  </p>
                </div>{/*end about-par*/}
              </div>{/*end about-right*/}

              <div id="about-reviews" className="col-md-5 col-md-offset-1 col-sm-8 col-sm-offset-2">
                <h4 id="headings">Reviews</h4>
                <div className="divider"/>
                <ul className="collapsible" data-collapsible="accordion" id="reviews">
                    <li>
                      <div className="collapsible-header truncate">"Eranga is an extraordinary music teacher and person. I have had many voice teachers... "</div>
                      <div className="collapsible-body"><p id="review-text">"Eranga is an extraordinary music teacher and person. I have had many voice teachers, and she has been the best I've had. She goes above and beyond with each of her students to make sure that they learn, improve, understand and grow in music. I had been singing for over 10 years when I met Eranga, and she was the first teacher that asked me if I knew what the words meant that I was singing. We worked on understanding what each word and note meant-and it took my singing from good to great. The tone and quality improved in my voice in a matter of months, along with the place in my heart from which I was singing. Being taught by Eranga has made all the difference in my love for voice, and Eranga is a teacher who not only teaches you music, but also about who you are, and helps you become the artist you want to be. Thank you!" <br></br>~Lacey Key</p></div>
                    </li>
                    <li>
                      <div className="collapsible-header truncate active">"Eranga is absolutely wonderful. I came to her with a simple of wish..."</div>
                      <div className="collapsible-body"><p id="review-text">"Eranga is absolutely wonderful. I came to her with a simple of wish of wanting to improve my vocals and gained so much more. Her knowledge and passion is evident in her teaching and her support for her students is overflowing. It has been so rewarding learning under her, and because of her love and talent for this craft, I now have a new appreciation/ discipline for music and singing that I will always cherish. I am truly blessed to call her my teacher. Thank You for all you you do!" <br></br>~Amanda Darchiville</p></div>
                    </li>
                    <li>
                      <div className="collapsible-header truncate">"Eranga is an excellent teacher! She is extremely knowledgable..."</div>
                      <div className="collapsible-body"><p id="review-text">"Eranga is an excellent teacher! She is extremely knowledgable about the intricacies of the voice and has helped my daughter to focus on improving her vocal strength and quality. Carson trusts and values Eranga's expertise in her field." <br></br>~Kelli Hardigree</p></div>
                    </li>
                    <li>
                      <div className="collapsible-header truncate">"This has truly been a wonderful first year for Finley! It's amazing to see..."</div>
                      <div className="collapsible-body"><p id="review-text">"This has truly been a wonderful first year for Finley! It's amazing to see how her little voice has developed and the confidence she's gained. We absolutely Love Mrs. Eranga!!"<br></br>~Christy Sloan</p></div>
                    </li>
                    <li>
                      <div className="collapsible-header truncate">"Eranga is a gifted teacher and you can see the results when you hear her students perform..."</div>
                      <div className="collapsible-body"><p id="review-text">"Eranga is a gifted teacher and you can see the results when you hear her students perform. They are confident and clearly enjoy making music, and they perform with great expression and musicality. It is a pleasure to hear them!"<br></br>~Susan Baker</p></div>
                    </li>
                    <li>
                      <div className="collapsible-header truncate">"Eranga is an awesome teacher! She has helped my daughter..."</div>
                      <div className="collapsible-body"><p id="review-text">"Eranga is an awesome teacher! She has helped my daughter take her voice to an even greater level of performance. Eranga also has a positive spirit and is a great mentor."<br></br>~Barbara Key</p></div>
                    </li>
                    <li>
                      <div className="collapsible-header truncate">"I can't believe it's already been almost a year since I have been vocal training with Eranga Goonetilleke..."</div>
                      <div className="collapsible-body"><p id="review-text">"The Eranga Experience:
                        I can't believe it's already been almost a year since I have been vocal training with Eranga Goonetilleke. Straying far away from a learning environment, and being constantly enveloped in a 9 to 5 lifestyle, I knew it was time for a fresh reality and challenge. My love for singing led me to Eranga, who had worked previously with my sister. Her stern yet positive and inspiring teaching methodology has driven me to learn so much about my vocal potential; showing me a side of myself I never knew. Every lesson is an exciting new stepping stone to conquer With her guidance, I feel confident on my path. Looking forward to what the future holds in vocal training with Eranga! Thank You!."<br></br>~Steven Darchiville</p></div>
                    </li>
                  </ul>
              </div>
            </div>{/*end studio-pane*/}
            <div id="announcements-pane" className="row">
              <div className="divider"/>
              <div className="row">
                <h2 id="headings">Announcements</h2>
              </div>
              <div id="recital-card"className="col s12 m6">
                <div className="card large">
                  <div className="card-image">
                    <img src="./images/recital-pic.jpg"/>
                    <span className="card-title">Recitals</span>
                  </div>
                  <div className="card-content">
                    <p>I am a very simple card. I am good at containing small bits of information.
                    I am convenient because I require little markup to use effectively.</p>
                  </div>
                  <div className="card-action">
                    <a href="#">See Details</a>
                    </div>
                  </div>
                </div>{/*end recital card*/}
                <div id="recital-card"className="col s12 m6">
                  <div className="card large">
                    <div className="card-image">
                      <img src="./images/congrats.jpg"/>
                      <span className="card-title">Congratulations!</span>
                    </div>
                    <div className="card-content">
                      <p>I am a very simple card. I am good at containing small bits of information.
                      I am convenient because I require little markup to use effectively.</p>
                    </div>
                    <div className="card-action">
                      <a href="#">See Details</a>
                      </div>
                    </div>
                  </div>{/*end recital card*/}
              </div>



          </div>{/*end content*/}
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
