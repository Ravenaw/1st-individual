const yaml = require('js-yaml');
const fs   = require('fs');
const util = require('util');

// Get document, or throw exception on error
try {
  const doc = yaml.load(fs.readFileSync('yaml.yaml'));
  console.log(util.inspect(doc));
} catch (e) {
  console.log(e);
}