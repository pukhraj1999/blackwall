import { newSpecPage } from '@stencil/core/testing';
import { BwBtn } from '../bw-btn';
import { describe, expect, it } from 'vitest';

describe('bw-btn', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BwBtn],
      html: `<bw-btn></bw-btn>`,
    });
    expect(page.root).toEqualHtml(`
      <bw-btn>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </bw-btn>
    `);
  });
});
