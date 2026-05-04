import { describe, it, expect, beforeAll } from 'vitest';
import { readFileSync } from 'fs';
import { resolve } from 'path';

describe('Exercise 24.2 — Mosaic Gallery', () => {
  let css;

  beforeAll(() => { css = readFileSync(resolve(process.cwd(), 'styles.css'), 'utf-8'); });

  it('uses display: grid', () => { expect(css).toContain('display: grid'); });
  it('uses span for large items', () => { expect(css).toMatch(/span\s+2/); });
  it('uses object-fit: cover', () => { expect(css).toContain('object-fit: cover'); });
  it('uses gap', () => { expect(css).toMatch(/gap/); });
});
