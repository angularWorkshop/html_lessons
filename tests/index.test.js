import { describe, it, expect, beforeAll } from 'vitest';
import { readFileSync } from 'fs';
import { resolve } from 'path';

describe('Exercise 8.1 — Media Page', () => {
  let doc;

  beforeAll(() => {
    const html = readFileSync(resolve(process.cwd(), 'index.html'), 'utf-8');
    document.documentElement.innerHTML = '';
    document.write(html);
    document.close();
    doc = document;
  });

  it('has a video with controls', () => {
    const video = doc.querySelector('video[controls]');
    expect(video).not.toBeNull();
  });

  it('video has at least one source', () => {
    expect(doc.querySelectorAll('video source').length).toBeGreaterThanOrEqual(1);
  });

  it('has an audio with controls', () => {
    expect(doc.querySelector('audio[controls]')).not.toBeNull();
  });

  it('has an iframe with title', () => {
    const iframe = doc.querySelector('iframe[title]');
    expect(iframe).not.toBeNull();
  });

  it('iframe has loading="lazy"', () => {
    expect(doc.querySelector('iframe[loading="lazy"]')).not.toBeNull();
  });

  it('has figure elements for media', () => {
    expect(doc.querySelectorAll('figure').length).toBeGreaterThanOrEqual(2);
  });
});
