import { describe, it, expect, beforeAll } from 'vitest';
import { readFileSync } from 'fs';
import { resolve } from 'path';

describe('Exercise 6.1 — Photo Gallery', () => {
  let doc;

  beforeAll(() => {
    const html = readFileSync(resolve(process.cwd(), 'index.html'), 'utf-8');
    document.documentElement.innerHTML = '';
    document.write(html);
    document.close();
    doc = document;
  });

  it('has at least 6 figure elements', () => {
    expect(doc.querySelectorAll('figure').length).toBeGreaterThanOrEqual(6);
  });

  it('has figcaption in each figure', () => {
    expect(doc.querySelectorAll('figure figcaption').length).toBeGreaterThanOrEqual(6);
  });

  it('all images have non-empty alt', () => {
    const imgs = doc.querySelectorAll('img');
    expect(imgs.length).toBeGreaterThan(0);
    imgs.forEach(img => {
      expect(img.hasAttribute('alt')).toBe(true);
    });
  });

  it('images have width and height', () => {
    const imgs = doc.querySelectorAll('img');
    imgs.forEach(img => {
      expect(img.hasAttribute('width')).toBe(true);
      expect(img.hasAttribute('height')).toBe(true);
    });
  });

  it('has lazy-loaded images', () => {
    const lazy = doc.querySelectorAll('img[loading="lazy"]');
    expect(lazy.length).toBeGreaterThanOrEqual(2);
  });
});
