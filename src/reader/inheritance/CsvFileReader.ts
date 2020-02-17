import fs from 'fs';

export abstract  class CsvFileReader<T> {
  data: T[] = [];

  abstract mapRow(row: string[]): T;

  constructor(public filename: string) {}

  read(): void {
    this.data = fs.readFileSync(
      this.filename,
      {
        encoding: 'utf-8'
      }
    )
    .split('\n')
    .map((row: string): string[] => row.split(','))
    .map(this.mapRow);
  }

  // football.csv 파일에 한해서만 적용되는 코드, 재사용성 낮음
  // mapRow(row: string[]): MatchData {
  //   return [
  //     dateStringToDate(row[0]),
  //     row[1],
  //     row[2],
  //     parseInt(row[3]),
  //     parseInt(row[4]),
  //     row[5] as MatchResult,
  //     row[6]
  //   ];
  // }
}
