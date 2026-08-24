import { newSpecPage } from '@stencil/core/testing';
import { BwContainer } from '../bw-container';
import { describe, expect, it } from 'vitest';

describe('bw-container', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BwContainer],
      html: `<bw-container></bw-container>`,
    });
    expect(page.root).toEqualHtml(`
      <bw-container>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </bw-container>
    `);
  });
});
