import { describe, it, expect, beforeAll } from 'vitest';
import { readFileSync } from 'fs';
import { resolve } from 'path';

function stripCssComments(source) {
  return source.replace(/\/\*[\s\S]*?\*\//g, '');
}

describe('Exercise 37.1 — Responsive Dashboard', () => {
  let css, html;

  beforeAll(() => {
    css = stripCssComments(readFileSync(resolve(process.cwd(), 'styles.css'), 'utf-8'));
    html = readFileSync(resolve(process.cwd(), 'index.html'), 'utf-8');
  });

  it('uses CSS variables', () => { expect(css).toContain('var(--'); });
  it('uses display: grid', () => { expect(css).toContain('display: grid'); });
  it('uses display: flex', () => { expect(css).toContain('display: flex'); });
  it('uses @media for responsiveness', () => { expect(css).toContain('@media'); });
  it('uses @keyframes for animation', () => { expect(css).toContain('@keyframes'); });
  it('uses BEM naming', () => { expect(css).toMatch(/__/); });
  it('has dark theme support', () => { expect(css).toMatch(/data-theme|prefers-color-scheme/); });
  it('has semantic HTML', () => {
    expect(html).toContain('<header');
    expect(html).toContain('<main');
    expect(html).toContain('<aside');
  });
});
