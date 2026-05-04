import { describe, it, expect, beforeAll } from 'vitest';
import { readFileSync } from 'fs';
import { resolve } from 'path';

describe('Exercise 19.1 — Product Card', () => {
  let css;

  beforeAll(() => { css = readFileSync(resolve(process.cwd(), 'styles.css'), 'utf-8'); });

  it('sets box-sizing border-box globally', () => { expect(css).toContain('border-box'); });
  it('card has fixed width', () => { expect(css).toMatch(/width:\s*300px/); });
  it('uses margin: 0 auto for centering', () => { expect(css).toMatch(/margin:\s*0\s+auto/); });
  it('has border-radius', () => { expect(css).toContain('border-radius'); });
  it('has box-shadow', () => { expect(css).toContain('box-shadow'); });
});
