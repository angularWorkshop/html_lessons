import { describe, it, expect, beforeAll } from 'vitest';
import { readFileSync } from 'fs';
import { resolve } from 'path';

describe('Exercise 16.1 — Cascade & Specificity Conflicts', () => {
  let css;

  beforeAll(() => {
    css = readFileSync(resolve(process.cwd(), 'styles.css'), 'utf-8');
  });

  it('has no unfinished TODO prompts', () => {
    expect(css).not.toMatch(/TODO:/i);
  });

  it('documents all ten conflicts', () => {
    const conflicts = css.match(/CONFLICT\s+\d+/gi) || [];
    expect(conflicts.length).toBeGreaterThanOrEqual(10);
  });

  it('explains winning rules instead of only leaving raw CSS', () => {
    const wins = css.match(/wins?|WINS|побежда/i) || [];
    expect(wins.length).toBeGreaterThan(0);
    expect(css).toMatch(/class beats tag|ID beats|specificity|специфичн/i);
  });

  it('contains specificity calculations', () => {
    const calculations = css.match(/\b\d-\d-\d\b/g) || [];
    expect(calculations.length).toBeGreaterThanOrEqual(8);
  });

  it('covers source order, inline style, inheritance, universal selector, and important', () => {
    expect(css).toMatch(/source order|later in source/i);
    expect(css).toMatch(/inline/i);
    expect(css).toMatch(/inherit/i);
    expect(css).toMatch(/universal|\*/i);
    expect(css).toMatch(/!important/i);
  });
});
