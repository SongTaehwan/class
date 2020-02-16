import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResult';

const csvFileReader = new CsvFileReader('football.csv');
csvFileReader.read();

console.log(csvFileReader.data[0][0]);
let wins = 0;

for (let match of csvFileReader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) { // very indicative
    wins++;
  }

  if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    wins++;
  }
}

console.log('Man United won games: ', wins);
