import { describe, it, expect, beforeAll } from 'vitest';
import { readFileSync } from 'fs';
import { resolve } from 'path';

function stripCssComments(source) {
  return source.replace(/\/\*[\s\S]*?\*\//g, '');
}

describe('Exercise 15.2 — Advanced Selectors', () => {
  let css;

  beforeAll(() => { css = stripCssComments(readFileSync(resolve(process.cwd(), 'styles.css'), 'utf-8')); });

  it('uses child combinator >', () => { expect(css).toContain('>'); });
  it('uses adjacent sibling +', () => { expect(css).toContain('+'); });
  it('uses attribute selector []', () => { expect(css).toMatch(/\[.+\]/); });
  it('uses href attribute selector', () => { expect(css).toMatch(/\[href/); });
  it('uses required attribute selector', () => { expect(css).toContain('[required]'); });
});
