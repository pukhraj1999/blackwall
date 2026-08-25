import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'bw-container',
  styleUrl: 'bw-container.css',
  shadow: true,
})
export class BwContainer {

  @Prop() mg:string = "0px";
  @Prop() pd:string = "10px";

  // Default container is secondary
  @Prop() primary: boolean = false;
  @Prop() grid:boolean = false;

  render() {
    return (
      <main class={{"container":true,"primary": this.primary , "container-grid": this.grid}} style={{margin:this.mg, padding:this.pd}}>
        <slot></slot>
      </main>
    );
  }
}
