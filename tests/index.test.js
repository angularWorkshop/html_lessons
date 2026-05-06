import { describe, it, expect } from 'vitest';
import { readFileSync } from 'fs';
import { resolve } from 'path';

function stripCssComments(source) {
  return source.replace(/\/\*[\s\S]*?\*\//g, '');
}

describe('Exercise 15.1 — Basic Selectors', () => {
  let css;

  beforeAll(() => { css = stripCssComments(readFileSync(resolve(process.cwd(), 'styles.css'), 'utf-8')); });

  it('has tag selectors', () => { expect(css).toMatch(/^[a-z]+\s*\{/m); });
  it('has class selectors', () => { expect(css).toMatch(/\.[a-z]/i); });
  it('has universal selector', () => { expect(css).toContain('*'); });
  it('has grouping (comma)', () => { expect(css).toMatch(/,\s*\n?\s*h[1-6]/); });
  it('linked via external file', () => {
    const html = readFileSync(resolve(process.cwd(), 'index.html'), 'utf-8');
    expect(html).toContain('rel="stylesheet"');
  });
});
