import { describe, it, expect, beforeAll } from 'vitest';
import { readFileSync } from 'fs';
import { resolve } from 'path';

function stripCssComments(source) {
  return source.replace(/\/\*[\s\S]*?\*\//g, '');
}

describe('Exercise 31.1 — CSS Loader', () => {
  let css;

  beforeAll(() => { css = stripCssComments(readFileSync(resolve(process.cwd(), 'styles.css'), 'utf-8')); });

  it('uses @keyframes', () => { expect(css).toContain('@keyframes'); });
  it('uses animation property', () => { expect(css).toContain('animation'); });
  it('has at least 2 different keyframes', () => {
    const kf = css.match(/@keyframes\s+\w+/g) || [];
    expect(kf.length).toBeGreaterThanOrEqual(2);
  });
  it('has prefers-reduced-motion', () => { expect(css).toContain('prefers-reduced-motion'); });
});
