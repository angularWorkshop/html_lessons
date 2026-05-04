import { describe, it, expect, beforeAll } from 'vitest';
import { readFileSync } from 'fs';
import { resolve } from 'path';

describe('Exercise 1.2 — Meta Tags and SEO', () => {
  let doc;

  beforeAll(() => {
    const html = readFileSync(resolve(process.cwd(), 'index.html'), 'utf-8');
    document.documentElement.innerHTML = '';
    document.write(html);
    document.close();
    doc = document;
  });

  it('has meta description', () => {
    const meta = doc.querySelector('meta[name="description"]');
    expect(meta).not.toBeNull();
    expect(meta.getAttribute('content').length).toBeGreaterThan(10);
  });

  it('has og:title', () => {
    expect(doc.querySelector('meta[property="og:title"]')).not.toBeNull();
  });

  it('has og:description', () => {
    expect(doc.querySelector('meta[property="og:description"]')).not.toBeNull();
  });

  it('has og:image with absolute URL', () => {
    const meta = doc.querySelector('meta[property="og:image"]');
    expect(meta).not.toBeNull();
    expect(meta.getAttribute('content')).toMatch(/^https?:\/\//);
  });

  it('has favicon link', () => {
    const link = doc.querySelector('link[rel="icon"], link[rel="shortcut icon"]');
    expect(link).not.toBeNull();
  });

  it('has theme-color', () => {
    expect(doc.querySelector('meta[name="theme-color"]')).not.toBeNull();
  });
});
