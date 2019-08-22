import R from 'ramda';
import parse from './src/parser';

function Main() {
  const args = process.argv.slice(2);
  const olderPath = args[0];
  const latestPath = args[1];
  try {
    var olderJSON = parse(olderPath);
    var latestJSON = parse(latestPath);
    console.log(R.equals(olderJSON, latestJSON));
  } catch (error) {
    console.error(`Could not apply the comparison between both files.`);
  }
}

module.exports = Main;
