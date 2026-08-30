import { Component, Event, EventEmitter, Prop, h } from '@stencil/core';

@Component({
  tag: 'bw-btn',
  styleUrl: 'bw-btn.css',
  shadow: true,
})
export class BwBtn {

  @Prop() name: string = "Name";
  @Prop() link: string = "#";
  @Prop() borderWidth: string = "2px";
  @Prop() radius: string = "0px";
  @Prop() size: string = "1.25rem";

  @Event()
  press!: EventEmitter<void>;

  private performAction = (event: MouseEvent) => {
    if (this.link === '#' || !this.link) {
      event.preventDefault();
    }
    this.press.emit();
  }

  render() {
    return (
      <div class="btn-box">
        <a
          href={this.link}
          style={{
            fontSize: this.size,
            border: this.borderWidth + " solid white",
            borderRadius: this.radius,
          }}
          class="btn"
          onClick={this.performAction}>
          {this.name}
        </a>
      </div>
    );
  }
}