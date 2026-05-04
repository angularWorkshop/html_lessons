import { describe, it, expect, beforeAll } from 'vitest';
import { readFileSync } from 'fs';
import { resolve } from 'path';

describe('Exercise 16.1 — Cascade Conflicts', () => {
  let css;

  beforeAll(() => { css = readFileSync(resolve(process.cwd(), 'styles.css'), 'utf-8'); });

  it('does not use !important', () => { expect(css).not.toContain('!important'); });
  it('has specificity comments', () => { expect(css.toLowerCase()).toMatch(/specificit|специфичност/); });
  it('has class selectors', () => { expect(css).toMatch(/\.[a-z]/i); });
  it('resolves conflicts (has multiple rules for same elements)', () => {
    const ruleCount = (css.match(/\{/g) || []).length;
    expect(ruleCount).toBeGreaterThanOrEqual(8);
  });
});
