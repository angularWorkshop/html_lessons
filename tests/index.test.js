import { describe, it, expect, beforeAll } from 'vitest';
import { readFileSync } from 'fs';
import { resolve } from 'path';

describe('Exercise 12.1 — Semantic Blog', () => {
  let doc;

  beforeAll(() => {
    const html = readFileSync(resolve(process.cwd(), 'index.html'), 'utf-8');
    document.documentElement.innerHTML = '';
    document.write(html);
    document.close();
    doc = document;
  });

  it('has header element', () => {
    expect(doc.querySelector('header')).not.toBeNull();
  });

  it('has nav element', () => {
    expect(doc.querySelector('nav')).not.toBeNull();
  });

  it('has main element', () => {
    expect(doc.querySelector('main')).not.toBeNull();
  });

  it('has at least 2 article elements', () => {
    expect(doc.querySelectorAll('article').length).toBeGreaterThanOrEqual(2);
  });

  it('has aside element', () => {
    expect(doc.querySelector('aside')).not.toBeNull();
  });

  it('has footer element', () => {
    expect(doc.querySelector('footer')).not.toBeNull();
  });

  it('has time elements with datetime', () => {
    expect(doc.querySelectorAll('time[datetime]').length).toBeGreaterThanOrEqual(2);
  });
});
