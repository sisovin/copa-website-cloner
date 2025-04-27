import * as fs from 'fs';
import * as path from 'path';

export class FileGeneratorUtil {
  generateFile(filePath: string, content: string): void {
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(filePath, content);
  }

  generateJsonFile(filePath: string, jsonObject: any): void {
    const content = JSON.stringify(jsonObject, null, 2);
    this.generateFile(filePath, content);
  }
}
