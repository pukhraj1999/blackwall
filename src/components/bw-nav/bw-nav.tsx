import { Component, h, Prop, State } from '@stencil/core';
import ILink from '../../models/ILink';

@Component({
  tag: 'bw-nav',
  styleUrl: 'bw-nav.css',
  shadow: true,
})
export class BwNav {
  
  @State() links!:Array<ILink>;
  
  @Prop() mg: string = '0px';
  @Prop() pd: string = '10px';

  @Prop() homeLink:ILink = {name:"Navbar", link:"#"};
  @Prop() navLinks:Array<ILink> = [
    {name:"Search",link:"#"},
    {name:"Manage",link:"#"},
    {name:"About",link:"#"},
    {name:"Profile",link:"#"}
  ];

  componentWillLoad(){
    this.links = this.navLinks;
  }


  render() {
    return (
      <nav class="nav-container" style={{ margin: this.mg, padding: this.pd }}>
        <div class="left">
          <a href={this.homeLink.link} class="left-header">{this.homeLink.name}</a>
        </div>
        <div class="mid"></div>
        <div class="right">
          {this.links.map(({name,link}) => <a class="right-link" href={link}>
            {name}
          </a>)}
        </div>
      </nav>
    );
  }
}
