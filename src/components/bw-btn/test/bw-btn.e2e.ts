import { newE2EPage } from '@stencil/core/testing';
import { describe, expect, it } from 'vitest';

describe('bw-btn', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<bw-btn></bw-btn>');

    const element = await page.find('bw-btn');
    expect(element).toHaveClass('hydrated');
  });
});
