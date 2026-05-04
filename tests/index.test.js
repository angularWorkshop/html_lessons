import { describe, it, expect, beforeAll } from 'vitest';
import { readFileSync, existsSync } from 'fs';
import { resolve } from 'path';

describe('Exercise 14.1 — HTML Portfolio', () => {
  let indexDoc;

  beforeAll(() => {
    const html = readFileSync(resolve(process.cwd(), 'index.html'), 'utf-8');
    document.documentElement.innerHTML = '';
    document.write(html);
    document.close();
    indexDoc = document;
  });

  it('index.html has nav with links', () => {
    expect(indexDoc.querySelector('nav')).not.toBeNull();
    expect(indexDoc.querySelectorAll('nav a').length).toBeGreaterThanOrEqual(3);
  });

  it('index.html has h1 and img with alt', () => {
    expect(indexDoc.querySelector('h1')).not.toBeNull();
    const img = indexDoc.querySelector('img');
    expect(img).not.toBeNull();
    expect(img.hasAttribute('alt')).toBe(true);
  });

  it('projects.html exists and has article elements', () => {
    const exists = existsSync(resolve(process.cwd(), 'projects.html'));
    expect(exists).toBe(true);
    if (exists) {
      const html = readFileSync(resolve(process.cwd(), 'projects.html'), 'utf-8');
      expect(html).toContain('<article');
    }
  });

  it('contacts.html exists and has a form', () => {
    const exists = existsSync(resolve(process.cwd(), 'contacts.html'));
    expect(exists).toBe(true);
    if (exists) {
      const html = readFileSync(resolve(process.cwd(), 'contacts.html'), 'utf-8');
      expect(html).toContain('<form');
      expect(html).toContain('<label');
    }
  });

  it('uses semantic elements', () => {
    expect(indexDoc.querySelector('header')).not.toBeNull();
    expect(indexDoc.querySelector('main')).not.toBeNull();
    expect(indexDoc.querySelector('footer')).not.toBeNull();
  });
});
