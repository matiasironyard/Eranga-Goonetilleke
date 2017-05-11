var $ = require('jquery');
var Backbone = require('backbone');
require('./router.js');
var Flickr = require("node-flickr");
var keys = {"api_key": "171f7fa7d4af139f9f626e0aa178a96a"}
var flickr = new Flickr(keys);
//var FB = require('fb');
//console.log(FB);


$(function(){
 Backbone.history.start();
});
var myPics = []
flickr.get("photos.search", {"username":'matiasmariani83'}, function(err, result){
    if (err) return console.error(err);
    console.log(result.photos.photo[0]);
    var id = result.photos.photo[0].id;
    var owner = result.photos.photo[0].owner;
    url = 'https://www.flickr.com/photos/'+owner+'/'+id+'/';
});
console.log(myPics);

/*FB.options({version: 'v2.4'});
var fooApp = FB.extend({appId: '1849734768577552', appSecret: 'c1f4be8c88fb4c499c9f1643de5fac77'});
console.log(fooApp);
FB.setAccessToken('EAAaSUuZCPTBABANCVH3t9uhsRx8OVbNQfHDUzb8ZCAieSXnLkCibTkPaqJaFj6hmx2ndJTH4k7WDCDZA3kXDrKhW8DrkCmln1xSQob0Fnu0CDvAE4dHipWWs8QkVvlpG1t5tmxfX5YG1AHVfuNUCYpUmO9MHKvD68R6kBZAcjZA1fT2wdlZB2kFZB6rZCxMMzdoZD');

FB.api('100008931675314', function (res) {
  if(!res || res.error) {
   console.log(!res ? 'error occurred' : res.error);
   return;
  }
  console.log(res);
  console.log(res.name);
})

FB.api('3A146700286')
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        if(error.response.error.code === 'ETIMEDOUT') {
            console.log('request timeout');
        }
        else {
            console.log('error', error.message);
        }
    });*/
