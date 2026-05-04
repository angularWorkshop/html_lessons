import { describe, it, expect, beforeAll } from 'vitest';
import { readFileSync } from 'fs';
import { resolve } from 'path';

describe('Exercise 21.1 — Sticky Header & Modal', () => {
  let css;

  beforeAll(() => { css = readFileSync(resolve(process.cwd(), 'styles.css'), 'utf-8'); });

  it('uses position: sticky', () => { expect(css).toContain('position: sticky'); });
  it('uses position: fixed', () => { expect(css).toContain('position: fixed'); });
  it('uses position: absolute', () => { expect(css).toContain('position: absolute'); });
  it('uses z-index', () => { expect(css).toContain('z-index'); });
  it('has logical z-index values (not 9999)', () => { expect(css).not.toContain('9999'); });
});
