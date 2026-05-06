import { describe, it, expect, beforeAll } from 'vitest';
import { readFileSync } from 'fs';
import { resolve } from 'path';

function stripCssComments(source) {
  return source.replace(/\/\*[\s\S]*?\*\//g, '');
}

describe('Exercise 17.1 — Article Typography', () => {
  let css, html;

  beforeAll(() => {
    css = stripCssComments(readFileSync(resolve(process.cwd(), 'styles.css'), 'utf-8'));
    html = readFileSync(resolve(process.cwd(), 'index.html'), 'utf-8');
  });

  it('uses rem for font sizes', () => { expect(css).toMatch(/font-size:\s*[\d.]+rem/); });
  it('has line-height without units', () => { expect(css).toMatch(/line-height:\s*[\d.]+;/); });
  it('loads a Google Font', () => { expect(html).toContain('fonts.googleapis.com'); });
  it('has text-overflow ellipsis', () => { expect(css).toContain('text-overflow'); });
  it('has max-width on container', () => { expect(css).toMatch(/max-width/); });
});
