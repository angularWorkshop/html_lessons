import { describe, it, expect, beforeAll } from 'vitest';
import { readFileSync } from 'fs';
import { resolve } from 'path';

describe('Exercise 5.2 — Navigation Menu', () => {
  let doc;

  beforeAll(() => {
    const html = readFileSync(resolve(process.cwd(), 'index.html'), 'utf-8');
    document.documentElement.innerHTML = '';
    document.write(html);
    document.close();
    doc = document;
  });

  it('has a nav element', () => {
    expect(doc.querySelector('nav')).not.toBeNull();
  });

  it('nav contains a ul', () => {
    expect(doc.querySelector('nav ul')).not.toBeNull();
  });

  it('has at least 5 list items', () => {
    expect(doc.querySelectorAll('nav li').length).toBeGreaterThanOrEqual(5);
  });

  it('has links inside list items', () => {
    expect(doc.querySelectorAll('nav li a').length).toBeGreaterThanOrEqual(4);
  });

  it('has aria-current on current page', () => {
    const current = doc.querySelector('[aria-current="page"]');
    expect(current).not.toBeNull();
  });

  it('nav has aria-label', () => {
    const nav = doc.querySelector('nav');
    expect(nav.getAttribute('aria-label')).toBeTruthy();
  });
});
