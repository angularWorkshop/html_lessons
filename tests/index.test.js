import { describe, it, expect, beforeAll } from 'vitest';
import { readFileSync } from 'fs';
import { resolve } from 'path';

describe('Exercise 23.1 — Holy Grail Layout', () => {
  let css;

  beforeAll(() => { css = readFileSync(resolve(process.cwd(), 'styles.css'), 'utf-8'); });

  it('uses flex-direction: column', () => { expect(css).toContain('flex-direction: column'); });
  it('uses flex: 1 for content', () => { expect(css).toMatch(/flex:\s*1/); });
  it('sidebars have fixed basis', () => { expect(css).toMatch(/flex:\s*0\s+0\s+\d+px/); });
  it('uses min-height: 100vh', () => { expect(css).toContain('100vh'); });
});
