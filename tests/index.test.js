import { describe, it, expect, beforeAll } from 'vitest';
import { readFileSync } from 'fs';
import { resolve } from 'path';

describe('Exercise 7.1 — Schedule Table', () => {
  let doc;

  beforeAll(() => {
    const html = readFileSync(resolve(process.cwd(), 'index.html'), 'utf-8');
    document.documentElement.innerHTML = '';
    document.write(html);
    document.close();
    doc = document;
  });

  it('has a table with caption', () => {
    expect(doc.querySelector('table')).not.toBeNull();
    expect(doc.querySelector('caption')).not.toBeNull();
  });

  it('has thead, tbody, tfoot', () => {
    expect(doc.querySelector('thead')).not.toBeNull();
    expect(doc.querySelector('tbody')).not.toBeNull();
    expect(doc.querySelector('tfoot')).not.toBeNull();
  });

  it('has th with scope="col"', () => {
    expect(doc.querySelectorAll('th[scope="col"]').length).toBeGreaterThanOrEqual(1);
  });

  it('has th with scope="row"', () => {
    expect(doc.querySelectorAll('th[scope="row"]').length).toBeGreaterThanOrEqual(1);
  });

  it('uses colspan or rowspan', () => {
    const hasSpan = doc.querySelector('[colspan]') || doc.querySelector('[rowspan]');
    expect(hasSpan).not.toBeNull();
  });
});
