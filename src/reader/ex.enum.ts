import fs from 'fs';
const matches = fs.readFileSync(
  'football.csv',
  {
    encoding: 'utf-8'
  }
).split('\n').map((row): string[] => row.split(','));

let wins = 0;

// const homeWin = 'H';
// const awayWin = 'A';
// const draw = 'D'; // possible to be delete by other developer, because it's not used and doesn't look important

// This approach is not suit with origin purposes of object,
// which are recording information or storing different methods and properties
// The MatchResult object doesn't look important!
// const MatchResult = {
//   HomeWin: 'H',
//   AwayWin: 'A',
//   Draw: 'D'
// };


// use enum! when it does not have to be changed dynamically
enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D'
}

for (let match of matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) { // very indicative
    wins++;
  }

  if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    wins++;
  }
}

console.log('Man United won games: ', wins);
