import { describe, it, expect, beforeAll } from 'vitest';
import { readFileSync } from 'fs';
import { resolve } from 'path';

function stripCssComments(source) {
  return source.replace(/\/\*[\s\S]*?\*\//g, '');
}

describe('Exercise 23.2 — Card with Pinned Button', () => {
  let css;

  beforeAll(() => { css = stripCssComments(readFileSync(resolve(process.cwd(), 'styles.css'), 'utf-8')); });

  it('cards use flex-direction: column', () => { expect(css).toContain('flex-direction: column'); });
  it('uses margin-top: auto', () => { expect(css).toContain('margin-top: auto'); });
  it('parent uses display: flex', () => { expect(css).toContain('display: flex'); });
});
