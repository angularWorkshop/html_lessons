import { describe, it, expect, beforeAll } from 'vitest';
import { readFileSync } from 'fs';
import { resolve } from 'path';

function stripCssComments(source) {
  return source.replace(/\/\*[\s\S]*?\*\//g, '');
}

describe('Exercise 28.1 — Fluid Typography', () => {
  let css;

  beforeAll(() => { css = stripCssComments(readFileSync(resolve(process.cwd(), 'styles.css'), 'utf-8')); });

  it('uses clamp()', () => { expect(css).toContain('clamp('); });
  it('uses rem for font sizes', () => { expect(css).toMatch(/[\d.]+rem/); });
  it('uses min() for container', () => { expect(css).toContain('min('); });
  it('does not use px for font-size', () => { expect(css).not.toMatch(/font-size:\s*\d+px/); });
});
