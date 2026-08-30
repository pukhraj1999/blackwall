import { newE2EPage } from '@stencil/core/testing';
import { describe, expect, it } from '@stencil/vitest';

describe('bw-img', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<bw-img></bw-img>');

    const element = await page.find('bw-img');
    expect(element).toHaveClass('hydrated');
  });
});
