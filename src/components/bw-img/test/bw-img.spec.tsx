import { newSpecPage } from '@stencil/core/testing';
import { BwImg } from '../bw-img';
import { describe, expect, it } from 'vitest';

describe('bw-img', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BwImg],
      html: `<bw-img></bw-img>`,
    });
    expect(page.root).toEqualHtml(`
      <bw-img>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </bw-img>
    `);
  });
});
