import { describe, it, expect, beforeAll } from 'vitest';
import { readFileSync } from 'fs';
import { resolve } from 'path';

describe('Exercise 9.1 — Registration Form', () => {
  let doc;

  beforeAll(() => {
    const html = readFileSync(resolve(process.cwd(), 'index.html'), 'utf-8');
    document.documentElement.innerHTML = '';
    document.write(html);
    document.close();
    doc = document;
  });

  it('has a form element', () => {
    expect(doc.querySelector('form')).not.toBeNull();
  });

  it('has email input', () => {
    expect(doc.querySelector('input[type="email"]')).not.toBeNull();
  });

  it('has password input', () => {
    expect(doc.querySelector('input[type="password"]')).not.toBeNull();
  });

  it('has date input', () => {
    expect(doc.querySelector('input[type="date"]')).not.toBeNull();
  });

  it('has at least 4 labels', () => {
    expect(doc.querySelectorAll('label').length).toBeGreaterThanOrEqual(4);
  });

  it('has a submit button', () => {
    expect(doc.querySelector('button[type="submit"]')).not.toBeNull();
  });

  it('all inputs have name attribute', () => {
    const inputs = doc.querySelectorAll('input:not([type="submit"])');
    inputs.forEach(input => {
      expect(input.hasAttribute('name'), `input ${input.type} missing name`).toBe(true);
    });
  });
});
