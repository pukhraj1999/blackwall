import { newE2EPage } from '@stencil/core/testing';
import { describe, expect, it } from 'vitest';

describe('bw-container', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<bw-container></bw-container>');

    const element = await page.find('bw-container');
    expect(element).toHaveClass('hydrated');
  });
});
