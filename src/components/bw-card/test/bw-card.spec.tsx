import { newSpecPage } from '@stencil/core/testing';
import { BwCard } from '../bw-card';
import { describe, expect, it } from 'vitest';

describe('bw-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BwCard],
      html: `<bw-card></bw-card>`,
    });
    expect(page.root).toEqualHtml(`
      <bw-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </bw-card>
    `);
  });
});
