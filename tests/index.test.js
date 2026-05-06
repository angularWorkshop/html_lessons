import { describe, it, expect, beforeAll } from 'vitest';
import { readFileSync } from 'fs';
import { resolve } from 'path';

function stripCssComments(source) {
  return source.replace(/\/\*[\s\S]*?\*\//g, '');
}

describe('Exercise 26.1 — Product Landing', () => {
  let css, html;

  beforeAll(() => {
    css = stripCssComments(readFileSync(resolve(process.cwd(), 'styles.css'), 'utf-8'));
    html = readFileSync(resolve(process.cwd(), 'index.html'), 'utf-8');
  });

  it('uses both flex and grid', () => {
    expect(css).toContain('display: flex');
    expect(css).toContain('display: grid');
  });
  it('has landing sections and footer', () => {
    expect(html).toMatch(/<section[^>]*class="hero"/);
    expect(html).toMatch(/<section[^>]*class="features"/);
    expect(html).toMatch(/<section[^>]*class="testimonials"/);
    expect(html).toMatch(/<section[^>]*class="cta"/);
    expect(html).toMatch(/<footer/);
  });
  it('has a form', () => { expect(html).toContain('<form'); });
  it('loads a font', () => { expect(html).toContain('fonts.googleapis.com'); });
});
