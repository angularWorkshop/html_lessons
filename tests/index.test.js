import { describe, it, expect, beforeAll } from 'vitest';
import { readFileSync } from 'fs';
import { resolve } from 'path';

describe('Exercise 3.1 — Article with Quotes', () => {
  let doc;

  beforeAll(() => {
    const html = readFileSync(resolve(process.cwd(), 'index.html'), 'utf-8');
    document.documentElement.innerHTML = '';
    document.write(html);
    document.close();
    doc = document;
  });

  it('has exactly one h1', () => {
    expect(doc.querySelectorAll('h1').length).toBe(1);
  });

  it('has at least 2 h2 headings', () => {
    expect(doc.querySelectorAll('h2').length).toBeGreaterThanOrEqual(2);
  });

  it('has a blockquote with cite', () => {
    expect(doc.querySelector('blockquote')).not.toBeNull();
    expect(doc.querySelector('cite')).not.toBeNull();
  });

  it('uses strong or em for emphasis', () => {
    const hasEmphasis = doc.querySelector('strong') || doc.querySelector('em');
    expect(hasEmphasis).not.toBeNull();
  });

  it('has a code block (pre > code)', () => {
    expect(doc.querySelector('pre code') || doc.querySelector('pre')).not.toBeNull();
  });

  it('has an abbreviation with title', () => {
    const abbr = doc.querySelector('abbr[title]');
    expect(abbr).not.toBeNull();
  });
});
