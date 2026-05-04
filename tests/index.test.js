import { describe, it, expect, beforeAll } from 'vitest';
import { readFileSync } from 'fs';
import { resolve } from 'path';

describe('Exercise 4.1 — Restaurant Menu', () => {
  let doc;

  beforeAll(() => {
    const html = readFileSync(resolve(process.cwd(), 'index.html'), 'utf-8');
    document.documentElement.innerHTML = '';
    document.write(html);
    document.close();
    doc = document;
  });

  it('has nested lists (ul inside li)', () => {
    const nested = doc.querySelector('li > ul');
    expect(nested).not.toBeNull();
  });

  it('has an ordered list (for recipe)', () => {
    expect(doc.querySelector('ol')).not.toBeNull();
  });

  it('has a definition list', () => {
    expect(doc.querySelector('dl')).not.toBeNull();
  });

  it('has at least 3 dt terms', () => {
    expect(doc.querySelectorAll('dt').length).toBeGreaterThanOrEqual(3);
  });

  it('has at least 3 dd descriptions', () => {
    expect(doc.querySelectorAll('dd').length).toBeGreaterThanOrEqual(3);
  });

  it('has ol with at least 3 steps', () => {
    const ol = doc.querySelector('ol');
    expect(ol).not.toBeNull();
    expect(ol.querySelectorAll('li').length).toBeGreaterThanOrEqual(3);
  });
});
