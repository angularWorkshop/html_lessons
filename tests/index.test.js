import { describe, it, expect, beforeAll } from 'vitest';
import { readFileSync } from 'fs';
import { resolve } from 'path';

function stripCssComments(source) {
  return source.replace(/\/\*[\s\S]*?\*\//g, '');
}

describe('Exercise 36.1 — Modern CSS', () => {
  let css;

  beforeAll(() => { css = stripCssComments(readFileSync(resolve(process.cwd(), 'styles.css'), 'utf-8')); });

  it('uses scroll-behavior: smooth', () => { expect(css).toContain('scroll-behavior: smooth'); });
  it('uses scroll-snap', () => { expect(css).toContain('scroll-snap'); });
  it('uses :has()', () => { expect(css).toContain(':has('); });
  it('uses CSS nesting (& selector)', () => { expect(css).toMatch(/&\s/); });
});
