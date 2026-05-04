import { describe, it, expect, beforeAll } from 'vitest';
import { readFileSync } from 'fs';
import { resolve } from 'path';

describe('Exercise 24.1 — Grid Areas Layout', () => {
  let css;

  beforeAll(() => { css = readFileSync(resolve(process.cwd(), 'styles.css'), 'utf-8'); });

  it('uses display: grid', () => { expect(css).toContain('display: grid'); });
  it('uses grid-template-areas', () => { expect(css).toContain('grid-template-areas'); });
  it('uses grid-area', () => { expect(css).toContain('grid-area'); });
});
