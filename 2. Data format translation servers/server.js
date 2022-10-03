var express = require('express');
const cors = require("cors");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
var csv = require('csvtojson');
const xml2js = require('xml2js');
yaml = require('js-yaml');
var app = express();
var fs = require("fs");

const PORT = process.env.PORT || 8081;

const options = {
   definition: {
     openapi: "3.0.0",
     info: {
       title: "Date-time API",
       version: "1.0.0",
       description: "A simple Express API",
     },
     servers: [
       {
         url: "http://localhost:8081",
       },
     ],
   },
   apis: ["./*.js"],
 };
 
const specs = swaggerJsDoc(options);

app.use("/docs", swaggerUI.serve, swaggerUI.setup(specs));
app.use(cors());app.use(cors());

/**
 * @swagger
 * tags:
 *   name: JSON
 *   description: Read JSON file
 */
/**
 * @swagger
 * /json:
 *   get:
 *     summary: Reads json file and returns the data
 *     tags: [JSON]
 *     responses:
 *       200:
 *         description: The data from the json file
 */

app.get('/json', function (req, res) {
   fs.readFile( "./json.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})

/**
 * @swagger
 * tags:
 *   name: CSV
 *   description: Read CSV file
 */
/**
 * @swagger
 * /csv:
 *   get:
 *     summary: Reads csv file and returns the data
 *     tags: [CSV]
 *     responses:
 *       200:
 *         description: The data from the csv file
 */

app.get('/csv', function (req, res) {
   csv()
  .fromFile("./csv.csv")
  .then(function(jsonArrayObj)
  {
     console.log(jsonArrayObj);
       res.end( JSON.stringify(jsonArrayObj) );
   });
})

/**
 * @swagger
 * tags:
 *   name: XML
 *   description: Read XML file
 */
/**
 * @swagger
 * /xml:
 *   get:
 *     summary: Reads xml file and returns the data
 *     tags: [XML]
 *     responses:
 *       200:
 *         description: The data from the xml file
 */

app.get('/xml', function (req, res) {
   fs.readFile( "./xml.xml", 'utf8', function (err, data) {
      console.log( data );
      xml2js.parseString(data, function (err, result) {
         console.log(JSON.stringify(result));
         res.end( JSON.stringify(result) );
      });
   });
})

/**
 * @swagger
 * tags:
 *   name: YAML
 *   description: Read YAML file
 */
/**
 * @swagger
 * /yaml:
 *   get:
 *     summary: Reads yaml file and returns the data
 *     tags: [YAML]
 *     responses:
 *       200:
 *         description: The data from the yaml file
 */

app.get('/yaml', function (req, res) {
   fs.readFile( "./yaml.yaml", 'utf8', function (err, data) {
      console.log( data );
      res.end( JSON.stringify(yaml.load(data), null, 2) );
   });
})

/**
 * @swagger
 * tags:
 *   name: TXT
 *   description: Read TXT file
 */
/**
 * @swagger
 * /txt:
 *   get:
 *     summary: Reads txt file and returns the data
 *     tags: [TXT]
 *     responses:
 *       200:
 *         description: The data from the txt file
 */

app.get('/txt', function (req, res) {
   fs.readFile( "./text.txt", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})

app.listen(PORT, () => console.log(`The server is running on port ${PORT}`));