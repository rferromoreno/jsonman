const fs = require('fs');
const R = require('ramda');

function Main() {
  const args = process.argv.slice(2);
  var olderPath = args[0];
  var latestPath = args[1];
  var olderJSON = JSON.parse(fs.readFileSync(olderPath, 'utf8'));
  var latestJSON = JSON.parse(fs.readFileSync(latestPath, 'utf8'));
  console.log(R.equals(olderJSON, latestJSON));
}

module.exports = Main;
