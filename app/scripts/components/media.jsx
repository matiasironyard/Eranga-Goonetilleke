



var Images = React.createClass({
  render: function(){
    $( document ).ready(function(){
        $('.carousel.carousel-slider').carousel({
          full_width: true,
          interval:5000,
    transition:800,
        });
    });
    return(
      <div className="carousel carousel-slider">
         <a className="carousel-item" href="#one!"><img src="http://lorempixel.com/800/400/food/1"/></a>
         <a className="carousel-item" href="#two!"><img src="http://lorempixel.com/800/400/food/2"/></a>
         <a className="carousel-item" href="#three!"><img src="http://lorempixel.com/800/400/food/3"/></a>
         <a className="carousel-item" href="#four!"><img src="http://lorempixel.com/800/400/food/4"/></a>
       </div>
    )
  }
})
