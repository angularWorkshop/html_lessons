import { describe, it, expect, beforeAll } from 'vitest';
import { readFileSync } from 'fs';
import { resolve } from 'path';

function stripCssComments(source) {
  return source.replace(/\/\*[\s\S]*?\*\//g, '');
}

describe('Exercise 34.1 — BEM Refactor', () => {
  let css;

  beforeAll(() => { css = stripCssComments(readFileSync(resolve(process.cwd(), 'styles.css'), 'utf-8')); });

  it('uses BEM element notation (__)', () => { expect(css).toMatch(/\.[A-Za-z0-9_-]+__[A-Za-z0-9_-]+/); });
  it('uses BEM modifier notation (--)', () => { expect(css).toMatch(/\.[A-Za-z0-9_-]+--[A-Za-z0-9_-]+/); });
  it('no deep nesting (no space-separated selectors with 3+ parts)', () => {
    const deep = css.match(/^\s*\.\w+\s+\.\w+\s+\.\w+\s*\{/gm) || [];
    expect(deep.length).toBe(0);
  });
});
