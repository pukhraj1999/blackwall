import { newE2EPage } from '@stencil/core/testing';
import { describe, expect, it } from 'vitest';

describe('bw-modal', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<bw-modal></bw-modal>');

    const element = await page.find('bw-modal');
    expect(element).toHaveClass('hydrated');
  });
});
