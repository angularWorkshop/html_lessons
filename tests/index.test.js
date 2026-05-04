import { describe, it, expect, beforeAll } from 'vitest';
import { readFileSync } from 'fs';
import { resolve } from 'path';

describe('Exercise 30.1 — Hover Effects', () => {
  let css;

  beforeAll(() => { css = readFileSync(resolve(process.cwd(), 'styles.css'), 'utf-8'); });

  it('uses transition', () => { expect(css).toContain('transition'); });
  it('uses transform', () => { expect(css).toContain('transform'); });
  it('uses :hover', () => { expect(css).toContain(':hover'); });
  it('uses translateY or scale', () => { expect(css).toMatch(/translateY|scale/); });
});
