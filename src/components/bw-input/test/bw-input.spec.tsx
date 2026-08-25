import { newSpecPage } from '@stencil/core/testing';
import { BwInput } from '../bw-input';
import { describe, expect, it } from 'vitest';

describe('bw-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BwInput],
      html: `<bw-input></bw-input>`,
    });
    expect(page.root).toEqualHtml(`
      <bw-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </bw-input>
    `);
  });
});
