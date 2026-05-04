import { describe, it, expect, beforeAll } from 'vitest';
import { readFileSync } from 'fs';
import { resolve } from 'path';

describe('Exercise 25.1 — Responsive Card Grid', () => {
  let css;

  beforeAll(() => { css = readFileSync(resolve(process.cwd(), 'styles.css'), 'utf-8'); });

  it('uses auto-fill or auto-fit', () => { expect(css).toMatch(/auto-(fill|fit)/); });
  it('uses minmax', () => { expect(css).toContain('minmax'); });
  it('uses display: grid', () => { expect(css).toContain('display: grid'); });
  it('no media queries for grid', () => { expect(css).not.toMatch(/@media.*grid/s); });
});
