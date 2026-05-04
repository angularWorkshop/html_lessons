import { describe, it, expect, beforeAll } from 'vitest';
import { readFileSync } from 'fs';
import { resolve } from 'path';

describe('Exercise 2.1 — Business Card', () => {
  let doc;

  beforeAll(() => {
    const html = readFileSync(resolve(process.cwd(), 'index.html'), 'utf-8');
    document.documentElement.innerHTML = '';
    document.write(html);
    document.close();
    doc = document;
  });

  it('has an h1 heading', () => {
    expect(doc.querySelector('h1')).not.toBeNull();
  });

  it('has a horizontal rule', () => {
    expect(doc.querySelector('hr')).not.toBeNull();
  });

  it('has a mailto link', () => {
    const link = doc.querySelector('a[href^="mailto:"]');
    expect(link).not.toBeNull();
  });

  it('has a tel link', () => {
    const link = doc.querySelector('a[href^="tel:"]');
    expect(link).not.toBeNull();
  });

  it('uses strong for emphasis', () => {
    expect(doc.querySelector('strong')).not.toBeNull();
  });

  it('uses at least 5 different tag types', () => {
    const tags = new Set();
    doc.body.querySelectorAll('*').forEach(el => tags.add(el.tagName.toLowerCase()));
    expect(tags.size).toBeGreaterThanOrEqual(5);
  });
});
