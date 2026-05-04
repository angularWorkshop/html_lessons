import { describe, it, expect, beforeAll } from 'vitest';
import { readFileSync } from 'fs';
import { resolve } from 'path';

describe('Exercise 34.1 — BEM Refactor', () => {
  let css;

  beforeAll(() => { css = readFileSync(resolve(process.cwd(), 'styles.css'), 'utf-8'); });

  it('uses BEM element notation (__)', () => { expect(css).toMatch(/\.__/); });
  it('uses BEM modifier notation (--)', () => { expect(css).toMatch(/\.[\w]+--/); });
  it('no deep nesting (no space-separated selectors with 3+ parts)', () => {
    const deep = css.match(/^\s*\.\w+\s+\.\w+\s+\.\w+\s*\{/gm) || [];
    expect(deep.length).toBe(0);
  });
});
