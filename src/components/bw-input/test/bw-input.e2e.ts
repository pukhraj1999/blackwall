import { newE2EPage } from '@stencil/core/testing';
import { describe, expect, it } from 'vitest';

describe('bw-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<bw-input></bw-input>');

    const element = await page.find('bw-input');
    expect(element).toHaveClass('hydrated');
  });
});
