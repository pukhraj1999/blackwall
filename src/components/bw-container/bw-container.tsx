import { Component, h, Prop } from '@stencil/core';
import Theme from "../../models/themes";

@Component({
  tag: 'bw-container',
  styleUrl: 'bw-container.css',
  shadow: true,
})
export class BwContainer {

  @Prop() center: boolean = false;
  @Prop() spaceBetween: boolean = false;

  @Prop() mg: string = '';
  @Prop() pd: string = '';

  @Prop() mgV: string = '';
  @Prop() mgH: string = '';

  @Prop() pdH: string = '';
  @Prop() pdV: string = '';

  @Prop() border: string = '';
  @Prop() radiusTop: string = '';
  @Prop() radiusBottom: string = '';
  @Prop() radius: string = '';

  // Default container is secondary
  @Prop() primary: boolean = false;
  @Prop() grid: boolean = false;
  @Prop() flex: boolean = false;
  @Prop() split:boolean = false;

  render() {
    return (
      <main
        style={{
          margin: this.mg || '0px',
          marginTop: this.mgV || this.mg,
          marginBottom: this.mgV || this.mg,
          marginLeft: this.mgH || this.mg,
          marginRight: this.mgH || this.mg,

          padding: this.pd || "0px",
          paddingTop: this.pdV || this.pd,
          paddingBottom: this.pdV || this.pd,
          paddingLeft: this.pdH || this.pd,
          paddingRight: this.pdH || this.pd,

          borderColor: Theme.color,
          border: this.border || "none",
          borderRadius: this.radius || "0x",
          borderTopLeftRadius: this.radiusTop || this.radius,
          borderTopRightRadius: this.radiusTop || this.radius,
          borderBottomLeftRadius: this.radiusBottom || this.radius,
          borderBottomRightRadius: this.radiusBottom || this.radius,

          // apply theme
          color: Theme.color,
          backgroundColor: this.primary ? Theme.primary : Theme.secondary,
        }}
        class={{ "container-grid": this.grid, "container-center": this.center, "container-space-between": this.spaceBetween, 'container-flex': this.flex, 'container-split' : this.split }}>
        <slot></slot>
      </main>
    );
  }
}
