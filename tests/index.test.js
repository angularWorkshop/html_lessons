import { describe, it, expect, beforeAll } from 'vitest';
import { readFileSync } from 'fs';
import { resolve } from 'path';

function stripCssComments(source) {
  return source.replace(/\/\*[\s\S]*?\*\//g, '');
}

describe('Exercise 22.2 — Flex Cards with Wrap', () => {
  let css;

  beforeAll(() => { css = stripCssComments(readFileSync(resolve(process.cwd(), 'styles.css'), 'utf-8')); });

  it('uses flex-wrap: wrap', () => { expect(css).toContain('flex-wrap: wrap'); });
  it('uses gap', () => { expect(css).toMatch(/gap/); });
  it('cards have percentage or calc width', () => { expect(css).toMatch(/%|calc/); });
});
