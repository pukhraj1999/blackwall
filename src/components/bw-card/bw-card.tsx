import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'bw-card',
  styleUrl: 'bw-card.css',
  shadow: true,
})
export class BwCard {

  tagColors = ["rgb(193, 31, 63)", "rgb(34, 64, 183)","rgb(203, 142, 10)", "rgb(25, 84, 33)", "rgb(191, 23, 221)"];

  @Prop() imgSrc: string = 'https://images.pexels.com/photos/8162589/pexels-photo-8162589.jpeg?_gl=1*bpmwgc*_ga*OTY5NTU4NTMzLjE3ODc1MDcwMDk.*_ga_8JE65Q40S6*czE3ODc1MDcwMDkkbzEkZzEkdDE3ODc1MDcwNTkkajEwJGwwJGgw';
  @Prop() imgAlt: string = 'Blackwall card image';
  
  @Prop() name: string = 'Blackwall card';
  
  @Prop() description: string = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. At eos animi impedit natus, non corrupti iste, voluptas ut asperiores saepe architecto veritatis quos doloribus inventore laudantium suscipit sequi? Laudantium, repellat!
          Architecto ex modi, sed non voluptatum ut iusto quaerat quia deserunt quibusdam. Ad voluptas exercitationem voluptatum labore expedita inventore, ea voluptate ut incidunt! Natus sed debitis quos amet atque laboriosam.
          Mollitia impedit recusandae, optio reprehenderit voluptates quidem dolorem non omnis rem nostrum sint odio ullam sequi animi quis dolor id voluptatum minima. Eveniet, alias possimus ab neque iste animi totam!
          Quod distinctio deserunt porro error quisquam sint iusto facilis dolore enim earum labore aspernatur sunt voluptate perferendis vero provident dolores nemo animi obcaecati, dicta ipsa blanditiis! At quam in nostrum.
          Enim quod, saepe tempore dolor quaerat atque vel mollitia aliquid delectus animi ratione magnam. Accusantium numquam asperiores sunt quo amet obcaecati cumque, mollitia, id illo quod, ea nobis tempora sequi.s`;
  @Prop() descriptionLength: number = 200;
  
  @Prop() tagTitle: string = 'Tags:';
  @Prop() tags: string[] = ['Fast', 'Junk','Heavy','Vegie Loaded'];
  @Prop() Link: string = '#';

  componentWillLoad() {
    this.description = this.description.length > this.descriptionLength ? this.description.substring(0, this.descriptionLength) + '...' : this.description;
  }

  getColorForTag(index:number): string {
    return this.tagColors[index % this.tagColors.length];
  }

  render() {
    return (
      <div class="card">
        <img src={this.imgSrc} alt={this.imgAlt} class="card-img" />
        <div class="card-content">
          <p class="card-title">{this.name}</p>
          <div class="card-tags">
            <span class="card-tag-title">{this.tagTitle}</span>
            {this.tags.map((tag, index) => (
              <span class="card-tag" style={{ backgroundColor: this.getColorForTag(index) }}>{tag}</span>
            ))}
          </div>
          <p class="card-description">{this.description}</p>
          <div class="card-btn-box">
            <a href={this.Link} class="card-btn">Learn More</a>
          </div>
        </div>
      </div>
    );
  }
}

