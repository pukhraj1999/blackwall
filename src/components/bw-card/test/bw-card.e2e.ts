import { newE2EPage } from '@stencil/core/testing';
import { describe, expect, it } from '@stencil/vitest';

describe('bw-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<bw-card></bw-card>');

    const element = await page.find('bw-card');
    expect(element).toHaveClass('hydrated');
  });
});
