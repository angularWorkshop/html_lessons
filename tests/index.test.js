import { describe, it, expect, beforeAll } from 'vitest';
import { readFileSync } from 'fs';
import { resolve } from 'path';

function stripCssComments(source) {
  return source.replace(/\/\*[\s\S]*?\*\//g, '');
}

describe('Exercise 27.1 — Responsive Navigation', () => {
  let css;

  beforeAll(() => { css = stripCssComments(readFileSync(resolve(process.cwd(), 'styles.css'), 'utf-8')); });

  it('uses @media', () => { expect(css).toContain('@media'); });
  it('uses min-width (mobile-first)', () => { expect(css).toContain('min-width'); });
  it('does not use max-width in media queries', () => { expect(css).not.toMatch(/@media[^{]*max-width/); });
  it('has at least 2 breakpoints', () => {
    const matches = css.match(/@media/g) || [];
    expect(matches.length).toBeGreaterThanOrEqual(2);
  });
});
