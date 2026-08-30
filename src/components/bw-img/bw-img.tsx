import { Component, h, Prop } from '@stencil/core';
import Theme from "../../models/themes";

@Component({
  tag: 'bw-img',
  styleUrl: 'bw-img.css',
  shadow: true,
})
export class BwImg {

  @Prop() imgSrc!: string;
  @Prop() imgAlt!: string;

  @Prop() width: string = "100%"
  @Prop() height: string = "250px"

  @Prop() border: string='';
  @Prop() radiusTop: string='';
  @Prop() radiusBottom: string='';
  @Prop() radius: string='';

  render() {
    return (
      <img
        style={{
          width: this.width,
          height: this.height,
          borderColor: Theme.color,
          border: this.border || "none",
          borderRadius: this.radius || "0x",
          borderTopLeftRadius: this.radiusTop || this.radius,
          borderTopRightRadius: this.radiusTop || this.radius,
          borderBottomLeftRadius: this.radiusBottom || this.radius,
          borderBottomRightRadius: this.radiusBottom || this.radius
        }}
        src={this.imgSrc || ''} alt={this.imgAlt} class="card-img" />
    );
  }
}
