import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'bw-btn',
  styleUrl: 'bw-btn.css',
  shadow: true,
})
export class BwBtn {

  @Prop() name:string = "Name";
  @Prop() link:string = "#";
   
  render() {
    return (
      <div class="btn-box">
        <a href={this.link} class="btn">
          {this.name}
        </a>
      </div>
    );
  }
}
