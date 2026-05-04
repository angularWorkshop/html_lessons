import { describe, it, expect, beforeAll } from 'vitest';
import { readFileSync } from 'fs';
import { resolve } from 'path';

describe('Exercise 29.1 — Responsive Image Cards', () => {
  let css;

  beforeAll(() => { css = readFileSync(resolve(process.cwd(), 'styles.css'), 'utf-8'); });

  it('uses aspect-ratio', () => { expect(css).toContain('aspect-ratio'); });
  it('uses object-fit: cover', () => { expect(css).toContain('object-fit: cover'); });
  it('images responsive (max-width: 100%)', () => { expect(css).toMatch(/max-width:\s*100%/); });
});
