var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app = express();

app.get('/scrape', function(req, res){

  // web scraping stuff will happen here
  url = 'http://www.imdb.com/title/tt1229340/';

  // first parameter is the URl \
  // callback takes 3 params: an error, response, and html
  request(url, function(error, res, html){

    // first make sure no errors occur

    if(!error){
      // next we use the cheerio thing on the html
      var $ = cheerio.load(html);

      var title, release, rating;
      var json = { title: "", release: "", rating: ""};
    }
  })
})

app.listen('8081')

console.log('scraping happens on port 8081');

exports = module.exports = app;
