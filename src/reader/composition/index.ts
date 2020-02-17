import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { Summary } from "../summary/Summary";
import { WinsAnalyzer } from '../summary/WinsAnalyzer';
import { HtmlReport } from "../summary/HtmlReport";
import { ConsoleReport } from "../summary/ConsoleReport";

// composition
const matchReader = new MatchReader(new CsvFileReader('football.csv'));
matchReader.load();
// console.log(matchReader.matches);

// shortcut by using static methods
const shortcut = MatchReader.fromCSV('football.csv');
shortcut.load();
// console.log(shortcut.matches);

// for console report
const consoleSummary = new Summary(new WinsAnalyzer('Man United'), new ConsoleReport());
consoleSummary.buildAndAnalyze(matchReader.matches);

// for html file report
const htmlSummary = new Summary(new WinsAnalyzer('Man United'), new HtmlReport());
htmlSummary.buildAndAnalyze(matchReader.matches);
