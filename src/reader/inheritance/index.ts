import { MatchReader } from "./MatchReader";
import { Summary } from "../summary/Summary";
import { WinsAnalyzer } from '../summary/WinsAnalyzer';
import { HtmlReport } from "../summary/HtmlReport";
import { ConsoleReport } from "../summary/ConsoleReport";

const matchReducer = new MatchReader('football.csv');
matchReducer.read();

// for console report
const consoleSummary = new Summary(new WinsAnalyzer('Man United'), new ConsoleReport());
consoleSummary.buildAndAnalyze(matchReducer.data);

// for html file report
const htmlSummary = new Summary(new WinsAnalyzer('Man United'), new HtmlReport());
htmlSummary.buildAndAnalyze(matchReducer.data);

// const summary = Summary.winsAnalyzeWithHtml('Man United').buildAndAnalyze(matchReducer.data);