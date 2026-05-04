import { describe, it, expect, beforeAll } from 'vitest';
import { readFileSync } from 'fs';
import { resolve } from 'path';

describe('Exercise 1.1 — First HTML Page', () => {
  let html, doc;

  beforeAll(() => {
    html = readFileSync(resolve(process.cwd(), 'index.html'), 'utf-8');
    document.documentElement.innerHTML = '';
    document.write(html);
    document.close();
    doc = document;
  });

  it('has DOCTYPE declaration', () => {
    expect(html.trim().toLowerCase().startsWith('<!doctype html>')).toBe(true);
  });

  it('has html tag with lang attribute', () => {
    const htmlEl = doc.querySelector('html');
    expect(htmlEl).not.toBeNull();
    expect(htmlEl.getAttribute('lang')).toBeTruthy();
  });

  it('has meta charset UTF-8', () => {
    const meta = doc.querySelector('meta[charset]');
    expect(meta).not.toBeNull();
    expect(meta.getAttribute('charset').toUpperCase()).toBe('UTF-8');
  });

  it('has meta viewport', () => {
    const meta = doc.querySelector('meta[name="viewport"]');
    expect(meta).not.toBeNull();
    expect(meta.getAttribute('content')).toContain('width=device-width');
  });

  it('has a non-empty title', () => {
    const title = doc.querySelector('title');
    expect(title).not.toBeNull();
    expect(title.textContent.trim().length).toBeGreaterThan(0);
  });

  it('has exactly one h1', () => {
    const h1s = doc.querySelectorAll('h1');
    expect(h1s.length).toBe(1);
  });

  it('has at least 2 paragraphs', () => {
    const ps = doc.querySelectorAll('p');
    expect(ps.length).toBeGreaterThanOrEqual(2);
  });
});
