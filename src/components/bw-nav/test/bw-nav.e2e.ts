import { newE2EPage } from '@stencil/core/testing';
import { describe, expect, it } from '@stencil/vitest';

describe('bw-nav', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<bw-nav></bw-nav>');

    const element = await page.find('bw-nav');
    expect(element).toHaveClass('hydrated');
  });
});
