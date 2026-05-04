import { describe, it, expect, beforeAll } from 'vitest';
import { readFileSync } from 'fs';
import { resolve } from 'path';

describe('Exercise 35.1 — Custom Forms', () => {
  let css;

  beforeAll(() => { css = readFileSync(resolve(process.cwd(), 'styles.css'), 'utf-8'); });

  it('uses appearance: none', () => { expect(css).toContain('appearance: none'); });
  it('styles :checked state', () => { expect(css).toContain(':checked'); });
  it('has transition for toggle', () => { expect(css).toContain('transition'); });
  it('uses :focus-visible', () => { expect(css).toContain(':focus-visible'); });
});
