import { Component, Event, EventEmitter, Prop, h } from '@stencil/core';

@Component({
  tag: 'bw-btn',
  styleUrl: 'bw-btn.css',
  shadow: true,
})
export class BwBtn {

  @Prop() name:string = "Name";
  @Prop() link:string = "#";
  
  @Event()
  Click!:EventEmitter<void>;

  private performAction = () => {
    this.Click.emit();
  }

  render() {
    return (
      <div class="btn-box">
        <a href={this.link} class="btn" onClick={this.performAction}>
          {this.name}
        </a>
      </div>
    );
  }
}
