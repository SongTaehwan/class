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

// NOTE: Composition (interface) vs inheritance (abstract class)
// inheritance를 이용하면 비슷한 기능 다른 서브 클래스를 매번 정의해야함, 중복 코드
// ex) parent class Circle, Rectangle -> Circle window, Rectangle widow and so on
// Composition을 이용하면 중복되는 서브클래스의 생성을 방지하고 클래스간의 의존성을 낮춤(Circle이믄 뭐든 interface과 일치하는 모든 클래스를 사용할 수 있음)
// ex) class Window(class Circle or class Rectangle)

// Design Patterns written Elements of Reusable Object-Oriented Software
// instead of making class Window a subclass of Rectangle (because windows happen to be rectangular),
// the Window class might reuse the behavior of Rectangle by keeping a Rectangle instance variable
// and 'delegating' Rectangle-specific behavior to it.
// In other words, instead of a Window being a Rectangle, it would 'have' a Rectangle.

// in the book, Composition means one object has a reference to another object or possibly multiple objects
