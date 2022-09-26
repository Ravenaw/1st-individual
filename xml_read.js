const xml2js = require('xml2js');
const util = require('util');
const fs = require('fs');
const parser = new xml2js.Parser();

let xml_string = fs.readFileSync("xml.xml", "utf8");

parser.parseString(xml_string, function(error, result) {
    if(error === null) {
        console.log(util.inspect(result, false, null));
    }
    else {
        console.log(error);
    }
});