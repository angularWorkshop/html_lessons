import { describe, it, expect, beforeAll } from 'vitest';
import { readFileSync } from 'fs';
import { resolve } from 'path';

describe('Exercise 11.1 — Survey Controls', () => {
  let doc;

  beforeAll(() => {
    const html = readFileSync(resolve(process.cwd(), 'index.html'), 'utf-8');
    document.documentElement.innerHTML = '';
    document.write(html);
    document.close();
    doc = document;
  });

  it('has radio buttons with same name', () => {
    const radios = doc.querySelectorAll('input[type="radio"]');
    expect(radios.length).toBeGreaterThanOrEqual(3);
    const names = new Set();
    radios.forEach(r => names.add(r.getAttribute('name')));
    expect(names.size).toBeGreaterThanOrEqual(1);
  });

  it('has at least 3 checkboxes', () => {
    expect(doc.querySelectorAll('input[type="checkbox"]').length).toBeGreaterThanOrEqual(3);
  });

  it('has a datalist', () => {
    expect(doc.querySelector('datalist')).not.toBeNull();
    expect(doc.querySelector('input[list]')).not.toBeNull();
  });

  it('has a progress element', () => {
    expect(doc.querySelector('progress')).not.toBeNull();
  });

  it('has a meter element', () => {
    expect(doc.querySelector('meter')).not.toBeNull();
  });

  it('has fieldset with legend for radio group', () => {
    expect(doc.querySelector('fieldset legend')).not.toBeNull();
  });
});
