import { Component, h, Prop, State } from '@stencil/core';
import ILink from '../../models/ILink';
import bar from '../../assets/bars-solid-full.svg';

@Component({
  tag: 'bw-nav',
  styleUrl: 'bw-nav.css',
  shadow: true,
})
export class BwNav {
  @State() links!: Array<ILink>;
  @State() isModalOpen: boolean = false;

  @Prop() mg: string = '0px';
  @Prop() pd: string = '10px';

  @Prop() homeLink: ILink = { name: 'Navbar', link: '#' };
  @Prop() navLinks: Array<ILink> = [
    { name: 'Search', link: '#' },
    { name: 'Manage', link: '#' },
    { name: 'About', link: '#' },
    { name: 'Profile', link: '#' },
  ];

  componentWillLoad() {
    this.links = this.navLinks;
  }

  private openModal = () => {
    this.isModalOpen = true;
  };

  render() {
    return (
      <section>
        <nav class="nav-container" style={{ margin: this.mg, padding: this.pd }}>
          <div class="left">
            <a href={this.homeLink.link} class="left-header">
              {this.homeLink.name}
            </a>
          </div>
          <div class="mid"></div>
          <div class="right">
            {this.links.map(({ name, link }) => (
              <a class="right-link" href={link}>
                {name}
              </a>
            ))}
          </div>
          <div class="mobile-right">
            <img onClick={this.openModal} class="burger-icon" src={bar} alt="" />
          </div>
        </nav>
        <bw-modal isOpen={this.isModalOpen} onModalClosed={() => (this.isModalOpen = false)}>
          <div class="mobile-link-box">
            {this.links.map(({ name, link }) => (
              <bw-btn name={name} link={link} onPress={() => this.isModalOpen = false}></bw-btn>
            ))}
          </div>
        </bw-modal>
      </section>
    );
  }
}
