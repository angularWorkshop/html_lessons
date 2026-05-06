import { describe, it, expect, beforeAll } from 'vitest';
import { readFileSync } from 'fs';
import { resolve } from 'path';

function stripCssComments(source) {
  return source.replace(/\/\*[\s\S]*?\*\//g, '');
}

describe('Exercise 32.1 — CSS Themes', () => {
  let css;

  beforeAll(() => { css = stripCssComments(readFileSync(resolve(process.cwd(), 'styles.css'), 'utf-8')); });

  it('uses CSS custom properties (--var)', () => { expect(css).toMatch(/--[\w-]+:/); });
  it('uses var()', () => { expect(css).toContain('var(--'); });
  it('has :root with variables', () => { expect(css).toContain(':root'); });
  it('has dark theme', () => { expect(css).toMatch(/data-theme|prefers-color-scheme:\s*dark/); });
  it('no hardcoded colors outside variables', () => {
    const rules = css.replace(/:root\s*\{[^}]+\}/gs, '').replace(/\[data-theme[^\}]+\}/gs, '');
    const hardcoded = rules.match(/color:\s*#[0-9a-f]{3,8}/gi) || [];
    expect(hardcoded.length).toBe(0);
  });
});
