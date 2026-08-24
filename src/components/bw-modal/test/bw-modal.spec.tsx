import { newSpecPage } from '@stencil/core/testing';
import { BwModal } from '../bw-modal';
import { describe, expect, it } from 'vitest';

describe('bw-modal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BwModal],
      html: `<bw-modal></bw-modal>`,
    });
    expect(page.root).toEqualHtml(`
      <bw-modal>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </bw-modal>
    `);
  });
});
