import { Injectable } from '@nestjs/common';
import * as puppeteer from 'puppeteer';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class WebsiteClonerUtil {
  async cloneWebsite(url: string, outputDir: string): Promise<void> {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle2' });

    const content = await page.content();
    const outputPath = path.join(outputDir, 'index.html');
    fs.writeFileSync(outputPath, content);

    await browser.close();
  }
}
