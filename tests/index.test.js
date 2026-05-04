import { describe, it, expect, beforeAll } from 'vitest';
import { readFileSync } from 'fs';
import { resolve } from 'path';

describe('Exercise 26.1 — Product Landing', () => {
  let css, html;

  beforeAll(() => {
    css = readFileSync(resolve(process.cwd(), 'styles.css'), 'utf-8');
    html = readFileSync(resolve(process.cwd(), 'index.html'), 'utf-8');
  });

  it('uses both flex and grid', () => {
    expect(css).toContain('display: flex');
    expect(css).toContain('display: grid');
  });
  it('has semantic sections', () => {
    expect(html).toMatch(/<header/);
    expect(html).toMatch(/<main/);
    expect(html).toMatch(/<footer/);
  });
  it('has a form', () => { expect(html).toContain('<form'); });
  it('loads a font', () => { expect(html).toContain('fonts.googleapis.com'); });
});
