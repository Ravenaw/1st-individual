var express = require('express');
var csv = require('csvtojson');
const xml2js = require('xml2js');
yaml = require('js-yaml');
var app = express();
var fs = require("fs");

app.get('/json', function (req, res) {
   fs.readFile( "./json.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})

app.get('/csv', function (req, res) {
   csv()
  .fromFile("./csv.csv")
  .then(function(jsonArrayObj)
  {
     console.log(jsonArrayObj);
       res.end( JSON.stringify(jsonArrayObj) );
   });
})

app.get('/xml', function (req, res) {
   fs.readFile( "./xml.xml", 'utf8', function (err, data) {
      console.log( data );
      xml2js.parseString(data, function (err, result) {
         console.log(JSON.stringify(result));
         res.end( JSON.stringify(result) );
      });
   });
})

app.get('/yaml', function (req, res) {
   fs.readFile( "./yaml.yaml", 'utf8', function (err, data) {
      console.log( data );
      res.end( JSON.stringify(yaml.load(data), null, 2) );
   });
})

app.get('/txt', function (req, res) {
   fs.readFile( "./text.txt", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("app listening at http://%s:%s", host, port)
})