var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app = express();

app.get('/scrape', function(req, res){

  // web scraping stuff will happen here

})

app.listen('8081')

console.log('scraping happens on port 8081');

exports = module.exports = app;
