import { MatchData } from "../MatchData";
import { WinsAnalyzer } from "./WinsAnalyzer";
import { HtmlReport } from "./HtmlReport";

export interface Analyzer {
  run(value: MatchData[]): string
}

export interface OutputTarget {
  print(report: string): void
}

export class Summary {
  static winsAnalyzeWithHtml(team: string): Summary {
    return new Summary(new WinsAnalyzer(team), new HtmlReport());
  }

  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndAnalyze(matches: MatchData[]): void {
   const output =  this.analyzer.run(matches);
  this.outputTarget.print(output);
  }
}
