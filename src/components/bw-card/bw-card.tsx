import { Component, h } from '@stencil/core';

@Component({
  tag: 'bw-card',
  styleUrl: 'bw-card.css',
  shadow: true,
})
export class BwCard {
  render() {
    return (
      <div class="card">
        <h1>Blackwall card</h1>
      </div>
    );
  }
}
