import { describe, it, expect, beforeAll } from 'vitest';
import { readFileSync } from 'fs';
import { resolve } from 'path';

function stripCssComments(source) {
  return source.replace(/\/\*[\s\S]*?\*\//g, '');
}

describe('Exercise 20.1 — Inline-block Gallery', () => {
  let css;

  beforeAll(() => { css = stripCssComments(readFileSync(resolve(process.cwd(), 'styles.css'), 'utf-8')); });

  it('uses display: inline-block', () => { expect(css).toContain('inline-block'); });
  it('has padding on badges', () => { expect(css).toMatch(/padding/); });
  it('has border-radius', () => { expect(css).toContain('border-radius'); });
  it('handles whitespace (font-size: 0 or flex)', () => {
    expect(css).toMatch(/font-size:\s*0|display:\s*flex/);
  });
});
