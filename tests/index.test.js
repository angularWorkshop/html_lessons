import { describe, it, expect, beforeAll } from 'vitest';
import { readFileSync } from 'fs';
import { resolve } from 'path';

describe('Exercise 5.1 — Anchor Navigation', () => {
  let doc;

  beforeAll(() => {
    const html = readFileSync(resolve(process.cwd(), 'index.html'), 'utf-8');
    document.documentElement.innerHTML = '';
    document.write(html);
    document.close();
    doc = document;
  });

  it('has at least 5 anchor links', () => {
    const anchors = doc.querySelectorAll('a[href^="#"]');
    expect(anchors.length).toBeGreaterThanOrEqual(5);
  });

  it('has sections with matching ids', () => {
    const anchors = doc.querySelectorAll('a[href^="#"]');
    let matched = 0;
    anchors.forEach(a => {
      const id = a.getAttribute('href').slice(1);
      if (id && doc.getElementById(id)) matched++;
    });
    expect(matched).toBeGreaterThanOrEqual(3);
  });

  it('has a mailto link', () => {
    expect(doc.querySelector('a[href^="mailto:"]')).not.toBeNull();
  });

  it('has a tel link', () => {
    expect(doc.querySelector('a[href^="tel:"]')).not.toBeNull();
  });

  it('has an external link with target="_blank"', () => {
    const ext = doc.querySelector('a[target="_blank"]');
    expect(ext).not.toBeNull();
    expect(ext.getAttribute('rel')).toContain('noopener');
  });
});
