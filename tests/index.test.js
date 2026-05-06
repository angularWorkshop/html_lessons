import { describe, it, expect, beforeAll } from 'vitest';
import { readFileSync } from 'fs';
import { resolve } from 'path';

function stripCssComments(source) {
  return source.replace(/\/\*[\s\S]*?\*\//g, '');
}

describe('Exercise 30.2 — Form Focus Styles', () => {
  let css;

  beforeAll(() => { css = stripCssComments(readFileSync(resolve(process.cwd(), 'styles.css'), 'utf-8')); });

  it('uses :focus or :focus-visible', () => { expect(css).toMatch(/:focus/); });
  it('uses transition on inputs', () => { expect(css).toContain('transition'); });
  it('uses box-shadow for focus', () => { expect(css).toContain('box-shadow'); });
  it('uses :active', () => { expect(css).toContain(':active'); });
});
