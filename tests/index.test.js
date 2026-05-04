import { describe, it, expect, beforeAll } from 'vitest';
import { readFileSync } from 'fs';
import { resolve } from 'path';

describe('Exercise 13.1 — Accessibility Audit', () => {
  let doc;

  beforeAll(() => {
    const html = readFileSync(resolve(process.cwd(), 'index.html'), 'utf-8');
    document.documentElement.innerHTML = '';
    document.write(html);
    document.close();
    doc = document;
  });

  it('has lang attribute on html', () => {
    expect(doc.querySelector('html').getAttribute('lang')).toBeTruthy();
  });

  it('has a skip link', () => {
    const skip = doc.querySelector('a[href="#main-content"], a[href="#main"], a.skip-link');
    expect(skip).not.toBeNull();
  });

  it('all images have alt attribute', () => {
    const imgs = doc.querySelectorAll('img');
    imgs.forEach(img => {
      expect(img.hasAttribute('alt'), 'img missing alt').toBe(true);
    });
  });

  it('uses button elements (not div onclick)', () => {
    expect(doc.querySelectorAll('button').length).toBeGreaterThanOrEqual(1);
    expect(doc.querySelectorAll('[onclick]').length).toBe(0);
  });

  it('form inputs have labels', () => {
    const inputs = doc.querySelectorAll('input:not([type="hidden"]):not([type="submit"])');
    const labels = doc.querySelectorAll('label');
    expect(labels.length).toBeGreaterThanOrEqual(inputs.length);
  });
});
