import { readFileSync } from 'fs';
import { resolve } from 'path';

/**
 * Load an HTML file and parse it into a document.
 * Uses happy-dom globally set by vitest.
 */
export function loadHTML(filename = 'index.html') {
  const html = readFileSync(resolve(process.cwd(), filename), 'utf-8');
  document.documentElement.innerHTML = '';
  document.write(html);
  document.close();
  return document;
}

/**
 * Load a CSS file and return its text content.
 */
export function loadCSS(filename = 'styles.css') {
  return readFileSync(resolve(process.cwd(), filename), 'utf-8');
}

/**
 * Check that an element exists in the document.
 */
export function expectElement(selector, message) {
  const el = document.querySelector(selector);
  expect(el, message || `Expected element matching "${selector}" to exist`).not.toBeNull();
  return el;
}

/**
 * Check that N elements exist.
 */
export function expectElements(selector, minCount, message) {
  const els = document.querySelectorAll(selector);
  expect(els.length, message || `Expected at least ${minCount} elements matching "${selector}"`).toBeGreaterThanOrEqual(minCount);
  return els;
}
