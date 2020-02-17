import fs from 'fs';

export class HtmlReport {
  print(report: string): void {
    const data = `
      <div>
        <h1>${report}</h1>
      </div>  
    `;
  
    fs.writeFileSync('index.html', data);
  }
}
