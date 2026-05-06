import { describe, it, expect, beforeAll } from 'vitest';
import { readFileSync } from 'fs';
import { resolve } from 'path';

function stripCssComments(source) {
  return source.replace(/\/\*[\s\S]*?\*\//g, '');
}

describe('Exercise 33.1 — Pseudo-elements', () => {
  let css;

  beforeAll(() => { css = stripCssComments(readFileSync(resolve(process.cwd(), 'styles.css'), 'utf-8')); });

  it('uses ::before', () => { expect(css).toContain('::before'); });
  it('uses :nth-child', () => { expect(css).toContain(':nth-child'); });
  it('uses ::placeholder', () => { expect(css).toContain('::placeholder'); });
  it('uses ::selection', () => { expect(css).toContain('::selection'); });
  it('uses :focus-visible', () => { expect(css).toContain(':focus-visible'); });
});
