import { newSpecPage } from '@stencil/core/testing';
import { BwNav } from '../bw-nav';
import { describe, expect, it } from '@stencil/vitest';

describe('bw-nav', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BwNav],
      html: `<bw-nav></bw-nav>`,
    });
    expect(page.root).toEqualHtml(`
      <bw-nav>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </bw-nav>
    `);
  });
});
