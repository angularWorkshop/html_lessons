import { describe, it, expect, beforeAll } from 'vitest';
import { readFileSync } from 'fs';
import { resolve } from 'path';

describe('Exercise 10.1 — Order Form Validation', () => {
  let doc;

  beforeAll(() => {
    const html = readFileSync(resolve(process.cwd(), 'index.html'), 'utf-8');
    document.documentElement.innerHTML = '';
    document.write(html);
    document.close();
    doc = document;
  });

  it('has at least 3 required fields', () => {
    expect(doc.querySelectorAll('[required]').length).toBeGreaterThanOrEqual(3);
  });

  it('has an input with pattern', () => {
    expect(doc.querySelector('input[pattern]')).not.toBeNull();
  });

  it('has number input with min and max', () => {
    const num = doc.querySelector('input[type="number"]');
    expect(num).not.toBeNull();
    expect(num.hasAttribute('min')).toBe(true);
    expect(num.hasAttribute('max')).toBe(true);
  });

  it('has a formnovalidate button', () => {
    expect(doc.querySelector('[formnovalidate]')).not.toBeNull();
  });

  it('has email type input', () => {
    expect(doc.querySelector('input[type="email"]')).not.toBeNull();
  });
});
