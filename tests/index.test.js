import { describe, it, expect, beforeAll } from 'vitest';
import { readFileSync } from 'fs';
import { resolve } from 'path';

describe('Exercise 9.2 — Feedback Form', () => {
  let doc;

  beforeAll(() => {
    const html = readFileSync(resolve(process.cwd(), 'index.html'), 'utf-8');
    document.documentElement.innerHTML = '';
    document.write(html);
    document.close();
    doc = document;
  });

  it('has a select element', () => {
    expect(doc.querySelector('select')).not.toBeNull();
  });

  it('select has optgroup', () => {
    expect(doc.querySelector('select optgroup')).not.toBeNull();
  });

  it('has a textarea', () => {
    expect(doc.querySelector('textarea')).not.toBeNull();
  });

  it('has a checkbox', () => {
    expect(doc.querySelector('input[type="checkbox"]')).not.toBeNull();
  });

  it('has fieldset with legend', () => {
    expect(doc.querySelector('fieldset')).not.toBeNull();
    expect(doc.querySelector('fieldset legend')).not.toBeNull();
  });
});
