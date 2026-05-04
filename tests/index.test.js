import { describe, it, expect, beforeAll } from 'vitest';
import { readFileSync } from 'fs';
import { resolve } from 'path';

describe('Exercise 22.1 — Flex Navbar', () => {
  let css;

  beforeAll(() => { css = readFileSync(resolve(process.cwd(), 'styles.css'), 'utf-8'); });

  it('uses display: flex', () => { expect(css).toContain('display: flex'); });
  it('uses justify-content', () => { expect(css).toContain('justify-content'); });
  it('uses align-items: center', () => { expect(css).toContain('align-items: center'); });
  it('uses gap', () => { expect(css).toMatch(/gap:\s*\d/); });
});
