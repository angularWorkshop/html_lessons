import { describe, it, expect, beforeAll } from 'vitest';
import { readFileSync } from 'fs';
import { resolve } from 'path';

function stripCssComments(source) {
  return source.replace(/\/\*[\s\S]*?\*\//g, '');
}

describe('Exercise 18.1 — Gradient Cards', () => {
  let css;

  beforeAll(() => { css = stripCssComments(readFileSync(resolve(process.cwd(), 'styles.css'), 'utf-8')); });

  it('uses linear-gradient', () => { expect(css).toContain('linear-gradient'); });
  it('uses radial-gradient', () => { expect(css).toContain('radial-gradient'); });
  it('uses HSL colors', () => { expect(css).toMatch(/hsl/i); });
  it('uses currentColor', () => { expect(css.toLowerCase()).toContain('currentcolor'); });
  it('has at least 4 card styles', () => {
    const cards = (css.match(/\.card/g) || []).length;
    expect(cards).toBeGreaterThanOrEqual(4);
  });
});
